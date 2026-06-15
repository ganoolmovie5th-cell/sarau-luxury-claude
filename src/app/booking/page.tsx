import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import BookingForm from '@/components/sections/BookingForm'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Booking & Inquiry – Ajukan Event Perusahaan',
  description: 'Ajukan inquiry outing, outbound, gathering atau team building perusahaan Anda sekarang. Isi form 4 langkah mudah dan tim Sarau Luxury akan menghubungi Anda dalam 1x24 jam.',
  keywords: ['booking outing perusahaan', 'inquiry outbound', 'pesan paket gathering', 'form booking EO', 'ajukan event sarau luxury'],
  alternates: { canonical: `${SITE_URL}/booking` },
  openGraph: {
    title: 'Booking & Inquiry – Sarau Luxury',
    description: 'Ajukan inquiry event perusahaan Anda sekarang. Tim kami siap merespons dalam 1x24 jam kerja.',
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
