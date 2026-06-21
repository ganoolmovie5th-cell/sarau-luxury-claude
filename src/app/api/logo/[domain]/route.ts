import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const dynamic = 'force-dynamic'

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=604800, stale-while-revalidate=2592000',
}

const EXT_MIME: Record<string, string> = {
  png:  'image/png',
  svg:  'image/svg+xml',
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
}

// ─── Fetch helper ─────────────────────────────────────────────────────────────
async function tryFetch(url: string): Promise<Response | null> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://sarau-luxury.com',
      },
      signal: AbortSignal.timeout(5000),
    })
    // Must be 200 OK AND an image content-type
    if (res.ok && res.headers.get('Content-Type')?.startsWith('image')) {
      return res
    }
  } catch {
    // timeout or network error — fall through
  }
  return null
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ domain: string }> }
) {
  const { domain: domainParam } = await params
  const domain = domainParam.toLowerCase().replace(/[^a-z0-9.-]/g, '')

  if (!domain || domain.length < 4) {
    return new NextResponse(null, { status: 400 })
  }

  // ── 0. Local file — /public/logos/{domain}.{ext} (highest priority) ─────────
  for (const ext of ['png', 'svg', 'jpg', 'jpeg', 'webp'] as const) {
    const localPath = join(process.cwd(), 'public', 'logos', `${domain}.${ext}`)
    const buf = await readFile(localPath).catch(() => null)
    if (buf) {
      return new NextResponse(buf, {
        headers: {
          'Content-Type': EXT_MIME[ext],
          ...CACHE_HEADERS,
        },
      })
    }
  }

  // ── 1. Clearbit (best quality, international brands) ────────────────────────
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

  // ── 2. Google Favicon v2 — 200 OK only (skip 404 placeholders) ──────────────
  const googleFavicon = await tryFetch(
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`
  )
  if (googleFavicon) {
    const buf = await googleFavicon.arrayBuffer()
    return new NextResponse(buf, {
      headers: { 'Content-Type': 'image/png', ...CACHE_HEADERS },
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
