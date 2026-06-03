import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi Sarau Luxury untuk konsultasi event outing dan outbound perusahaan Anda.',
}

export default function ContactPage() {
  return <ContactForm />
}
