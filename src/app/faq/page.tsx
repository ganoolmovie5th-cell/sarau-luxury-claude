import type { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ – Pertanyaan Umum | Sarau Luxury Event',
  description:
    'Temukan jawaban atas pertanyaan yang sering ditanyakan seputar layanan event, booking, dan paket Sarau Luxury.',
}

export default function FAQPage() {
  return <FAQClient />
}
