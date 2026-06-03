import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: 'Sarau Luxury | Where Teams Grow Together',
    template: '%s | Sarau Luxury',
  },
  description:
    'Sarau Luxury adalah event organizer profesional untuk outing dan outbound perusahaan. Kami menciptakan pengalaman team building yang tak terlupakan di lokasi-lokasi terbaik Indonesia.',
  keywords: [
    'event organizer', 'outing perusahaan', 'outbound company',
    'team building', 'gathering perusahaan', 'company gathering',
    'family gathering', 'EO Bandung', 'EO Jakarta',
    'sarau luxury', 'outing corporate', 'outbound bandung',
    'outbound lembang', 'gathering bandung', 'rafting bandung',
    'paintball bandung', 'team building bandung',
  ],
  authors: [{ name: 'Sarau Luxury' }],
  creator: 'Sarau Luxury',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury-claude.vercel.app',
    title: 'Sarau Luxury | Where Teams Grow Together',
    description: 'Event organizer profesional untuk outing dan outbound perusahaan.',
    siteName: 'Sarau Luxury',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarau Luxury | Where Teams Grow Together',
    description: 'Event organizer profesional untuk outing dan outbound perusahaan.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgressBar />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
