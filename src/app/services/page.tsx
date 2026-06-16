import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import ServicesPage from '@/components/sections/ServicesPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Layanan Outing & Outbound Perusahaan – Sarau Luxury',
  description: 'Company gathering, outbound training, team building, family gathering, hingga meeting package. Solusi lengkap event perusahaan dari Rp 125.000/pax.',
  keywords: ['layanan outing perusahaan', 'outbound training bandung', 'team building bandung', 'company gathering', 'family gathering bandung', 'meeting package', 'EO Curug Banten'],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Layanan Outing & Outbound Perusahaan – Sarau Luxury',
    description: 'Company gathering, outbound training, team building, family gathering, hingga meeting package. Solusi lengkap event perusahaan dari Rp 125.000/pax.',
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
