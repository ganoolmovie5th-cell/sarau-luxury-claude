import type { Metadata } from 'next'
import ClientsPage from '@/components/sections/ClientsPage'
import { STATS, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Klien – ${STATS.totalClientsLabel} Perusahaan Terkemuka Indonesia`,
  description: `${STATS.totalClientsLabel} perusahaan terkemuka Indonesia telah mempercayakan event mereka kepada Sarau Luxury — dari Bank BCA, Bank Mandiri, PT Kalbe Farma, PT Epson, PT Hino Motors Indonesia, RS Siloam, hingga Park Hyatt Jakarta.`,
  keywords: ['klien sarau luxury', 'perusahaan klien EO', 'referensi event organizer', 'portfolio outing perusahaan', 'testimoni sarau luxury'],
  alternates: { canonical: `${SITE_URL}/clients` },
  openGraph: {
    title: `${STATS.totalClientsLabel} Perusahaan Terkemuka Percayakan Event ke Sarau Luxury`,
    description: `Bank BCA, Bank Mandiri, Park Hyatt Jakarta, PT Epson, PT Hino Motors Indonesia, RS Siloam, PT Toyota, dan ${STATS.totalClients - 7}+ perusahaan lainnya telah mempercayakan event mereka kepada Sarau Luxury.`,
    url: `${SITE_URL}/clients`,
  },
}

export default function Clients() {
  return <ClientsPage />
}
