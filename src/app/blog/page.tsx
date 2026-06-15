import type { Metadata } from 'next'
import BlogListPage from '@/components/sections/BlogListPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Blog & Tips – Panduan Outing, Outbound & Team Building Perusahaan',
  description: 'Artikel tips & inspirasi seputar outing perusahaan, outbound training, company gathering, dan team building dari praktisi event organizer profesional Sarau Luxury.',
  keywords: ['tips outing perusahaan', 'panduan team building', 'inspirasi company gathering', 'blog event organizer', 'cara outbound perusahaan'],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog Sarau Luxury – Tips Outing, Outbound & Team Building',
    description: 'Tips & inspirasi seputar outing perusahaan, outbound training, dan company gathering dari event organizer profesional.',
    url: `${BASE_URL}/blog`,
  },
}

export default function Blog() {
  return <BlogListPage />
}
