import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import GoogleAnalytics from '@/components/ui/GoogleAnalytics'

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
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarau Luxury | Where Teams Grow Together',
    description: 'Event organizer profesional untuk outing dan outbound perusahaan.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'pEw-CXIVMv8NSSGvdlOtNwSWWdIWmsANEaYXG9lN-8o',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sarau-luxury-claude.vercel.app',
  name: 'Sarau Luxury',
  description: 'Event organizer profesional untuk company gathering, outing perusahaan, outbound training, team building, dan family gathering di Indonesia.',
  url: 'https://sarau-luxury-claude.vercel.app',
  telephone: '+6285711786561',
  email: 'bandungindonesiasinergi@gmail.com',
  foundingDate: '2018',
  priceRange: 'Rp 125.000 – Rp 925.000/pax',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Binong Permai Blok R-10/14',
    addressLocality: 'Curug',
    addressRegion: 'Banten',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2297,
    longitude: 106.6432,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://instagram.com/sarauluxury',
    'https://www.tiktok.com/@sarauluxury',
    'https://www.facebook.com/share/1H86Hap6Y7/',
    'https://www.youtube.com/@Sarauluxury',
    'https://www.threads.com/@sarauluxury',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '31',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Paket Event Sarau Luxury',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Gathering Silver',
        description: 'Penginapan 2D1N, 3x Meal, 2x Coffee Break, Fun Game, Dokumentasi',
        price: '525000',
        priceCurrency: 'IDR',
        priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'pax' } },
      },
      {
        '@type': 'Offer',
        name: 'Gathering Gold',
        description: 'Penginapan 2D1N, 3x Meal, Rafting 11km / Paintball, Fun Game, Dokumentasi',
        price: '675000',
        priceCurrency: 'IDR',
        priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'pax' } },
      },
      {
        '@type': 'Offer',
        name: 'Gathering Platinum',
        description: 'Penginapan 2D1N, 3x Meal, Rafting/Paintball, Team Building, Bus PP, Dokumentasi',
        price: '925000',
        priceCurrency: 'IDR',
        priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'pax' } },
      },
    ],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <ScrollProgressBar />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
