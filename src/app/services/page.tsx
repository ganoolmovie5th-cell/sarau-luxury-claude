import type { Metadata } from 'next'
import ServicesPage from '@/components/sections/ServicesPage'

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Layanan lengkap Sarau Luxury: outing perusahaan, outbound training, team building, family gathering, dan MICE event.',
}

export default function Services() {
  return <ServicesPage />
}
