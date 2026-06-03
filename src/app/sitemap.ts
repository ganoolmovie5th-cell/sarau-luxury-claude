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
  const routes = [
    { url: '/',          priority: 1.0,  changeFrequency: 'weekly'  },
    { url: '/about',     priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/services',  priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/packages',  priority: 0.9,  changeFrequency: 'weekly'  },
    { url: '/clients',   priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/gallery',   priority: 0.7,  changeFrequency: 'weekly'  },
    { url: '/blog',      priority: 0.8,  changeFrequency: 'daily'   },
    { url: '/faq',       priority: 0.6,  changeFrequency: 'monthly' },
    { url: '/contact',   priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/booking',   priority: 0.9,  changeFrequency: 'monthly' },
  ] as const

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...routes.map(({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...blogRoutes,
  ]
}
