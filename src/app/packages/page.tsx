import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import PackagesPreview from '@/components/sections/PackagesPreview'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Paket & Harga – Gathering Silver, Gold, Platinum',
  description: 'Paket Gathering Silver Rp 525rb/pax, Gold Rp 675rb/pax, Platinum Rp 925rb/pax. Termasuk penginapan 2D1N, makan, fun game, dan pilihan rafting/paintball. Minimal 20 pax.',
  keywords: ['paket gathering perusahaan', 'harga outbound perusahaan', 'paket outing murah', 'gathering silver gold platinum', 'harga team building', 'paket rafting bandung', 'paket paintball bandung'],
  alternates: { canonical: `${SITE_URL}/packages` },
  openGraph: {
    title: 'Paket & Harga Sarau Luxury – Mulai Rp 525rb/pax',
    description: 'Gathering Silver Rp 525rb, Gold Rp 675rb, Platinum Rp 925rb per pax. Sudah termasuk penginapan 2D1N, 3x makan, fun game & dokumentasi.',
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
