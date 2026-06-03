import type { Metadata } from 'next'
import BookingForm from '@/components/sections/BookingForm'

export const metadata: Metadata = {
  title: 'Booking & Inquiry',
  description: 'Ajukan inquiry atau booking event outing & outbound perusahaan Anda bersama Sarau Luxury.',
}

export default function BookingPage() {
  return <BookingForm />
}
