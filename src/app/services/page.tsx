import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import ServicesPage from '@/components/sections/ServicesPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Layanan – Company Gathering, Outbound & Team Building',
  description: 'Sarau Luxury menyediakan layanan lengkap: Company Gathering 2D1N mulai Rp 525rb/pax, Outing Perusahaan, Outbound Training, Team Building, Family Gathering, Meeting Package & Dokumentasi.',
  keywords: ['layanan outing perusahaan', 'outbound training bandung', 'team building bandung', 'company gathering', 'family gathering bandung', 'meeting package', 'EO Curug Banten'],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Layanan Sarau Luxury – Company Gathering, Outbound & Team Building',
    description: 'Company Gathering mulai Rp 525rb/pax, Outbound Training, Team Building, Family Gathering dan Meeting Package. Hubungi kami untuk penawaran terbaik.',
    url: `${SITE_URL}/services`,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${BASE_URL}/services` },
  ],
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesPage />
    </>
  )
}
