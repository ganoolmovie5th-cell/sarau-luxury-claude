import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: '7 Destinasi Outing Perusahaan Terbaik di Bandung 2026 — Sarau Luxury Blog',
  description: 'Rekomendasi lokasi outing perusahaan di Bandung dan sekitarnya yang cocok untuk semua ukuran tim.',
}

export default function BlogPost() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-forest hover:text-forest-dark mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> Kembali ke Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-forest/10 text-forest text-xs font-semibold rounded-full">
            <Tag size={12} /> Destinasi
          </span>
          <span className="flex items-center gap-1 text-earth/60 text-xs">
            <Calendar size={12} /> 2026-08-17
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          7 Destinasi Outing Perusahaan Terbaik di Bandung 2026
        </h1>
        <p className="text-earth/70 text-lg mb-10">Rekomendasi lokasi outing perusahaan di Bandung dan sekitarnya yang cocok untuk semua ukuran tim.</p>

        <article className="prose prose-lg prose-bark max-w-none">
          {`## 1. Lembang — The Classic Choice

Udara sejuk, pemandangan indah, dan banyak venue tersedia. Cocok untuk gathering 50-500 orang. Aktivitas: outbound, ATV, horse riding, strawberry picking.

## 2. Ciwidey — Adventure Paradise

Kawah Putih, Situ Patenggang, dan kebun teh menjadi backdrop sempurna. Cocok untuk outing yang lebih adventurous.

## 3. Pangalengan — Hidden Gem

Perkebunan teh luas dengan suasana tenang. Ideal untuk retreat dan gathering intimate (20-100 orang).

## 4. Cikole — Pine Forest Experience

Hutan pinus yang instagrammable. Tersedia camping ground, outbound area, dan cottage. Cocok untuk overnight event.

## 5. Dago Pakar — City Escape

Masih di area Bandung utara tapi sudah terasa sejuk. Venue modern dengan fasilitas lengkap. Akses mudah.

## 6. Subang — Offroad Territory

Untuk perusahaan yang mau sesuatu berbeda: offroad, river tubing, dan flying fox di kawasan Subang.

## 7. Garut — Hot Spring & Nature

Kombinasi outbound dengan relaksasi di hot spring alami. Jarak tempuh 2-3 jam dari Jakarta.

---

**Sarau Luxury** memiliki partner venue di semua destinasi di atas. Konsultasi gratis untuk rekomendasi lokasi sesuai budget dan jumlah peserta!`}
        </article>
      </div>
    </div>
  )
}
