import type { Metadata } from 'next'
import BookingForm from '@/components/sections/BookingForm'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

export const metadata: Metadata = {
  title: 'Booking & Inquiry – Ajukan Event Perusahaan',
  description: 'Ajukan inquiry outing, outbound, gathering atau team building perusahaan Anda sekarang. Isi form 4 langkah mudah dan tim Sarau Luxury akan menghubungi Anda dalam 1x24 jam.',
  keywords: ['booking outing perusahaan', 'inquiry outbound', 'pesan paket gathering', 'form booking EO', 'ajukan event sarau luxury'],
  alternates: { canonical: `${BASE_URL}/booking` },
  openGraph: {
    title: 'Booking & Inquiry – Sarau Luxury',
    description: 'Ajukan inquiry event perusahaan Anda sekarang. Tim kami siap merespons dalam 1x24 jam kerja.',
    url: `${BASE_URL}/booking`,
  },
}

export default function BookingPage() {
  return <BookingForm />
}
