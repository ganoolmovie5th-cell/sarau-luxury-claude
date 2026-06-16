import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import BookingForm from '@/components/sections/BookingForm'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Booking Event Perusahaan – Sarau Luxury',
  description: 'Pesan event outing, outbound, atau gathering perusahaan Anda sekarang. Isi form booking & tim kami hubungi dalam 15 menit untuk penawaran terbaik.',
  keywords: ['booking outing perusahaan', 'inquiry outbound', 'pesan paket gathering', 'form booking EO', 'ajukan event sarau luxury'],
  alternates: { canonical: `${SITE_URL}/booking` },
  openGraph: {
    title: 'Booking Event Perusahaan – Sarau Luxury',
    description: 'Pesan event outing, outbound, atau gathering perusahaan Anda sekarang. Isi form booking & tim kami hubungi dalam 15 menit untuk penawaran terbaik.',
    url: `${SITE_URL}/booking`,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Booking', item: `${BASE_URL}/booking` },
  ],
}

export default function BookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BookingForm />
    </>
  )
}
