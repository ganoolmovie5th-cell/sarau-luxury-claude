import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: '10 Tips Memilih Event Organizer Terpercaya untuk Perusahaan — Sarau Luxury Blog',
  description: 'Panduan lengkap memilih EO yang tepat agar event perusahaan Anda sukses dan berkesan.',
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
            <Tag size={12} /> Tips & Guide
          </span>
          <span className="flex items-center gap-1 text-earth/60 text-xs">
            <Calendar size={12} /> 2026-08-05
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          10 Tips Memilih Event Organizer Terpercaya untuk Perusahaan
        </h1>
        <p className="text-earth/70 text-lg mb-10">Panduan lengkap memilih EO yang tepat agar event perusahaan Anda sukses dan berkesan.</p>

        <article className="prose prose-lg prose-bark max-w-none">
          {`## 1. Cek Pengalaman dan Portofolio

Event organizer berpengalaman biasanya memiliki portofolio yang bisa ditunjukkan. Lihat dokumentasi event sebelumnya dan pastikan mereka pernah menangani event dengan skala serupa.

## 2. Baca Review dan Testimoni

Cari ulasan dari klien sebelumnya. Rating Google, testimoni di website, atau rekomendasi dari rekan bisnis bisa jadi indikator kredibilitas.

## 3. Pastikan Legalitas Usaha

EO profesional memiliki badan usaha resmi, NPWP, dan rekening atas nama perusahaan — bukan pribadi.

## 4. Transparansi Harga

EO yang baik memberikan rincian harga lengkap — akomodasi, transportasi, konsumsi, aktivitas, dan dokumentasi. Tidak ada biaya tersembunyi.

## 5. Fleksibilitas Program

Setiap perusahaan punya kebutuhan berbeda. Pilih EO yang bisa menyesuaikan program sesuai budget, jumlah peserta, dan tujuan event.

## 6. Fasilitator Bersertifikat

Untuk outbound dan team building, pastikan EO memiliki fasilitator bersertifikat dengan pengalaman experiential learning.

## 7. Pilihan Destinasi Lengkap

EO terpercaya memiliki jaringan venue dan destinasi yang luas — dari Lembang, Anyer, Bali, hingga Bromo.

## 8. Layanan All-in-One

Pilih EO yang menangani semua aspek: akomodasi, transportasi, aktivitas, konsumsi, hingga dokumentasi foto/video.

## 9. Respon Cepat dan Komunikatif

Perhatikan kecepatan respon saat konsultasi awal. EO yang lambat merespon inquiry kemungkinan juga lambat saat koordinasi event.

## 10. Garansi dan After-Service

EO profesional memberikan jaminan kualitas dan tetap komunikatif bahkan setelah event selesai.

---

**Sarau Luxury** memenuhi semua kriteria di atas dengan pengalaman 8+ tahun dan 100+ event sukses. Konsultasi gratis sekarang!`}
        </article>
      </div>
    </div>
  )
}
