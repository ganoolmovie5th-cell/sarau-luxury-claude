import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sarau-luxury.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',             // API routes tidak perlu diindex
          '/opengraph-image',  // OG image route, bukan halaman - jangan diindex
          '/*/opengraph-image', // OG image per-halaman (mis. /blog/[slug]/opengraph-image)
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
