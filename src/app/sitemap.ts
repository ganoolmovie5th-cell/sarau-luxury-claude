import { MetadataRoute } from 'next'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

const blogSlugs = [
  '10-ide-team-building-kreatif',
  'destinasi-outing-terbaik-jawa-bali',
  'perbedaan-outing-outbound',
  'venue-team-building-jakarta',
  'tips-sukses-family-gathering',
  'manfaat-outbound-untuk-produktivitas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/packages`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/booking`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,     lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE_URL}/clients`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gallery`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/faq`,      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
