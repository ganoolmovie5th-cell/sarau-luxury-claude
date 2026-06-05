import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury-claude.vercel.app'

export const metadata: Metadata = {
  title: 'Kontak – Konsultasi Gratis Event Perusahaan',
  description: 'Hubungi Sarau Luxury untuk konsultasi GRATIS event outing, outbound, gathering & team building perusahaan Anda. WhatsApp: +62 857-1178-6561. Senin–Sabtu 08.00–20.00 WIB.',
  keywords: ['kontak sarau luxury', 'konsultasi outing perusahaan', 'hubungi EO bandung', 'booking outbound', 'tanya harga gathering'],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Kontak Sarau Luxury – Konsultasi Gratis',
    description: 'Konsultasi gratis untuk event outing, outbound & gathering perusahaan Anda. Hubungi kami sekarang di +62 857-1178-6561.',
    url: `${BASE_URL}/contact`,
  },
}

export default function ContactPage() {
  return <ContactForm />
}
