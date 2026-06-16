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
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PackagesPreview />
      <CtaSection />
    </div>
  )
}
