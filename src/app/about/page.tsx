import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import AboutHero from '@/components/sections/AboutHero'
import MissionVision from '@/components/sections/MissionVision'
import TeamSection from '@/components/sections/TeamSection'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Tentang Sarau Luxury – 8 Tahun Melayani Event Perusahaan',
  description: 'Berdiri sejak 2018, Sarau Luxury telah menggelar 100+ event sukses untuk 53+ perusahaan di Indonesia. Kenali tim dan filosofi kami di sini.',
  keywords: ['tentang sarau luxury', 'profil event organizer', 'EO profesional Banten', 'sejarah sarau luxury', 'tim sarau luxury'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'Tentang Sarau Luxury – 8 Tahun Melayani Event Perusahaan',
    description: 'Berdiri sejak 2018, Sarau Luxury telah menggelar 100+ event sukses untuk 53+ perusahaan di Indonesia. Kenali tim dan filosofi kami di sini.',
    url: `${SITE_URL}/about`,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Tentang Kami', item: `${BASE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <CtaSection />
    </>
  )
}
