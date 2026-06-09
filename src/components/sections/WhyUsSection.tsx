'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Clock, Sparkles, Headphones, Map, Award } from 'lucide-react'

import { STATS } from '@/lib/constants'

const reasons = [
  { icon: Shield,      title: 'Terpercaya & Berpengalaman', desc: `${STATS.yearsExperienceLabel} tahun sejak ${STATS.foundedYear} menggelar ratusan event sukses di seluruh Indonesia.` },
  { icon: Sparkles,    title: 'Konsep Kreatif & Custom',    desc: 'Setiap event kami rancang unik sesuai karakter dan kebutuhan perusahaan Anda.' },
  { icon: Map,         title: `${STATS.totalDestinationsLabel} Destinasi Pilihan`, desc: 'Pilihan destinasi terbaik di Jawa, Bali, dan sekitarnya untuk event yang berkesan.' },
  { icon: Headphones,  title: 'Support 24/7',               desc: 'Tim kami siap melayani pertanyaan dan kebutuhan Anda kapan saja, sebelum hingga setelah event.' },
  { icon: Clock,       title: 'Tepat Waktu & On-Budget',    desc: 'Kami menjamin pelaksanaan sesuai jadwal dan anggaran yang telah disepakati.' },
  { icon: Award,       title: 'Vendor Terkurasi',           desc: 'Bekerja sama dengan vendor dan venue terbaik yang telah tersertifikasi.' },
]

export default function WhyUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding gradient-forest relative overflow-hidden noise-overlay">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-leaf/10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-leaf/10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full border border-leaf/10 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-leaf border border-leaf/20 font-accent text-base mb-6">
              🏆 Kenapa Sarau Luxury?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
              Kami Bukan Sekadar{' '}
              <span className="text-sun">Event Organizer</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Sarau Luxury adalah mitra pertumbuhan tim Anda. Kami memahami bahwa di balik
              setiap event yang sukses, ada tim yang lebih solid, lebih termotivasi, dan
              siap menghadapi tantangan bersama.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[`Berdiri Sejak ${STATS.foundedYear}`, `Rating Google ${STATS.googleRatingStr} ⭐`, `${STATS.totalClientsLabel} Klien Korporat`, 'Minimal 20 Peserta'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cream/80 text-sm font-medium"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sun/20 flex items-center justify-center mb-4 group-hover:bg-sun/30 transition-colors">
                  <Icon size={20} className="text-sun" />
                </div>
                <h3 className="font-semibold text-cream text-sm mb-2">{title}</h3>
                <p className="text-cream/55 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
