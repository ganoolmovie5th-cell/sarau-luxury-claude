import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury-claude.vercel.app'

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
  { loc: `${BASE_URL}/blog/cara-mengatasi-konflik-tim-dengan-team-building`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/checklist-persiapan-outing-perusahaan`,          priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/perbedaan-family-gathering-company-gathering`,    priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/destinasi-wisata-outbound-sekitar-banten`,        priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/tips-agar-peserta-antusias-selama-outbound`,      priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/manfaat-paintball-untuk-teamwork`,                priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/cara-memilih-eo-yang-tepat`,                      priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/cara-membuat-konsep-gathering-unik`,          priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/tips-hemat-budget-outing-perusahaan`,         priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/aktivitas-outbound-terbaik-untuk-leadership`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/panduan-rafting-untuk-corporate`,             priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/10-ide-team-building-kreatif`,         priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/destinasi-outing-terbaik-jawa-bali`,   priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/perbedaan-outing-outbound`,            priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/venue-team-building-bandung`,          priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/tips-sukses-family-gathering`,         priority: '0.7', changefreq: 'monthly' },
  { loc: `${BASE_URL}/blog/manfaat-outbound-untuk-produktivitas`, priority: '0.7', changefreq: 'monthly' },
]

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority, changefreq }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
