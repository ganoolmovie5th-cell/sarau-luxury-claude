'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import CtaSection from '@/components/sections/CtaSection'

const faqs = [
  {
    q: 'Berapa minimal peserta untuk menggunakan layanan Sarau Luxury?',
    a: 'Kami melayani dari minimal 20 peserta hingga 1000+ peserta. Setiap paket dapat disesuaikan dengan jumlah peserta Anda.',
  },
  {
    q: 'Berapa lama proses perencanaan event biasanya?',
    a: 'Untuk event standar, kami membutuhkan 2-4 minggu persiapan. Untuk event besar atau custom, idealnya 1-3 bulan sebelum hari H agar semua detail bisa disiapkan dengan matang.',
  },
  {
    q: 'Apakah Sarau Luxury melayani event di luar Jawa?',
    a: 'Ya! Kami melayani seluruh Indonesia — Bali, Lombok, Flores, Sulawesi, hingga Papua. Kami juga melayani outbound tour ke luar negeri seperti Singapura, Malaysia, dan Thailand.',
  },
  {
    q: 'Bagaimana sistem pembayaran dan DP-nya?',
    a: 'Sistem pembayaran kami fleksibel: DP 30-50% untuk booking, sisanya H-7 sebelum event. Kami menerima transfer bank, kartu kredit, dan virtual account.',
  },
  {
    q: 'Apakah ada garansi jika event tidak sesuai ekspektasi?',
    a: 'Kami berkomitmen pada kepuasan klien. Jika ada hal yang tidak sesuai dengan kesepakatan, kami siap memberikan kompensasi yang wajar atau mengulang layanan yang kurang memuaskan.',
  },
  {
    q: 'Apakah bisa request tema atau konsep event khusus?',
    a: 'Tentu! Tim kreatif kami sangat terbuka dengan ide-ide unik. Kami sudah pernah mengeksekusi berbagai tema mulai dari tradisional, futuristik, olimpiade, hingga Amazing Race ala TV.',
  },
  {
    q: 'Bagaimana jika cuaca tidak mendukung untuk outdoor event?',
    a: 'Kami selalu menyiapkan rencana alternatif (contingency plan). Semua event outdoor kami punya backup venue atau aktivitas indoor agar acara tetap berjalan lancar.',
  },
  {
    q: 'Apakah termasuk asuransi peserta?',
    a: 'Paket Gathering Gold dan Platinum sudah termasuk asuransi kecelakaan peserta selama event berlangsung. Untuk paket Silver dan aktivitas satuan, asuransi tersedia sebagai add-on.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="border border-earth/15 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
      >
        <span className="font-semibold text-bark pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-forest flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-earth/80 text-sm leading-relaxed border-t border-earth/10 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQClient() {
  return (
    <div>
      <div className="pt-36 pb-24 bg-cream">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="section-tag mb-4 inline-flex">❓ FAQ</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-5">
              Pertanyaan yang <span className="gradient-text">Sering Ditanya</span>
            </h1>
            <p className="text-earth/70 text-xl max-w-xl mx-auto">
              Tidak menemukan jawaban? Hubungi kami langsung — kami siap membantu!
            </p>
          </motion.div>

          <div className="space-y-3 mb-10">
            {faqs.map(({ q, a }, i) => (
              <FAQItem key={q} q={q} a={a} index={i} />
            ))}
          </div>
        </div>
      </div>
      <CtaSection />
    </div>
  )
}
