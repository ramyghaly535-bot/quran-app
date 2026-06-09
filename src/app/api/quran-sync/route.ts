import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const reciterId = searchParams.get('reciter')
  const chapter = searchParams.get('chapter')

  if (!reciterId || !chapter) {
    return NextResponse.json({ error: 'Missing reciter or chapter parameter' }, { status: 400 })
  }

  try {
    const url = `https://api.quran.com/api/v4/chapter_recitations/${reciterId}/${chapter}?segments=true`
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Quran.com API error', status: res.status }, { status: res.status })
    }

    const data = await res.json()

    // Normalize: add verse_timings in standard format {verse_key, start_time, end_time}
    if (data.audio_file && data.audio_file.timestamps) {
      data.audio_file.verse_timings = data.audio_file.timestamps.map(
        (t: { verse_key: string; timestamp_from: number; timestamp_to: number }) => ({
          verse_key: t.verse_key,
          start_time: t.timestamp_from,
          end_time: t.timestamp_to,
        })
      )
    }

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch sync data' }, { status: 500 })
  }
}
