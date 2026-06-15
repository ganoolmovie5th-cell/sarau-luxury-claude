import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import AboutHero from '@/components/sections/AboutHero'
import MissionVision from '@/components/sections/MissionVision'
import TeamSection from '@/components/sections/TeamSection'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const metadata: Metadata = {
  title: 'Tentang Kami – Sarau Luxury Event Organizer',
  description: 'Sarau Luxury berdiri sejak 2018 sebagai event organizer profesional untuk outing, outbound, gathering & team building perusahaan. Kenali visi, misi, nilai, dan tim kami.',
  keywords: ['tentang sarau luxury', 'profil event organizer', 'EO profesional Banten', 'sejarah sarau luxury', 'tim sarau luxury'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'Tentang Sarau Luxury – EO Profesional Sejak 2018',
    description: 'Berdiri sejak 2018, Sarau Luxury telah dipercaya 53+ perusahaan terkemuka untuk menggelar outing, outbound, gathering dan team building.',
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
