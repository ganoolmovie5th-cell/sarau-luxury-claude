'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, X } from 'lucide-react'
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

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-sun/40 text-bark rounded px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

function FAQItem({ q, a, index, query }: { q: string; a: string; index: number; query: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.04 }}
      className="border border-earth/15 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-bark pr-4">{highlight(q, query)}</span>
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
              {highlight(a, query)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQClient() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faqs
    return faqs.filter(
      ({ q: question, a: answer }) =>
        question.toLowerCase().includes(q) || answer.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div>
      <div className="pt-36 pb-24 bg-cream">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="section-tag mb-4 inline-flex">❓ FAQ</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-5">
              Pertanyaan yang <span className="gradient-text">Sering Ditanya</span>
            </h1>
            <p className="text-earth/70 text-xl max-w-xl mx-auto">
              Tidak menemukan jawaban? Hubungi kami langsung — kami siap membantu!
            </p>
          </motion.div>

          {/* ── Search bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-lg mx-auto mb-10"
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-earth/40 pointer-events-none"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari pertanyaan…"
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-earth/20 bg-white
                           text-bark placeholder:text-earth/40 text-sm
                           focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50
                           transition-all duration-200"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full
                             bg-earth/10 hover:bg-earth/20 flex items-center justify-center
                             transition-colors"
                  aria-label="Hapus pencarian"
                >
                  <X size={13} className="text-earth/60" />
                </button>
              )}
            </div>
            {/* Result count */}
            <AnimatePresence>
              {query.trim() && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-earth/50 mt-2 text-center"
                >
                  {filtered.length > 0
                    ? `${filtered.length} pertanyaan ditemukan untuk "${query}"`
                    : `Tidak ada hasil untuk "${query}"`}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── FAQ list ── */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3 mb-10"
              >
                {filtered.map(({ q, a }, i) => (
                  <FAQItem key={q} q={q} a={a} index={i} query={query} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 mb-10"
              >
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-display font-semibold text-xl text-bark mb-2">
                  Tidak ada hasil
                </p>
                <p className="text-earth/60 text-sm mb-5">
                  Coba kata kunci lain, atau hubungi kami langsung.
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="text-forest text-sm font-semibold underline underline-offset-2
                             hover:text-forest/70 transition-colors"
                >
                  Tampilkan semua pertanyaan
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SEO content blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {[
              {
                icon: '🗓️',
                title: 'Proses Cepat',
                body: 'Konsultasi gratis → proposal dalam 24 jam → konfirmasi booking → persiapan event. Proses mudah dan transparan dari awal hingga hari H.',
              },
              {
                icon: '📦',
                title: 'Paket Lengkap',
                body: 'Gathering Silver (Rp 525K), Gold (Rp 675K), Platinum (Rp 925K/pax). Semua sudah termasuk akomodasi, makan, aktivitas, dan dokumentasi.',
              },
              {
                icon: '🌿',
                title: 'Layanan Profesional',
                body: 'Tim fasilitator bersertifikat, pemandu berpengalaman, dan event manager yang siap mendampingi Anda dari planning hingga evaluasi pasca event.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-earth/10 shadow-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-display font-bold text-lg text-bark mb-2">{title}</h4>
                <p className="text-earth/70 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-7 border border-earth/10 shadow-sm mb-4"
          >
            <h2 className="font-display text-2xl font-bold text-bark mb-3">Tentang Sarau Luxury</h2>
            <h5 className="text-forest font-semibold text-xs uppercase tracking-widest mb-3">Event Organizer Profesional · Banten · Indonesia</h5>
            <p className="text-earth/70 leading-relaxed mb-3">
              Sarau Luxury adalah event organizer profesional yang berdiri sejak 2018, berpusat di Banten dan
              melayani seluruh Indonesia. Kami spesialis dalam <strong>outing perusahaan</strong>,{' '}
              <strong>outbound training</strong>, <strong>company gathering</strong>, dan{' '}
              <strong>team building</strong> untuk korporat.
            </p>
            <p className="text-earth/70 leading-relaxed">
              Dipercaya oleh 53+ perusahaan terkemuka termasuk BCA, Toyota, Kalbe Farma, Park Hyatt, dan Bank Mandiri.
              Dengan pengalaman lebih dari 8 tahun dan 100+ event sukses, kami hadir untuk memastikan setiap event
              perusahaan Anda berjalan lancar, berkesan, dan sesuai anggaran.
              Hubungi kami untuk konsultasi gratis — respon dalam 15 menit, Senin–Sabtu 08.00–20.00 WIB.
            </p>
          </motion.div>
        </div>
      </div>
      <CtaSection />
    </div>
  )
}
