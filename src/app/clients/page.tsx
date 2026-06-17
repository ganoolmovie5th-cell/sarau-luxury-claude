import type { Metadata } from 'next'
import ClientsPage from '@/components/sections/ClientsPage'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Klien Korporat – BCA, Toyota, Kalbe & 50+ Perusahaan',
  description: 'Dipercaya 53+ perusahaan terkemuka Indonesia: BCA, Toyota, Kalbe Farma, Park Hyatt, Pegadaian, Bank Mandiri & banyak lagi. Lihat portofolio lengkap kami.',
  keywords: ['klien sarau luxury', 'perusahaan klien EO', 'referensi event organizer', 'portfolio outing perusahaan', 'testimoni sarau luxury'],
  alternates: { canonical: `${SITE_URL}/clients` },
  openGraph: {
    title: 'Klien Korporat – BCA, Toyota, Kalbe & 50+ Perusahaan',
    description: 'Dipercaya 53+ perusahaan terkemuka Indonesia: BCA, Toyota, Kalbe Farma, Park Hyatt, Pegadaian, Bank Mandiri & banyak lagi. Lihat portofolio lengkap kami.',
    url: `${SITE_URL}/clients`,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Klien Korporat' }],
  },
}

export default function Clients() {
  return <ClientsPage />
}
