import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import PackagesPreview from '@/components/sections/PackagesPreview'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Harga Paket Outing & Gathering Perusahaan – Sarau Luxury',
  description: 'Lihat daftar harga lengkap: Gathering Silver Rp 525K, Gold Rp 675K, Platinum Rp 925K/pax. Transparan, all-in, tanpa biaya tersembunyi.',
  keywords: ['paket gathering perusahaan', 'harga outbound perusahaan', 'paket outing murah', 'gathering silver gold platinum', 'harga team building', 'paket rafting bandung', 'paket paintball bandung'],
  alternates: { canonical: `${SITE_URL}/packages` },
  openGraph: {
    title: 'Harga Paket Outing & Gathering Perusahaan – Sarau Luxury',
    description: 'Lihat daftar harga lengkap: Gathering Silver Rp 525K, Gold Rp 675K, Platinum Rp 925K/pax. Transparan, all-in, tanpa biaya tersembunyi.',
    url: `${SITE_URL}/packages`,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Paket & Harga Event Perusahaan' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Paket & Harga', item: `${BASE_URL}/packages` },
  ],
}

export default function PackagesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Page hero header dengan H1 visible */}
      <div className="pt-36 pb-10 bg-cream text-center">
        <div className="container-tight">
          <span className="section-tag mb-4 inline-flex">💼 Price List</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Paket & Harga yang{' '}
            <span className="gradient-text">Transparan</span>
          </h1>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Semua harga sudah all-in tanpa biaya tersembunyi. Mulai dari Rp 125.000/pax untuk outbound hingga Rp 925.000/pax untuk gathering platinum.
          </p>
        </div>
      </div>
      <PackagesPreview hideHeader />
      <CtaSection />
    </div>
  )
}
