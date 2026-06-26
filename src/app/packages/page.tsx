import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import PackagesPreview from '@/components/sections/PackagesPreview'
import CtaSection from '@/components/sections/CtaSection'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Harga Paket Outing & Gathering Perusahaan – Sarau Luxury',
  description: 'Lihat daftar harga lengkap: Gathering Silver Rp 525K, Gold Rp 675K, Platinum Rp 925K/pax. Transparan, all-in, tanpa biaya tersembunyi.',
  keywords: ['paket gathering perusahaan', 'harga outbound perusahaan', 'paket outing murah', 'gathering silver gold platinum', 'harga team building', 'paket rafting bandung', 'paket paintball bandung'],
  alternates: { canonical: `${SITE_URL}/packages` },
  openGraph: {
    title: 'Harga Paket Outing & Gathering Perusahaan – Sarau Luxury',
    description: 'Lihat daftar harga lengkap: Gathering Silver Rp 525K, Gold Rp 675K, Platinum Rp 925K/pax. Transparan, all-in, tanpa biaya tersembunyi.',
    url: `${SITE_URL}/packages`,
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – Paket & Harga Event Perusahaan' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Paket & Harga', item: `${BASE_URL}/packages` },
  ],
}

export default function PackagesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Page hero header dengan H1 visible */}
      <div className="pt-36 pb-10 bg-cream text-center">
        <div className="container-tight">
          <span className="section-tag mb-4 inline-flex">💼 Price List</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Paket & Harga yang{' '}
            <span className="gradient-text">Transparan</span>
          </h1>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Semua harga sudah all-in tanpa biaya tersembunyi. Mulai dari Rp 125.000/pax untuk outbound hingga Rp 925.000/pax untuk gathering platinum.
          </p>
        </div>
      </div>
      <PackagesPreview hideHeader />

      {/* SEO content block — panduan & ketentuan paket (hierarki heading h2–h6) */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="font-display text-3xl font-bold text-bark mb-3">
            Panduan Memilih Paket Outing &amp; Gathering
          </h2>
          <p className="text-earth/70 leading-relaxed mb-8">
            Setiap paket Sarau Luxury fleksibel dan dapat disesuaikan dengan kebutuhan, jumlah peserta,
            serta anggaran perusahaan Anda. Berikut panduan singkat agar Anda mendapatkan paket yang paling tepat.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kolom kiri */}
            <div>
              <h3 className="font-display text-xl font-bold text-forest mb-3">
                Faktor yang Memengaruhi Harga
              </h3>
              <h4 className="font-semibold text-bark mb-1">Jumlah Peserta</h4>
              <p className="text-earth/70 text-sm leading-relaxed mb-4">
                Semakin banyak peserta, semakin efisien biaya per pax. Paket gathering berlaku untuk minimal 20 peserta,
                dan kami siap melayani grup hingga 1000+ peserta.
              </p>
              <h4 className="font-semibold text-bark mb-1">Destinasi &amp; Durasi</h4>
              <p className="text-earth/70 text-sm leading-relaxed">
                Lokasi seperti Bandung, Anyer, Bogor, hingga Bali memengaruhi biaya transportasi dan akomodasi 2D1N.
                Kami bantu memilih destinasi terbaik sesuai budget Anda.
              </p>
            </div>

            {/* Kolom kanan */}
            <div>
              <h3 className="font-display text-xl font-bold text-forest mb-3">
                Yang Sudah Termasuk
              </h3>
              <h4 className="font-semibold text-bark mb-1">Fasilitas Inti</h4>
              <p className="text-earth/70 text-sm leading-relaxed mb-4">
                Akomodasi, konsumsi (3x meal + coffee break), aktivitas, fasilitator bersertifikat, dan dokumentasi
                sudah termasuk di setiap paket gathering — transparan tanpa biaya tersembunyi.
              </p>
              <h5 className="font-semibold text-bark text-sm uppercase tracking-wide mb-1">Biaya Tambahan</h5>
              <p className="text-earth/70 text-sm leading-relaxed mb-3">
                Beberapa item di luar paket, seperti penyewaan bus, dikenakan biaya terpisah sesuai pemakaian.
              </p>
              <h6 className="font-semibold text-earth/80 text-xs uppercase tracking-widest mb-1">Catatan</h6>
              <p className="text-earth/60 text-xs leading-relaxed">
                Tol, parkir, dan tips driver belum termasuk dalam harga paket bus. Harga dapat berubah sesuai musim,
                ketersediaan, dan jumlah peserta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
