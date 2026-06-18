import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=604800, stale-while-revalidate=2592000',
}

// ─── Fetch helper ─────────────────────────────────────────────────────────────
async function tryFetch(url: string): Promise<Response | null> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; SarauLuxury/1.0; +https://sarau-luxury.com)',
      },
      signal: AbortSignal.timeout(5000),
    })
    if (res.ok && res.headers.get('Content-Type')?.startsWith('image')) {
      return res
    }
  } catch {
    // ignore timeout / network error
  }
  return null
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { domain: string } }
) {
  const domain = params.domain.toLowerCase().replace(/[^a-z0-9.-]/g, '')

  if (!domain || domain.length < 4) {
    return new NextResponse(null, { status: 400 })
  }

  // ── 1. Clearbit (best quality) ──────────────────────────────────────────────
  const clearbit = await tryFetch(`https://logo.clearbit.com/${domain}`)
  if (clearbit) {
    const buf = await clearbit.arrayBuffer()
    return new NextResponse(buf, {
      headers: {
        'Content-Type': clearbit.headers.get('Content-Type') || 'image/png',
        ...CACHE_HEADERS,
      },
    })
  }

  // ── 2. Google Favicon v2 (128 px, works for any live site) ─────────────────
  const googleFavicon = await tryFetch(
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`
  )
  if (googleFavicon) {
    const buf = await googleFavicon.arrayBuffer()
    return new NextResponse(buf, {
      headers: {
        'Content-Type': 'image/png',
        ...CACHE_HEADERS,
      },
    })
  }

  // ── 3. DuckDuckGo favicon (last resort) ────────────────────────────────────
  const ddg = await tryFetch(`https://icons.duckduckgo.com/ip3/${domain}.ico`)
  if (ddg) {
    const buf = await ddg.arrayBuffer()
    return new NextResponse(buf, {
      headers: {
        'Content-Type': ddg.headers.get('Content-Type') || 'image/x-icon',
        ...CACHE_HEADERS,
      },
    })
  }

  return new NextResponse(null, { status: 404 })
}
