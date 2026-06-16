import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PackagesPreview from '@/components/sections/PackagesPreview'
import WhyUsSection from '@/components/sections/WhyUsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ClientsMarquee from '@/components/sections/ClientsMarquee'
import GalleryPreview from '@/components/sections/GalleryPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Sarau Luxury – Event Organizer Outing & Outbound Perusahaan',
  description: 'Jasa outing, outbound training & company gathering terpercaya sejak 2018. 53+ klien korporat: BCA, Toyota, Kalbe Farma. Paket mulai Rp 525.000/pax. Konsultasi gratis!',
  keywords: [
    'event organizer outing perusahaan terpercaya',
    'company gathering bandung 2025',
    'outbound training bandung lembang',
    'team building perusahaan indonesia',
    'jasa outing corporate bandung',
    'paket gathering murah bandung',
    'EO profesional bandung banten',
    'sarau luxury',
  ],
  alternates: { canonical: SITE_URL },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyUsSection />
      <PackagesPreview />
      <ClientsMarquee />
      <TestimonialsSection />
      <GalleryPreview />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
