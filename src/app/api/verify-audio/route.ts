import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }

  try {
    // Test audio URL with HEAD request (lighter than GET)
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000) // 8 second timeout

    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; QuranApp/1.0)',
      },
    })

    clearTimeout(timeout)

    const contentType = res.headers.get('content-type') || ''
    const contentLength = res.headers.get('content-length')
    const size = contentLength ? parseInt(contentLength) : 0

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      contentType,
      contentLength: size,
      sizeMB: size ? (size / (1024 * 1024)).toFixed(2) + ' MB' : 'unknown',
      isAudio: contentType.includes('audio') || contentType.includes('octet-stream'),
    })
  } catch (error: any) {
    const isTimeout = error.name === 'AbortError'
    return NextResponse.json({
      ok: false,
      status: 0,
      error: isTimeout ? 'timeout' : (error.message || 'Connection failed'),
      isAudio: false,
    })
  }
}
