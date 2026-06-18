'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

// ─── Direct link helper ───────────────────────────────────────────────────────
const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`

// ─── Gallery data ─────────────────────────────────────────────────────────────
const items = [
  // ── Batch 1 (original) ──
  { id: 1,  src: gd('1HhH1QIB3rAGDFk6T1-fPh7EUwKujYTax'), title: 'Outbound Seru Bersama',        category: 'Outbound',      tall: true  },
  { id: 2,  src: gd('1HSx1QewH2BMjSGxdam5z04W2UpXozPym'), title: 'Team Building Kompak',          category: 'Team Building', tall: false },
  { id: 3,  src: gd('1JT3QZM0QZaXPTYLE7QUfQiwtEW7GVpCx'), title: 'Gathering Kebersamaan',         category: 'Gathering',     tall: false },
  { id: 4,  src: gd('1uTefPFMuCEufqDWhoxk-T4CJdXZRPMyq'), title: 'Outing Petualangan',            category: 'Outing',        tall: true  },
  { id: 5,  src: gd('1zzHVnSRhIcKY9og6COA743wgc8ej6yMP'), title: 'Fun Game Penuh Energi',         category: 'Outbound',      tall: false },
  { id: 6,  src: gd('1DIOEfTC0AGwVhBWPx_e_sHp1S4whYsnj'), title: 'Momen Kebersamaan Tim',         category: 'Team Building', tall: false },
  // id 7 (Family Gathering Bahagia) — dihapus: duplikat
  { id: 8,  src: gd('1mFaFZoSo2eJlsnpGyy-5HaSiGVk0eriq'), title: 'Seru Bersama di Alam Terbuka',  category: 'Outing',        tall: false },
  // ── Batch 2 (baru) ──
  { id: 9,  src: gd('19Z0PLEUY2THTrafQ_NTJezJhfEZYF_V8'), title: 'Semangat Tim yang Membara',     category: 'Outbound',      tall: false },
  { id: 10, src: gd('1_TzSpo235LmJJUQWIfaAv1LPc018OR2q'), title: 'Aksi Seru di Lapangan',         category: 'Team Building', tall: true  },
  { id: 11, src: gd('1lrnK9HRhjD0W-8uPDPQLWkGHBnEWmnQN'), title: 'Kebersamaan yang Nyata',        category: 'Gathering',     tall: false },
  // id 12 (Tantangan Bersama) — dihapus: duplikat
  { id: 13, src: gd('1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN'), title: 'Petualangan Tak Terlupakan',    category: 'Outing',        tall: true  },
  { id: 14, src: gd('1cydhBNrsRQDtXFpMwNtMJc3-fTSkOVBJ'), title: 'Keceriaan Bersama Keluarga',    category: 'Gathering',     tall: false },
  { id: 15, src: gd('1IVOSqzmigs7hd6bGF34SASET2Kcf8-lq'), title: 'Kolaborasi Tim Solid',          category: 'Team Building', tall: false },
  { id: 16, src: gd('1F5cVgjHxEB2NeGsKpp3LiNohL5mq_mKc'), title: 'Energi Positif Outbound',       category: 'Outbound',      tall: true  },
  { id: 17, src: gd('1_-iTffNdnkFAQSBa-hdf8kcZpXb1RqJH'), title: 'Momen Spesial Gathering',       category: 'Gathering',     tall: false },
  { id: 18, src: gd('1jCUcfuWiZU4ggrUiCmG0AZOSCDFsbGnd'), title: 'Keakraban Tim di Alam',         category: 'Outing',        tall: false },
  { id: 19, src: gd('1JBJPpk5dPPdUUln30xDVPtJmp6foxEMp'), title: 'Games Seru & Kompetitif',       category: 'Team Building', tall: true  },
  { id: 20, src: gd('1-ILWgzSffMw8nBIlxt_Pss-0IYoAFULy'), title: 'Rafting Penuh Adrenalin',       category: 'Outing',        tall: false },
  { id: 21, src: gd('1ob1dQbH-htgnIHRgBaFlK_7u0UNusuF8'), title: 'Senyum Keberhasilan Bersama',   category: 'Gathering',     tall: false },
  // id 22 (Foto Bersama yang Berkesan) — dihapus: duplikat
  { id: 23, src: gd('12jjmiI8Yr9WJgXzR2rSqA139vTa5RlOx'), title: 'Serunya Outbound Alam Bebas',   category: 'Outbound',      tall: true  },
]

const categories = ['Semua', 'Outbound', 'Team Building', 'Gathering', 'Outing']

export default function GalleryPage() {
  const [active,   setActive]   = useState('Semua')
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null)

  const filtered = active === 'Semua' ? items : items.filter((it) => it.category === active)

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">📸 Galeri</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Momen <span className="gradient-text">Berkesan</span>
          </h1>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Setiap foto menyimpan cerita kebersamaan yang tak terlupakan bersama klien Sarau Luxury.
          </p>
        </motion.div>

        {/* SEO Content block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-4 gap-5 mb-12"
        >
          {[
            { icon: '🎉', label: '100+ Event', desc: 'Dokumentasi sukses dari berbagai industri' },
            { icon: '📍', label: '20+ Destinasi', desc: 'Lembang, Bali, Bromo, Anyer & seluruh Indonesia' },
            { icon: '👥', label: '53+ Klien', desc: 'Perusahaan terkemuka dari berbagai sektor' },
            { icon: '⭐', label: '8 Tahun', desc: 'Pengalaman menggelar event sejak 2018' },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-5 text-center border border-earth/10 shadow-sm">
              <div className="text-3xl mb-2">{icon}</div>
              <h4 className="font-display font-bold text-xl text-forest mb-1">{label}</h4>
              <h6 className="text-earth/60 text-sm">{desc}</h6>
            </div>
          ))}
        </motion.div>

        {/* SEO text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-7 mb-10 border border-earth/10 shadow-sm"
        >
          <h2 className="font-display text-2xl font-bold text-bark mb-3">Dokumentasi Nyata Event Perusahaan</h2>
          <p className="text-earth/70 leading-relaxed mb-3">
            Galeri ini menampilkan koleksi foto dan momen nyata dari ratusan event yang telah kami gelar sejak 2018.
            Dari <strong>outbound training</strong> penuh adrenalin di alam terbuka, <strong>company gathering</strong> yang hangat dan berkesan,
            hingga <strong>team building</strong> kreatif yang mempererat sinergi tim — semua terabadikan di sini.
          </p>
          <p className="text-earth/70 leading-relaxed mb-3">
            Setiap event dirancang khusus sesuai kebutuhan dan karakter tim klien kami. Klien kami mencakup perusahaan
            dari berbagai industri: perbankan (BCA, Mandiri, BNI), otomotif (Toyota, Hino), farmasi (Kalbe Farma),
            hospitality (Park Hyatt, Mercure), hingga manufaktur multinasional.
          </p>
          <h5 className="text-earth/50 text-xs uppercase tracking-widest font-semibold mb-2">Filter berdasarkan kategori:</h5>
          <p className="text-earth/70 leading-relaxed">
            Gunakan filter kategori di bawah untuk melihat foto berdasarkan jenis aktivitas:
            <strong> Outbound</strong>, <strong>Team Building</strong>, <strong>Gathering</strong>, atau <strong>Outing</strong>.
            Klik foto untuk melihat detail lebih besar.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-forest text-cream shadow-forest shadow-md'
                  : 'bg-white border border-earth/20 text-earth/80 hover:border-forest/40 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setLightbox(item)}
                className={`break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative mb-4 bg-earth/10 ${
                  item.tall ? 'h-80' : 'h-52'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/50 transition-all duration-300" />
                {/* Caption */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold text-leaf mb-1">{item.category}</span>
                  <span className="font-display font-semibold text-cream text-sm leading-tight">{item.title}</span>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-4 text-center py-20 text-earth/50"
              >
                <div className="text-5xl mb-4">📭</div>
                <p className="text-lg">Belum ada foto di kategori ini.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark/90 to-transparent p-6">
                <span className="text-xs font-semibold text-leaf">{lightbox.category}</span>
                <p className="font-display font-bold text-cream text-lg">{lightbox.title}</p>
              </div>
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
