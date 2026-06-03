import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

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

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
