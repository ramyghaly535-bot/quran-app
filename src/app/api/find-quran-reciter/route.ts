import { NextRequest, NextResponse } from 'next/server'

// Cache discovered reciter mappings (in-memory, survives for the server lifetime)
const DISCOVERED_MAP: Record<string, number> = {}

// Comprehensive known mappings: dl folder name → quran.com chapter_recitations ID
// All IDs verified to have actual timestamps
const KNOWN_DL_MAP: Record<string, number> = {
  // === المقرئون المدمجون (مُتحقَّق منهم) ===
  'afasy': 7, 'afasy_tajweed': 7,
  'abdulbasit': 2, 'abdulbasit_mujawwad': 1,
  'husary': 6, 'husary_mujawwad': 12, 'husary_tajweed': 6, 'm_husary': 6,
  'minshawi': 9, 'minshawi_mujawwad': 8, 'minshawi_kids': 168,
  'sudais': 3, 'sudais_tajweed': 3,
  'ajamy': 19, 'basfar': 66,
  'shatri': 4, 'shur': 10, 'shur_tajweed': 10, 'm_shur': 10,
  // === قراء إضافيون مُتحقَّق منهم ===
  'aboona': 17, 'sahl': 17,
  'fares': 14, 'hane': 14,
  'salah_budair': 43, 'hajjaji': 44, 'tablawi': 91,
  'yasser': 97, 'yasser_mujawwad': 97, 'dossari': 97,
  'ketbi': 11, 'balilah': 44,
  // === قراء جدد مُتحقَّق منهم ===
  'qtm': 104, 'jleel': 170, 'maher': 159,
  'juhany': 162, 'juhany_tajweed': 162,
  'jaber': 158, 'naina': 126, 'kandari': 160,
  'hajjaji2': 128, 'khalifi': 161, 'matroud': 124,
  'albana': 129, 'husary_iza3a': 122, 'nasseralketbi': 11,
  // === قراء من mp3quran.net pool مُتحقَّق منهم ===
  'ghamdi': 7, 'jaber': 158, 'thubaiti': 104, 'makhloof': 104,
  'zahran': 97, 'maali': 7, 'fawzan': 7, 'kalbani': 7,
}

// Name-based mapping: partial Arabic name → quran.com ID
// Used when dl folder doesn't match any known entry
const NAME_HINTS: Array<{ keyword: string; qcId: number }> = [
  { keyword: 'عفاسي', qcId: 7 },
  { keyword: 'عبدالباسط', qcId: 2 },
  { keyword: 'الحصري', qcId: 6 },
  { keyword: 'المنشاوي', qcId: 9 },
  { keyword: 'السديس', qcId: 3 },
  { keyword: 'المعيقلي', qcId: 159 },
  { keyword: 'الحذيفي', qcId: 6 },
  { keyword: 'العجمي', qcId: 19 },
  { keyword: 'البصفر', qcId: 66 },
  { keyword: 'الشريم', qcId: 10 },
  { keyword: 'الدوسري', qcId: 97 },
  { keyword: 'القطامي', qcId: 104 },
  { keyword: 'الجليل', qcId: 170 },
  { keyword: 'الجهني', qcId: 162 },
  { keyword: 'جابر', qcId: 158 },
  { keyword: 'ناينع', qcId: 126 },
  { keyword: 'الكندري', qcId: 160 },
  { keyword: 'الخليفي', qcId: 161 },
  { keyword: 'الطبلاوي', qcId: 91 },
  { keyword: 'الشاطري', qcId: 4 },
  { keyword: 'أبكر', qcId: 7 },
  { keyword: 'الفوزان', qcId: 7 },
  { keyword: 'الحدوشي', qcId: 97 },
  { keyword: 'الغامدي', qcId: 7 },
  { keyword: 'الثبيتي', qcId: 104 },
  { keyword: 'مخلوف', qcId: 104 },
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name')
  const dl = searchParams.get('dl')

  if (!name && !dl) {
    return NextResponse.json({ error: 'Missing name or dl parameter' }, { status: 400 })
  }

  try {
    // 1) Check cache first
    const cacheKey = dl || name || ''
    if (DISCOVERED_MAP[cacheKey]) {
      return NextResponse.json({
        found: true,
        reciterId: DISCOVERED_MAP[cacheKey],
        cached: true,
        source: 'cache'
      })
    }

    // 2) Check known DL map
    if (dl && KNOWN_DL_MAP[dl]) {
      DISCOVERED_MAP[cacheKey] = KNOWN_DL_MAP[dl]
      return NextResponse.json({
        found: true,
        reciterId: KNOWN_DL_MAP[dl],
        cached: false,
        source: 'known_map'
      })
    }

    // 3) Try name-based matching
    if (name) {
      for (const hint of NAME_HINTS) {
        if (name.includes(hint.keyword) || hint.keyword.includes(name)) {
          // Verify the matched ID actually has timestamps
          const verified = await verifyQCId(hint.qcId)
          if (verified) {
            DISCOVERED_MAP[cacheKey] = hint.qcId
            return NextResponse.json({
              found: true,
              reciterId: hint.qcId,
              cached: false,
              source: 'name_match'
            })
          }
        }
      }
    }

    // 4) If we have a dl folder but no known mapping, scan common QC IDs
    if (dl && !KNOWN_DL_MAP[dl]) {
      // Scan IDs 1-200 for matching audio path containing the dl name
      const scanResult = await scanForReciter(dl)
      if (scanResult) {
        DISCOVERED_MAP[cacheKey] = scanResult
        return NextResponse.json({
          found: true,
          reciterId: scanResult,
          cached: false,
          source: 'scan'
        })
      }
    }

    return NextResponse.json({ found: false, dl, name })

  } catch (error: any) {
    return NextResponse.json({ found: false, error: error.message || 'Discovery failed' }, { status: 200 })
  }
}

// Verify a quran.com reciter ID has actual timestamps (test with Al-Fatiha)
async function verifyQCId(qcId: number): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.quran.com/api/v4/chapter_recitations/${qcId}/1?segments=true`,
      { headers: { 'Accept': 'application/json' }, cache: 'no-store' }
    )
    if (!res.ok) return false
    const data = await res.json()
    const timestamps = data.audio_file?.timestamps || data.audio_file?.verse_timings || []
    return timestamps.length > 0
  } catch {
    return false
  }
}

// Scan quran.com reciter IDs to find one matching the dl folder name
// Checks IDs that are known to have timestamps: 1-200
async function scanForReciter(dl: string): Promise<number | null> {
  const cleanDl = dl.replace(/[^a-z0-9]/gi, '').toLowerCase()
  // Known IDs with timestamps (from previous scanning): 1-174
  const knownIds = [
    1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 17, 19, 43, 44, 66, 91, 97,
    104, 122, 124, 126, 128, 129, 158, 159, 160, 161, 162, 168, 170
  ]

  for (const id of knownIds) {
    try {
      const res = await fetch(
        `https://api.quran.com/api/v4/chapter_recitations/${id}/1?segments=true`,
        { headers: { 'Accept': 'application/json' }, cache: 'no-store' }
      )
      if (!res.ok) continue
      const data = await res.json()
      const audioUrl = data.audio_file?.audio_url || ''
      // Extract reciter folder from audio URL
      // Example: https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3
      const urlPath = audioUrl.split('/').filter(Boolean)
      // Get the reciter folder (usually the second-to-last or third-to-last path segment)
      const pathClean = urlPath.map(p => p.replace(/[^a-z0-9]/gi, '').toLowerCase())
      
      // Check if any path segment matches or is similar to our dl folder
      for (const segment of pathClean) {
        if (segment.length < 2) continue
        if (segment.includes(cleanDl) || cleanDl.includes(segment)) {
          // Verify it has timestamps
          const timestamps = data.audio_file?.timestamps || []
          if (timestamps.length > 0) return id
        }
      }
    } catch {
      continue
    }
  }

  return null
}
