import type { Metadata } from 'next'
import AboutHero from '@/components/sections/AboutHero'
import MissionVision from '@/components/sections/MissionVision'
import TeamSection from '@/components/sections/TeamSection'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dalam tentang Sarau Luxury — visi, misi, dan tim profesional di balik ratusan event sukses perusahaan Indonesia.',
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
