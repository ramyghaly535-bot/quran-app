import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 120

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const surah = parseInt(searchParams.get('surah') || '0')
  const reciter = searchParams.get('reciter') || 'ar.alafasy'
  const qcId = searchParams.get('qcId') ? parseInt(searchParams.get('qcId')!) : null
  const directUrl = searchParams.get('url') || null

  if (!surah || surah < 1 || surah > 114) {
    return NextResponse.json({ error: 'Invalid surah number' }, { status: 400 })
  }

  // Method 1: Quran.com full surah MP3 (fastest - single file download)
  if (qcId) {
    try {
      const syncRes = await fetch(
        `https://api.quran.com/api/v4/chapter_recitations/${qcId}/${surah}?segments=true`,
        { headers: { 'Accept': 'application/json' }, cache: 'no-store' }
      )
      if (syncRes.ok) {
        const syncData = await syncRes.json()
        const audioUrl = syncData.audio_file?.audio_url
        if (audioUrl) {
          // Redirect to the actual audio file for direct download
          return NextResponse.redirect(audioUrl, 302)
        }
      }
    } catch {
      // Fall through to next method
    }
  }

  // Method 2: Direct URL redirect (for mp3quran.net or any direct link)
  if (directUrl) {
    const padded = String(surah).padStart(3, '0')
    const finalUrl = directUrl.replace('{num}', padded).replace('{surah}', String(surah))
    return NextResponse.redirect(finalUrl, 302)
  }

  // Method 3: Alquran.cloud API (ayah-by-ayah merge - slower)
  try {
    const apiRes = await fetch(
      `https://api.alquran.cloud/v1/surah/${surah}/${reciter}`,
      { next: { revalidate: 86400 } }
    )

    if (!apiRes.ok) throw new Error('API error')

    const apiData = await apiRes.json()
    if (apiData.code !== 200 || !apiData.data || !apiData.data.ayahs) {
      throw new Error('Invalid API response')
    }

    const ayahs = apiData.data.ayahs
    const audioUrls: string[] = ayahs.map((a: { audio: string }) => a.audio).filter(Boolean)

    if (audioUrls.length === 0) {
      throw new Error('No audio URLs found')
    }

    const chunks: Uint8Array[] = []
    let totalSize = 0

    for (let i = 0; i < audioUrls.length; i++) {
      const res = await fetch(audioUrls[i])
      if (!res.ok) continue

      const buffer = await res.arrayBuffer()
      const chunk = new Uint8Array(buffer)
      chunks.push(chunk)
      totalSize += chunk.length
    }

    if (totalSize === 0) {
      throw new Error('Failed to download audio')
    }

    const merged = new Uint8Array(totalSize)
    let offset = 0
    for (const chunk of chunks) {
      merged.set(chunk, offset)
      offset += chunk.length
    }

    const surahName = apiData.data.englishName || `Surah_${surah}`
    const filename = `${surahName}.mp3`

    return new NextResponse(merged, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(totalSize),
        'Cache-Control': 'public, max-age=604800',
      },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Download failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
