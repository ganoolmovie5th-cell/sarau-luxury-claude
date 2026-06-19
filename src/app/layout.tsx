import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CookieConsent from '@/components/ui/CookieConsent'
import PageTransition from '@/components/ui/PageTransition'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CONTACT, SOCIAL, STATS, SITE_URL, BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    default: 'Sarau Luxury – Event Organizer Outing & Outbound',
    template: '%s',
  },
  icons: {
    icon: [
      { url: '/sarau-luxury-logo.jpeg', type: 'image/jpeg' },
    ],
    apple: '/sarau-luxury-logo.jpeg',
    shortcut: '/sarau-luxury-logo.jpeg',
  },
  description:
    'Sarau Luxury – event organizer profesional untuk outing perusahaan, outbound training, company gathering, team building, dan family gathering di Bandung & seluruh Indonesia. Berpengalaman sejak 2018, dipercaya 53+ perusahaan terkemuka. Paket mulai Rp 525.000/pax.',
  keywords: [
    // Brand
    'sarau luxury', 'sarau luxury event organizer',
    // Core services
    'event organizer outing perusahaan', 'outbound training perusahaan',
    'company gathering bandung', 'team building bandung lembang',
    'family gathering bandung', 'outing corporate bandung',
    // Location-based
    'EO bandung profesional', 'EO lembang', 'EO banten', 'EO curug banten',
    'outbound lembang bandung', 'gathering bandung 2025',
    // Activity-based
    'rafting bandung perusahaan', 'paintball bandung corporate',
    'outbound training jakarta', 'team building jakarta bandung',
    // Intent-based
    'jasa event organizer perusahaan', 'paket gathering murah bandung',
    'harga outbound perusahaan', 'vendor gathering perusahaan indonesia',
  ],
  authors: [{ name: 'Sarau Luxury' }],
  creator: 'Sarau Luxury',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com',
    title: 'Sarau Luxury | Event Organizer Outing & Gathering Perusahaan',
    description: 'Event organizer profesional untuk outing perusahaan, outbound training, company gathering & team building. Dipercaya 53+ perusahaan sejak 2018. Paket mulai Rp 525.000/pax.',
    siteName: 'Sarau Luxury',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarau Luxury | Event Organizer Outing & Gathering Perusahaan',
    description: 'Event organizer profesional untuk outing perusahaan, outbound training & team building. Dipercaya 53+ perusahaan sejak 2018.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'VMSOHOX9iZWtBprGRYa23_33769yj-dxbBb5UOeKPWM',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: BRAND.name,
  description: 'Event organizer profesional untuk company gathering, outing perusahaan, outbound training, team building, dan family gathering di Indonesia.',
  url: SITE_URL,
  telephone: `+${CONTACT.phone1Wa}`,
  email: CONTACT.email,
  foundingDate: String(STATS.foundedYear),
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
    latitude: -6.2526389,
    longitude: 106.5864722,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  sameAs: [SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.facebook, SOCIAL.youtube, SOCIAL.threads],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(STATS.googleRating),
    bestRating: '5',
    worstRating: '1',
    ratingCount: String(STATS.totalClients),
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
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://sarau-luxury.com/" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
         * 1. Consent default — WAJIB sebelum GTM load agar Consent Mode v2 bekerja.
         *    analytics_storage default: 'denied' sampai user klik "Terima Semua".
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`,
          }}
        />
        {/* 2. Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5L5LR2KW');`,
          }}
        />
        {/* Load font non-blocking via JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Caveat:wght@600&display=swap';document.head.appendChild(l);})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* 3. Google Tag Manager (noscript) — tepat setelah <body> untuk browser tanpa JS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5L5LR2KW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ScrollProgressBar />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        {/*
         * GA4 direct — gtag.js tetap aktif.
         * PERINGATAN: jika GA4 tag juga dikonfigurasi di GTM (GTM-5L5LR2KW),
         * hapus dua Script di bawah ini untuk menghindari double-tracking.
         */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1SJ8G9TVER"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`gtag('js',new Date());gtag('config','G-1SJ8G9TVER');`}
        </Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
