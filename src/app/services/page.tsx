import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import ServicesPage from '@/components/sections/ServicesPage'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Layanan Outing & Outbound Perusahaan – Sarau Luxury',
  description: 'Company gathering, outbound training, team building, family gathering, hingga meeting package. Solusi lengkap event perusahaan dari Rp 125.000/pax.',
  keywords: ['layanan outing perusahaan', 'outbound training bandung', 'team building bandung', 'company gathering', 'family gathering bandung', 'meeting package', 'EO Curug Banten'],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Layanan Outing & Outbound Perusahaan – Sarau Luxury',
    description: 'Company gathering, outbound training, team building, family gathering, hingga meeting package. Solusi lengkap event perusahaan dari Rp 125.000/pax.',
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Layanan Event Perusahaan' }],
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

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Layanan Event Sarau Luxury',
  url: `${BASE_URL}/services`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Company Gathering',
        url: `${BASE_URL}/services#gathering`,
        description: 'Paket gathering perusahaan 2D1N lengkap: penginapan, makan, kolam renang, fun game & dokumentasi. Tersedia paket Silver, Gold, dan Platinum mulai Rp 525.000/pax.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
        offers: {
          '@type': 'Offer',
          price: '525000',
          priceCurrency: 'IDR',
          description: 'Mulai dari Rp 525.000/pax (Paket Silver)',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Outing Perusahaan',
        url: `${BASE_URL}/services#outing`,
        description: 'Wisata outing perusahaan ke 20+ destinasi pilihan: Lembang, Bali, Bromo & sekitarnya. Konsep custom, tepat waktu, on-budget.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Outbound Training',
        url: `${BASE_URL}/services#outbound`,
        description: 'Program outbound training profesional: rafting, paintball, ATV, trekking & fun game. Mulai Rp 125.000/pax. Cocok untuk 20–500 peserta.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
        offers: {
          '@type': 'Offer',
          price: '125000',
          priceCurrency: 'IDR',
          description: 'Mulai dari Rp 125.000/pax',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Team Building',
        url: `${BASE_URL}/services#teambuilding`,
        description: 'Aktivitas team building kreatif indoor & outdoor yang memperkuat sinergi tim. Program fleksibel 3 jam hingga full day, desain custom sesuai kebutuhan.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
        offers: {
          '@type': 'Offer',
          price: '125000',
          priceCurrency: 'IDR',
          description: 'Mulai dari Rp 125.000/pax',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Family Gathering',
        url: `${BASE_URL}/services#family`,
        description: 'Paket family gathering perusahaan dengan BBQ, live entertainment, games & doorprize. Spesialis family gathering korporat untuk semua usia.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Meeting Package',
        url: `${BASE_URL}/services#meeting`,
        description: 'Paket meeting perusahaan lengkap: ruangan, konsumsi & dokumentasi. Halfday Rp 225.000/pax, Fullday Rp 300.000/pax.',
        provider: { '@type': 'LocalBusiness', name: 'Sarau Luxury' },
        areaServed: 'Indonesia',
        offers: {
          '@type': 'Offer',
          price: '225000',
          priceCurrency: 'IDR',
          description: 'Mulai dari Rp 225.000/pax (Halfday)',
        },
      },
    },
  ],
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPage />
    </>
  )
}
