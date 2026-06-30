import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PackagesPreview from '@/components/sections/PackagesPreview'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ClientsMarquee from '@/components/sections/ClientsMarquee'
import GalleryPreview from '@/components/sections/GalleryPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import PromotionsSection from '@/components/sections/PromotionsSection'
import CompanyProfileDownload from '@/components/sections/CompanyProfileDownload'
import HomeSeoContent from '@/components/sections/HomeSeoContent'
import CtaSection from '@/components/sections/CtaSection'

export const revalidate = 3600 // ISR: cache 1 jam di Vercel edge → TTFB < 50ms setelah request pertama

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
      <ProcessTimeline />
      <PackagesPreview />
      <PromotionsSection />
      <ClientsMarquee />
      <TestimonialsSection />
      <GalleryPreview />
      <BlogPreview />
      <CompanyProfileDownload />
      <HomeSeoContent />
      <CtaSection />
    </>
  )
}
