import type { Metadata } from 'next'
import PackagesPreview from '@/components/sections/PackagesPreview'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Paket',
  description: 'Pilih paket outing dan outbound yang sesuai dengan kebutuhan dan budget perusahaan Anda.',
}

export default function PackagesPage() {
  return (
    <div className="pt-24">
      <PackagesPreview />
      <CtaSection />
    </div>
  )
}
