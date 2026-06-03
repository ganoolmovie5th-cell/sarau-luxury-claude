import type { Metadata } from 'next'
import GalleryPage from '@/components/sections/GalleryPage'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Lihat dokumentasi event outing dan outbound perusahaan yang telah kami selenggarakan bersama Sarau Luxury.',
}

export default function Gallery() {
  return <GalleryPage />
}
