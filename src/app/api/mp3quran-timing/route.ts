import { NextRequest, NextResponse } from 'next/server'

// In-memory cache for timing data (surah-level)
const TIMING_CACHE: Record<string, { data: any; timestamp: number }> = {}
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

// mp3quran.net timing reads: read_id → folder info for 115 reciters
// This map is auto-populated from the mp3quran timing API reads endpoint
const TIMING_READS: Record<number, { name: string; rewaya: string; folder_url: string; soar_count: number }> = {}

// Populate TIMING_READS on first request
let readsInitialized = false
async function initReads() {
  if (readsInitialized) return
  try {
    const res = await fetch('https://www.mp3quran.net/api/v3/ayat_timing/reads', {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    })
    if (res.ok) {
      const reads: Array<{ id: number; name: string; rewaya: string; folder_url: string; soar_count: number }> = await res.json()
      for (const r of reads) {
        TIMING_READS[r.id] = { name: r.name, rewaya: r.rewaya, folder_url: r.folder_url, soar_count: r.soar_count }
      }
      readsInitialized = true
    }
  } catch {
    // Fallback: use hardcoded known reads
    readsInitialized = true
  }
}

// Map folder name (from audio URL) → read_id for quick lookup
// Populated dynamically from TIMING_READS
function findReadIdByFolder(folder: string): number | null {
  for (const [id, info] of Object.entries(TIMING_READS)) {
    const folderUrl = info.folder_url
    // Extract folder path from URL: https://serverX.mp3quran.net/folder/ → folder
    const urlFolder = folderUrl.replace(/^https:\/\/[^\/]+\/(.+)\/$/, '$1').replace(/\/.*$/, '')
    if (urlFolder === folder || folderUrl.includes('/' + folder + '/')) {
      return Number(id)
    }
  }
  return null
}

// Find read_id by matching audio URL against folder_url
function findReadIdByUrl(audioUrl: string): number | null {
  for (const [id, info] of Object.entries(TIMING_READS)) {
    if (info.folder_url && audioUrl.startsWith(info.folder_url.replace(/\/$/, ''))) {
      return Number(id)
    }
  }
  return null
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sura = searchParams.get('sura')
  const read = searchParams.get('read')
  const folder = searchParams.get('folder')
  const url = searchParams.get('url')

  await initReads()

  // If no sura requested, return list of available reads
  if (!sura) {
    return NextResponse.json({
      reads: Object.entries(TIMING_READS).map(([id, info]) => ({
        id: Number(id),
        name: info.name,
        rewaya: info.rewaya,
        folder_url: info.folder_url,
        soar_count: info.soar_count
      })),
      total: Object.keys(TIMING_READS).length
    })
  }

  const suraNum = parseInt(sura, 10)
  if (isNaN(suraNum) || suraNum < 1 || suraNum > 114) {
    return NextResponse.json({ error: 'Invalid sura number' }, { status: 400 })
  }

  // Determine read_id
  let readId: number | null = null
  if (read) {
    readId = parseInt(read, 10)
  } else if (folder) {
    readId = findReadIdByFolder(folder)
  } else if (url) {
    readId = findReadIdByUrl(url)
  }

  if (!readId) {
    return NextResponse.json({ error: 'Could not find matching read. Provide read, folder, or url parameter.', available_reads: Object.keys(TIMING_READS).length }, { status: 400 })
  }

  // Check cache
  const cacheKey = `${readId}:${suraNum}`
  const cached = TIMING_CACHE[cacheKey]
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json({ ...cached.data, cached: true })
  }

  // Fetch from mp3quran.net timing API
  try {
    const apiUrl = `https://www.mp3quran.net/api/v3/ayat_timing?read=${readId}&sura=${suraNum}`
    const res = await fetch(apiUrl, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch timing data', status: res.status }, { status: res.status })
    }

    const timings = await res.json()

    // Normalize to standard verse timing format
    const verseTimings = timings.map((t: any) => ({
      ayah: t.ayah,
      start_time: t.start_time,
      end_time: t.end_time,
      // Include visual positioning data from mp3quran
      polygon: t.polygon || null,
      page: t.page || null,
      x: t.x || null,
      y: t.y || null
    }))

    const result = {
      read_id: readId,
      sura: suraNum,
      ayah_count: verseTimings.length,
      verse_timings: verseTimings,
      source: 'mp3quran_timing'
    }

    // Cache result
    TIMING_CACHE[cacheKey] = { data: result, timestamp: Date.now() }

    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch timing data' }, { status: 500 })
  }
}
