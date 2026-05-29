import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 60

interface ReciterResult {
  name: string
  folder: string
  url: string
  image: string
  rewaya: string
  surahCount: number
}

interface ApiMoshaf {
  id: number
  name: string
  rewaya_id: number
  server: string
  surah_total: number
  moshaf_type: number
  surah_list: string
}

interface ApiReciter {
  id: number
  name: string
  letter: string
  date: string
  moshaf: ApiMoshaf[]
}

let cachedReciters: ApiReciter[] | null = null
let cacheTime = 0
const CACHE_DURATION = 3600000

async function getAllReciters(): Promise<ApiReciter[]> {
  const now = Date.now()
  if (cachedReciters && now - cacheTime < CACHE_DURATION) {
    return cachedReciters
  }

  try {
    const res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar', {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const json = await res.json()
    if (json?.reciters) {
      cachedReciters = json.reciters
      cacheTime = now
      return cachedReciters
    }
  } catch (e) {
    console.error('Failed to fetch mp3quran.net API:', e)
  }

  if (cachedReciters) return cachedReciters
  return []
}

function processMoshaf(reciter: ApiReciter, moshaf: ApiMoshaf): ReciterResult | null {
  const serverUrl = moshaf.server
  if (!serverUrl) return null

  try {
    const url = new URL(serverUrl)
    const basePath = url.pathname.replace(/^\//, '').replace(/\/$/, '')
    const folder = basePath.replace(/\//g, '_')
    const baseUrl = `${url.origin}/${basePath}`

    return {
      name: reciter.name,
      folder,
      url: `${baseUrl}/{num}.mp3`,
      image: `https://picsum.photos/seed/${basePath.split('/')[0]}/100/100`,
      rewaya: moshaf.name || '',
      surahCount: moshaf.surah_total || 0
    }
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim() || ''

  try {
    const reciters = await getAllReciters()

    if (!reciters.length) {
      return NextResponse.json({ results: [], error: 'تعذر جلب بيانات القراء' })
    }

    if (!query) {
      const results: ReciterResult[] = []
      for (const reciter of reciters) {
        if (reciter.moshaf?.[0]) {
          const result = processMoshaf(reciter, reciter.moshaf[0])
          if (result) results.push(result)
        }
        if (results.length >= 30) break
      }
      return NextResponse.json({ results })
    }

    const scored: { reciter: ApiReciter; score: number }[] = []
    const normalizedQuery = query.replace(/\s+/g, ' ').trim()
    const queryWords = normalizedQuery.split(' ').filter(w => w.length >= 1)

    for (const reciter of reciters) {
      const name = (reciter.name || '').trim()
      const nameWords = name.split(' ').filter(w => w.length >= 1)
      let score = 0

      if (name === normalizedQuery) {
        score = 1000
      } else if (name.includes(normalizedQuery)) {
        score = 500
      } else if (normalizedQuery.includes(name)) {
        score = 400
      } else {
        let matchedWords = 0
        for (const qw of queryWords) {
          for (const nw of nameWords) {
            if (nw.includes(qw) || qw.includes(nw)) {
              matchedWords++
              break
            }
          }
        }
        if (matchedWords > 0) {
          score = matchedWords * 100
          if (queryWords[0] && nameWords[0].includes(queryWords[0])) score += 50
          const ratio = matchedWords / Math.max(queryWords.length, nameWords.length)
          score += Math.round(ratio * 200)
        }
      }

      if (score > 0) {
        scored.push({ reciter, score })
      }
    }

    scored.sort((a, b) => b.score - a.score)

    const results: ReciterResult[] = []
    const seenFolders = new Set<string>()

    for (const { reciter } of scored) {
      for (const moshaf of reciter.moshaf || []) {
        const result = processMoshaf(reciter, moshaf)
        if (result && !seenFolders.has(result.folder)) {
          seenFolders.add(result.folder)
          results.push(result)
        }
      }
      if (results.length >= 20) break
    }

    return NextResponse.json({ results })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ results: [], error: message })
  }
}
