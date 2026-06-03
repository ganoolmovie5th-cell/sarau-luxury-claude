import type { Metadata } from 'next'
import ClientsPage from '@/components/sections/ClientsPage'

export const metadata: Metadata = {
  title: 'Klien',
  description: '200+ perusahaan terkemuka Indonesia telah mempercayakan event mereka kepada Sarau Luxury.',
}

export default function Clients() {
  return <ClientsPage />
}
