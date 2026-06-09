import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import ServicesPage from '@/components/sections/ServicesPage'


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

export default function Services() {
  return <ServicesPage />
}
