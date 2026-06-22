'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'HR Department',
    role: 'Human Resources',
    company: 'PT. Hino Motors Indonesia',
    rating: 5,
    text: 'Sarau Luxury luar biasa! Program outbound untuk tim kami sangat terorganisir dan penuh energi. Fasilitator yang profesional, lokasi yang indah, dan semua detail tertangani dengan baik. Tim kami pulang dengan semangat baru dan kekompakan yang meningkat pesat.',
    avatar: 'HM',
    color: 'bg-red-600',
  },
  {
    name: 'Event Committee',
    role: 'Panitia Gathering',
    company: 'PT. Epson Indonesia',
    rating: 5,
    text: 'Ini pertama kali kami menggunakan Sarau Luxury untuk company gathering dan hasilnya melebihi ekspektasi. Konsep acara kreatif, eksekusi rapi, dan tim mereka sangat responsif dari awal hingga akhir. Pasti akan kami gunakan lagi untuk event berikutnya!',
    avatar: 'EP',
    color: 'bg-blue-600',
  },
  {
    name: 'Management Team',
    role: 'General Affairs',
    company: 'Grand Soll Marina Hotel',
    rating: 5,
    text: 'Sebagai sesama pelaku industri hospitality, kami sangat mengapresiasi standar pelayanan Sarau Luxury yang tinggi. Family gathering kami untuk 200+ karyawan berjalan sempurna — dari venue, konsumsi, games, hingga dokumentasi. Profesional dan terpercaya!',
    avatar: 'GS',
    color: 'bg-emerald-700',
  },
  {
    name: 'HR & GA Division',
    role: 'HR & General Affairs',
    company: 'PT. Adaro Energy',
    rating: 5,
    text: 'Sarau Luxury berhasil mengemas team building kami menjadi pengalaman yang benar-benar berkesan. Aktivitas rafting dan outbound yang mereka siapkan menantang sekaligus menyenangkan. Tim kami masih membicarakannya berbulan-bulan setelah event selesai!',
    avatar: 'AE',
    color: 'bg-blue-900',
  },
  {
    name: 'Operations Team',
    role: 'Operations Manager',
    company: 'Hotel Mercure',
    rating: 5,
    text: 'Koordinasi dengan tim Sarau Luxury sangat mudah dan menyenangkan. Mereka memahami kebutuhan kami dengan cepat dan memberikan solusi terbaik sesuai budget. Hasil akhirnya memuaskan semua pihak — karyawan senang, manajemen puas!',
    avatar: 'HC',
    color: 'bg-indigo-700',
  },
  {
    name: 'People & Culture',
    role: 'HR Manager',
    company: 'PT. Nippon Steel Indonesia',
    rating: 5,
    text: 'Sarau Luxury memahami kultur perusahaan kami yang mengedepankan kedisiplinan dan kebersamaan. Program yang mereka rancang sangat sesuai — terstruktur, bermakna, dan tetap menyenangkan. Highly recommended untuk perusahaan manufaktur!',
    avatar: 'NS',
    color: 'bg-slate-800',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-cream" />
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #95D5B2 0%, transparent 50%)' }}
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4 inline-flex">💬 Testimoni</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
            Yang Mereka{' '}
            <span className="gradient-text">Katakan</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-earth/10 p-8 md:p-14 border border-earth/8 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-forest/10">
              <Quote size={80} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-sun fill-sun" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-display text-xl md:text-2xl text-bark/80 leading-relaxed mb-10 italic max-w-3xl">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center font-bold text-cream text-lg flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-bark text-lg">{t.name}</div>
                    <div className="text-earth/70 text-sm">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Pilih testimoni">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimoni ${i + 1} dari ${testimonials.length}`}
                  className={`h-2 rounded-full transition duration-300 ${
                    i === current ? 'w-8 bg-forest' : 'w-2 bg-earth/30'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Testimoni sebelumnya"
                className="w-12 h-12 rounded-full border-2 border-forest/30 hover:border-forest hover:bg-forest hover:text-cream text-forest flex items-center justify-center transition duration-200"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Testimoni berikutnya"
                className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-forest-light transition-colors"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
