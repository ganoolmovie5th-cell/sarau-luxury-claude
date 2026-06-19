import type { Metadata } from 'next'
import GalleryPage from '@/components/sections/GalleryPage'
import { SITE_URL } from '@/lib/constants'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Galeri Event Outing & Outbound Perusahaan – Sarau Luxury',
  description: 'Lihat dokumentasi nyata event outing, outbound training & company gathering yang telah kami gelar. 100+ event sukses dari berbagai industri.',
  keywords: ['galeri event outing', 'foto outbound perusahaan', 'dokumentasi gathering', 'foto team building', 'event organizer dokumentasi'],
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Galeri Event Outing & Outbound Perusahaan – Sarau Luxury',
    description: 'Lihat dokumentasi nyata event outing, outbound training & company gathering yang telah kami gelar. 100+ event sukses dari berbagai industri.',
    url: `${SITE_URL}/gallery`,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Galeri Dokumentasi Event' }],
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
