import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: '8 Manfaat Outbound Training untuk Produktivitas Karyawan — Sarau Luxury Blog',
  description: 'Mengapa perusahaan besar rutin mengadakan outbound training dan bagaimana dampaknya terhadap performa tim.',
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
            <Tag size={12} /> Knowledge
          </span>
          <span className="flex items-center gap-1 text-earth/60 text-xs">
            <Calendar size={12} /> 2026-08-24
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          8 Manfaat Outbound Training untuk Produktivitas Karyawan
        </h1>
        <p className="text-earth/70 text-lg mb-10">Mengapa perusahaan besar rutin mengadakan outbound training dan bagaimana dampaknya terhadap performa tim.</p>

        <article className="prose prose-lg prose-bark max-w-none">
          {`## 1. Meningkatkan Komunikasi Tim

Outbound training memaksa peserta berkomunikasi untuk menyelesaikan tantangan. Pola komunikasi yang terbentuk akan terbawa ke lingkungan kerja.

## 2. Membangun Kepercayaan

Aktivitas seperti trust fall dan high rope membangun rasa percaya antar anggota tim yang sulit didapat di ruang kantor.

## 3. Mengidentifikasi Natural Leader

Di luar hierarki kantor, outbound memunculkan leadership alami. Ini insight berharga untuk manajemen.

## 4. Mengurangi Stress dan Burnout

Keluar dari rutinitas kantor dan beraktivitas di alam terbukti menurunkan cortisol dan meningkatkan mood.

## 5. Problem-Solving Lebih Baik

Tantangan outbound melatih berpikir kreatif dan cepat. Skill ini langsung applicable di pekerjaan sehari-hari.

## 6. Meningkatkan Engagement

Karyawan yang merasa dihargai (lewat event perusahaan) memiliki engagement 3x lebih tinggi.

## 7. Mempererat Hubungan Lintas Divisi

Outbound mempertemukan karyawan dari divisi berbeda yang jarang berinteraksi. Ini mengurangi silo.

## 8. ROI yang Terukur

Perusahaan yang rutin mengadakan outbound melaporkan penurunan turnover rate hingga 25%.

---

**Sarau Luxury** merancang outbound training dengan metode experiential learning yang terstruktur. Hubungi kami untuk program custom!`}
        </article>
      </div>
    </div>
  )
}
