import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
    }

    // Basic URL validation
    const parsed = new URL(url)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return NextResponse.json({ error: 'Only HTTP/HTTPS URLs are supported' }, { status: 400 })
    }

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ClaudeAssistant/1.0)',
      },
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch URL: ${response.status} ${response.statusText}` },
        { status: 400 }
      )
    }

    const contentType = response.headers.get('content-type') ?? ''
    let content = ''

    if (contentType.includes('text/html')) {
      const html = await response.text()
      // Strip HTML tags and excessive whitespace
      content = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 8000) // limit size
    } else if (contentType.includes('text/')) {
      content = (await response.text()).slice(0, 8000)
    } else {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 })
    }

    return NextResponse.json({ content, url })
  } catch (err) {
    console.error('Fetch URL error:', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Failed to fetch URL: ${message}` }, { status: 500 })
  }
}
