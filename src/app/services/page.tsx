import type { Metadata } from 'next'
import ServicesPage from '@/components/sections/ServicesPage'

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Layanan lengkap Sarau Luxury: company gathering, outing perusahaan, outbound training, team building, family gathering, meeting package, dan dokumentasi event.',
}

export default function Services() {
  return <ServicesPage />
}
