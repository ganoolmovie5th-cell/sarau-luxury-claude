import type { Metadata } from 'next'
import FAQClient from './FAQClient'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarau-luxury.com'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'FAQ – Pertanyaan Umum Seputar Event Sarau Luxury',
  description: 'Jawaban lengkap soal paket, harga, destinasi, minimal peserta, dan proses booking di Sarau Luxury. Ada pertanyaan lain? Kami siap membantu.',
  keywords: ['FAQ event organizer', 'pertanyaan outing perusahaan', 'minimal peserta outbound', 'cara booking gathering', 'harga paket outing'],
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    title: 'FAQ – Pertanyaan Umum Seputar Event Sarau Luxury',
    description: 'Jawaban lengkap soal paket, harga, destinasi, minimal peserta, dan proses booking di Sarau Luxury. Ada pertanyaan lain? Kami siap membantu.',
    url: `${BASE_URL}/faq`,
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Sarau Luxury – FAQ Event Perusahaan' }],
  },
}

// FAQ Schema JSON-LD untuk Google Featured Snippet & Rich Result
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa minimal peserta untuk menggunakan layanan Sarau Luxury?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami melayani dari minimal 20 peserta hingga 1000+ peserta. Setiap paket dapat disesuaikan dengan jumlah peserta Anda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa lama proses perencanaan event biasanya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Untuk event standar, kami membutuhkan 2-4 minggu persiapan. Untuk event besar atau custom, idealnya 1-3 bulan sebelum hari H agar semua detail bisa disiapkan dengan matang.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah Sarau Luxury melayani event di luar Jawa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya! Kami melayani seluruh Indonesia — Bali, Lombok, Flores, Sulawesi, hingga Papua. Kami juga melayani outbound tour ke luar negeri seperti Singapura, Malaysia, dan Thailand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana sistem pembayaran dan DP-nya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sistem pembayaran kami fleksibel: DP 30-50% untuk booking, sisanya H-7 sebelum event. Kami menerima transfer bank, kartu kredit, dan virtual account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada garansi jika event tidak sesuai ekspektasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami berkomitmen pada kepuasan klien. Jika ada hal yang tidak sesuai dengan kesepakatan, kami siap memberikan kompensasi yang wajar atau mengulang layanan yang kurang memuaskan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa request tema atau konsep event khusus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tentu! Tim kreatif kami sangat terbuka dengan ide-ide unik. Kami sudah pernah mengeksekusi berbagai tema mulai dari tradisional, futuristik, olimpiade, hingga Amazing Race ala TV.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana jika cuaca tidak mendukung untuk outdoor event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami selalu menyiapkan rencana alternatif (contingency plan). Semua event outdoor kami punya backup venue atau aktivitas indoor agar acara tetap berjalan lancar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah termasuk asuransi peserta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paket Gathering Gold dan Platinum sudah termasuk asuransi kecelakaan peserta selama event berlangsung. Untuk paket Silver dan aktivitas satuan, asuransi tersedia sebagai add-on.',
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQClient />
    </>
  )
}
