import type { Metadata } from 'next'
import ClientsPage from '@/components/sections/ClientsPage'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

export const metadata: Metadata = {
  title: 'Klien – 41+ Perusahaan Terkemuka Indonesia',
  description: '41+ perusahaan terkemuka Indonesia telah mempercayakan event mereka kepada Sarau Luxury — dari Bank BCA, Bank Mandiri, PT Kalbe Farma, PT Epson, PT Hino Motors, RS Siloam, hingga PT Toyota Indonesia.',
  keywords: ['klien sarau luxury', 'perusahaan klien EO', 'referensi event organizer', 'portfolio outing perusahaan', 'testimoni sarau luxury'],
  alternates: { canonical: `${BASE_URL}/clients` },
  openGraph: {
    title: '31+ Perusahaan Terkemuka Percayakan Event ke Sarau Luxury',
    description: 'Bank BCA, PT Epson, PT Hino Motors, RS Siloam, PT Toyota, dan 26 perusahaan lainnya telah mempercayakan event mereka kepada Sarau Luxury.',
    url: `${BASE_URL}/clients`,
  },
}

export default function Clients() {
  return <ClientsPage />
}
