'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'HR Director',
    company: 'PT Astra International',
    rating: 5,
    text: 'Sarau Luxury benar-benar mengubah pandangan kami tentang team building. Program outbound yang mereka rancang sangat kreatif dan berdampak nyata pada kohesi tim kami. Setelah event, produktivitas divisi kami meningkat signifikan.',
    avatar: 'BS',
    color: 'bg-forest',
  },
  {
    name: 'Dian Ramadhani',
    role: 'Head of People & Culture',
    company: 'Gojek Indonesia',
    rating: 5,
    text: 'Kami sudah 3 kali menggunakan Sarau Luxury untuk company outing dan selalu puas. Mereka paham betul kebutuhan tim tech startup yang dinamis. Konsepnya selalu fresh dan eksekusinya zero drama.',
    avatar: 'DR',
    color: 'bg-earth',
  },
  {
    name: 'Kartika Wulandari',
    role: 'General Manager',
    company: 'Bank Mandiri Regional Jakarta',
    rating: 5,
    text: 'Kami menggelar family gathering untuk 300 peserta. Sarau Luxury menangani segalanya dengan sangat profesional — dari venue, catering, entertainment, hingga dokumentasi. Semua karyawan sangat puas!',
    avatar: 'KW',
    color: 'bg-moss',
  },
  {
    name: 'Reza Firmansyah',
    role: 'CEO',
    company: 'PT Teknologi Maju Bersama',
    rating: 5,
    text: 'Tim yang ramah, responsif, dan sangat kreatif. Mereka berhasil menciptakan program team building yang terasa natural, bukan monoton. Investasi terbaik untuk perusahaan kami tahun ini!',
    avatar: 'RF',
    color: 'bg-sun text-bark',
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
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-forest' : 'w-2 bg-earth/30'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-forest/30 hover:border-forest hover:bg-forest hover:text-cream text-forest flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-forest-light transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
