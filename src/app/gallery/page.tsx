import type { Metadata } from 'next'
import GalleryPage from '@/components/sections/GalleryPage'


export const metadata: Metadata = {
  title: 'Galeri – Dokumentasi Event Outing & Outbound',
  description: 'Lihat 20+ foto dokumentasi event outing, outbound training, gathering dan team building perusahaan bersama Sarau Luxury. Bukti nyata keseruan dan profesionalisme kami.',
  keywords: ['galeri event outing', 'foto outbound perusahaan', 'dokumentasi gathering', 'foto team building', 'event organizer dokumentasi'],
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Galeri Sarau Luxury – Dokumentasi Event',
    description: '20+ foto dari berbagai event outing, outbound, gathering dan team building perusahaan bersama Sarau Luxury.',
    url: `${BASE_URL}/gallery`,
  },
}

export default function Gallery() {
  return <GalleryPage />
}
