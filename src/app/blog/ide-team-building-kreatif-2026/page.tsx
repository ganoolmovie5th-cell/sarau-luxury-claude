import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: '15 Ide Team Building Kreatif untuk Perusahaan di 2026 — Sarau Luxury Blog',
  description: 'Inspirasi aktivitas team building seru yang bisa memperkuat kekompakan tim Anda.',
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
            <Tag size={12} /> Inspirasi
          </span>
          <span className="flex items-center gap-1 text-earth/60 text-xs">
            <Calendar size={12} /> 2026-08-10
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          15 Ide Team Building Kreatif untuk Perusahaan di 2026
        </h1>
        <p className="text-earth/70 text-lg mb-10">Inspirasi aktivitas team building seru yang bisa memperkuat kekompakan tim Anda.</p>

        <article className="prose prose-lg prose-bark max-w-none">
          {`## Outdoor Activities

### 1. Amazing Race Kota
Tim berlomba menyelesaikan tantangan di berbagai lokasi kota. Melatih navigasi, komunikasi, dan problem-solving.

### 2. Rafting Challenge
Arung jeram bersama membangun kepercayaan dan kerjasama tim. Cocok untuk tim yang butuh adrenalin.

### 3. Survival Cooking
Tim berkompetisi memasak dengan bahan terbatas di alam terbuka. Fun dan membangun kreativitas.

### 4. Treasure Hunt
Perburuan harta karun dengan clue yang harus dipecahkan bersama. Classic tapi selalu seru.

### 5. Paintball Strategy
Permainan strategi yang melatih kepemimpinan dan pengambilan keputusan cepat.

## Indoor Activities

### 6. Escape Room Corporate
Versi custom escape room dengan tema perusahaan. Melatih critical thinking dalam tekanan waktu.

### 7. Masterclass Barista
Tim belajar membuat kopi bersama. Relaxing tapi tetap kompetitif.

### 8. Drum Circle
Bermain drum bersama tanpa pengalaman musik. Mengajarkan listening dan sinkronisasi.

### 9. Build-a-Bridge Challenge
Tim membangun jembatan dari bahan sederhana yang harus menahan beban. Engineering meets teamwork.

### 10. Improv Workshop
Workshop improvisasi komedi yang melatih spontanitas dan kepercayaan diri.

## Hybrid Activities

### 11. CSR Project
Aktivitas sosial bersama (tanam pohon, bersih pantai) yang memberi makna lebih.

### 12. Cultural Immersion
Kunjungi desa wisata dan belajar kerajinan lokal bersama.

### 13. Photography Challenge
Kompetisi foto dengan tema tertentu. Kreatif dan menghasilkan kenangan.

### 14. Sports Day
Mini olimpiade dengan berbagai cabang olahraga ringan dan fun.

### 15. Innovation Sprint
Hackathon mini dimana tim membuat prototipe solusi dalam waktu terbatas.

---

Butuh bantuan merencanakan team building? **Sarau Luxury** siap merancang program custom sesuai kebutuhan tim Anda.`}
        </article>
      </div>
    </div>
  )
}
