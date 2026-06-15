import type { Metadata } from 'next'
import GalleryPage from '@/components/sections/GalleryPage'
import { SITE_URL } from '@/lib/constants'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Galeri – Dokumentasi Event Outing & Outbound',
  description: 'Lihat 20+ foto dokumentasi event outing, outbound training, gathering dan team building perusahaan bersama Sarau Luxury. Bukti nyata keseruan dan profesionalisme kami.',
  keywords: ['galeri event outing', 'foto outbound perusahaan', 'dokumentasi gathering', 'foto team building', 'event organizer dokumentasi'],
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Galeri Sarau Luxury – Dokumentasi Event',
    description: '20+ foto dari berbagai event outing, outbound, gathering dan team building perusahaan bersama Sarau Luxury.',
    url: `${SITE_URL}/gallery`,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Galeri', item: `${BASE_URL}/gallery` },
  ],
}

export default function Gallery() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GalleryPage />
    </>
  )
}
