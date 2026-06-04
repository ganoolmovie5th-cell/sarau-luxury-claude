import type { Metadata } from 'next'
import AboutHero from '@/components/sections/AboutHero'
import MissionVision from '@/components/sections/MissionVision'
import TeamSection from '@/components/sections/TeamSection'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = 'https://sarau-luxury-claude.vercel.app'

export const metadata: Metadata = {
  title: 'Tentang Kami – Sarau Luxury Event Organizer',
  description: 'Sarau Luxury berdiri sejak 2018 sebagai event organizer profesional untuk outing, outbound, gathering & team building perusahaan. Kenali visi, misi, nilai, dan tim kami.',
  keywords: ['tentang sarau luxury', 'profil event organizer', 'EO profesional Banten', 'sejarah sarau luxury', 'tim sarau luxury'],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'Tentang Sarau Luxury – EO Profesional Sejak 2018',
    description: 'Berdiri sejak 2018, Sarau Luxury telah dipercaya 31+ perusahaan terkemuka untuk menggelar outing, outbound, gathering dan team building.',
    url: `${BASE_URL}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <CtaSection />
    </>
  )
}
