"""
Weekly Blog Generator for Sarau Luxury.
Generates SEO-optimized blog posts from hardcoded topics.
Rotates through topics weekly.
"""
import os
import json
import random
from datetime import datetime, timezone

BLOG_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        "src", "app", "blog")

TOPICS = [
    {
        "slug": "tips-memilih-event-organizer-terpercaya",
        "title": "10 Tips Memilih Event Organizer Terpercaya untuk Perusahaan",
        "excerpt": "Panduan lengkap memilih EO yang tepat agar event perusahaan Anda sukses dan berkesan.",
        "category": "Tips & Guide",
        "content": """
## 1. Cek Pengalaman dan Portofolio

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

**Sarau Luxury** memenuhi semua kriteria di atas dengan pengalaman 8+ tahun dan 100+ event sukses. Konsultasi gratis sekarang!
"""
    },
    {
        "slug": "ide-team-building-kreatif-2026",
        "title": "15 Ide Team Building Kreatif untuk Perusahaan di 2026",
        "excerpt": "Inspirasi aktivitas team building seru yang bisa memperkuat kekompakan tim Anda.",
        "category": "Inspirasi",
        "content": """
## Outdoor Activities

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

Butuh bantuan merencanakan team building? **Sarau Luxury** siap merancang program custom sesuai kebutuhan tim Anda.
"""
    },
    {
        "slug": "destinasi-outing-terbaik-bandung-2026",
        "title": "7 Destinasi Outing Perusahaan Terbaik di Bandung 2026",
        "excerpt": "Rekomendasi lokasi outing perusahaan di Bandung dan sekitarnya yang cocok untuk semua ukuran tim.",
        "category": "Destinasi",
        "content": """
## 1. Lembang — The Classic Choice

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

**Sarau Luxury** memiliki partner venue di semua destinasi di atas. Konsultasi gratis untuk rekomendasi lokasi sesuai budget dan jumlah peserta!
"""
    },
    {
        "slug": "manfaat-outbound-training-untuk-karyawan",
        "title": "8 Manfaat Outbound Training untuk Produktivitas Karyawan",
        "excerpt": "Mengapa perusahaan besar rutin mengadakan outbound training dan bagaimana dampaknya terhadap performa tim.",
        "category": "Knowledge",
        "content": """
## 1. Meningkatkan Komunikasi Tim

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

**Sarau Luxury** merancang outbound training dengan metode experiential learning yang terstruktur. Hubungi kami untuk program custom!
"""
    },
]


def generate_blog_page(topic):
    """Generate a Next.js blog page file."""
    now = datetime.now(timezone.utc)
    date_str = now.strftime("%Y-%m-%d")

    page_content = f"""import type {{ Metadata }} from 'next'
import Link from 'next/link'
import {{ ArrowLeft, Calendar, Tag }} from 'lucide-react'

export const metadata: Metadata = {{
  title: '{topic["title"]} — Sarau Luxury Blog',
  description: '{topic["excerpt"]}',
}}

export default function BlogPost() {{
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-forest hover:text-forest-dark mb-8 text-sm font-medium">
          <ArrowLeft size={{16}} /> Kembali ke Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-forest/10 text-forest text-xs font-semibold rounded-full">
            <Tag size={{12}} /> {topic["category"]}
          </span>
          <span className="flex items-center gap-1 text-earth/60 text-xs">
            <Calendar size={{12}} /> {date_str}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          {topic["title"]}
        </h1>
        <p className="text-earth/70 text-lg mb-10">{topic["excerpt"]}</p>

        <article className="prose prose-lg prose-bark max-w-none">
          {{`{topic["content"].strip()}`}}
        </article>
      </div>
    </div>
  )
}}
"""
    return page_content


def main():
    # Pick topic based on week number
    week_num = datetime.now(timezone.utc).isocalendar()[1]
    topic = TOPICS[week_num % len(TOPICS)]

    # Create blog directory
    blog_path = os.path.join(BLOG_DIR, topic["slug"])
    os.makedirs(blog_path, exist_ok=True)

    # Write page
    page_file = os.path.join(blog_path, "page.tsx")
    if os.path.exists(page_file):
        print(f"[*] Blog post already exists: {topic['slug']}")
        return

    with open(page_file, "w", encoding="utf-8") as f:
        f.write(generate_blog_page(topic))

    print(f"[*] Generated blog: {topic['title']}")


if __name__ == "__main__":
    main()
