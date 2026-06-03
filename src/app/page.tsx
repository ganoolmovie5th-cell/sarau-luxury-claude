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

export default function HomePage() {
  return (
    <>
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
