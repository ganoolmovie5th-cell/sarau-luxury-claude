import { MetadataRoute } from 'next'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

const blogSlugs = [
  'cara-mengatasi-konflik-tim-dengan-team-building',
  'checklist-persiapan-outing-perusahaan',
  'perbedaan-family-gathering-company-gathering',
  'destinasi-wisata-outbound-sekitar-banten',
  'tips-agar-peserta-antusias-selama-outbound',
  'manfaat-paintball-untuk-teamwork',
  'cara-memilih-eo-yang-tepat',
  'cara-membuat-konsep-gathering-unik',
  'tips-hemat-budget-outing-perusahaan',
  'aktivitas-outbound-terbaik-untuk-leadership',
  'panduan-rafting-untuk-corporate',
  '10-ide-team-building-kreatif',
  'destinasi-outing-terbaik-jawa-bali',
  'perbedaan-outing-outbound',
  'venue-team-building-bandung',
  'tips-sukses-family-gathering',
  'manfaat-outbound-untuk-produktivitas',
]

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ──────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // ── Blog pages ────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
