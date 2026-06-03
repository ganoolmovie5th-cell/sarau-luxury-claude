import type { Metadata } from 'next'
import BlogListPage from '@/components/sections/BlogListPage'

export const metadata: Metadata = {
  title: 'Blog & Tips',
  description: 'Tips, inspirasi, dan panduan seputar team building, outing, dan outbound perusahaan dari Sarau Luxury.',
}

export default function Blog() {
  return <BlogListPage />
}
