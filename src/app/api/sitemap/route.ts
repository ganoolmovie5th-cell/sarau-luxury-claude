import { NextResponse } from 'next/server'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

const urls = [
  { loc: `${BASE_URL}/`,         priority: '1.0', changefreq: 'weekly'  },
  { loc: `${BASE_URL}/services`, priority: '0.9', changefreq: 'monthly' },
  { loc: `${BASE_URL}/packages`, priority: '0.9', changefreq: 'weekly'  },
  { loc: `${BASE_URL}/booking`,  priority: '0.9', changefreq: 'monthly' },
  { loc: `${BASE_URL}/contact`,  priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/about`,    priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog`,     priority: '0.8', changefreq: 'daily'   },
  { loc: `${BASE_URL}/clients`,  priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/gallery`,  priority: '0.7', changefreq: 'weekly'  },
  { loc: `${BASE_URL}/faq`,      priority: '0.6', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/10-ide-team-building-kreatif`,         priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/destinasi-outing-terbaik-jawa-bali`,   priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/perbedaan-outing-outbound`,            priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/venue-team-building-jakarta`,          priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/tips-sukses-family-gathering`,         priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/manfaat-outbound-untuk-produktivitas`, priority: '0.7', changefreq: 'monthly' },
]

const lastmod = '2026-06-04'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
