import type { Metadata } from 'next'
import GalleryPage from '@/components/sections/GalleryPage'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

export const metadata: Metadata = {
  title: 'Galeri – Dokumentasi Event Outing & Outbound',
  description: 'Lihat 23+ foto dokumentasi event outing, outbound training, gathering dan team building perusahaan bersama Sarau Luxury. Bukti nyata keseruan dan profesionalisme kami.',
  keywords: ['galeri event outing', 'foto outbound perusahaan', 'dokumentasi gathering', 'foto team building', 'event organizer dokumentasi'],
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Galeri Sarau Luxury – Dokumentasi Event',
    description: '23+ foto dari berbagai event outing, outbound, gathering dan team building perusahaan bersama Sarau Luxury.',
    url: `${BASE_URL}/gallery`,
  },
}

export default function Gallery() {
  return <GalleryPage />
}
