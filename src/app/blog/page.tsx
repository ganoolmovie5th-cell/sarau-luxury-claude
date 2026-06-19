import type { Metadata } from 'next'
import BlogListPage from '@/components/sections/BlogListPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog Tips Outing & Outbound Perusahaan – Sarau Luxury',
  description: 'Panduan lengkap merencanakan outing, gathering & outbound training perusahaan. Tips destinasi, anggaran, dan ide team building dari para ahlinya.',
  keywords: ['tips outing perusahaan', 'panduan team building', 'inspirasi company gathering', 'blog event organizer', 'cara outbound perusahaan'],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog Tips Outing & Outbound Perusahaan – Sarau Luxury',
    description: 'Panduan lengkap merencanakan outing, gathering & outbound training perusahaan. Tips destinasi, anggaran, dan ide team building dari para ahlinya.',
    url: `${BASE_URL}/blog`,
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Blog Tips Event Perusahaan' }],
  },
}

export default function Blog() {
  return <BlogListPage />
}
