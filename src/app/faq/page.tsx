import type { Metadata } from 'next'
import FAQClient from './FAQClient'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'FAQ – Pertanyaan Umum | Sarau Luxury Event',
  description: 'Temukan jawaban atas pertanyaan yang sering ditanyakan seputar layanan event, booking, dan paket Sarau Luxury.',
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    title: 'FAQ – Pertanyaan Umum Sarau Luxury',
    description: 'Temukan jawaban atas pertanyaan yang sering ditanyakan seputar layanan event, booking, dan paket Sarau Luxury.',
    url: `${BASE_URL}/faq`,
  },
}

export default function FAQPage() {
  return <FAQClient />
}
