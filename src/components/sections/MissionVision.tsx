'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Smile, Users, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    emoji: '💡',
    title: 'Creative Thinking',
    desc: 'Kreativitas adalah nilai pertama & utama Event Organizer kami dalam mempersiapkan dan menghasilkan kegiatan yang berbeda dari yang lain serta menarik.',
    color: 'from-amber-50 to-yellow-50',
    iconBg: 'bg-amber-100 group-hover:bg-amber-500',
    iconColor: 'text-amber-600 group-hover:text-white',
  },
  {
    icon: Smile,
    emoji: '😄',
    title: 'Fun',
    desc: 'Membawa kesenangan dalam acara Anda sehingga menjadi yang tidak akan terlupakan.',
    color: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-100 group-hover:bg-emerald-500',
    iconColor: 'text-emerald-600 group-hover:text-white',
  },
  {
    icon: Users,
    emoji: '🤝',
    title: 'Solid Teamwork',
    desc: 'Tim yang solid dan kompak siap membantu melancarkan acara Meeting, outbound, dan acara Anda lainnya.',
    color: 'from-blue-50 to-sky-50',
    iconBg: 'bg-blue-100 group-hover:bg-blue-500',
    iconColor: 'text-blue-600 group-hover:text-white',
  },
  {
    icon: ShieldCheck,
    emoji: '✅',
    title: 'Reliable',
    desc: 'Partner yang dapat anda andalkan dan percaya di dalam acara anda.',
    color: 'from-forest/5 to-leaf/10',
    iconBg: 'bg-forest/10 group-hover:bg-forest',
    iconColor: 'text-forest group-hover:text-white',
  },
]

export default function MissionVision() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-tight">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4 inline-flex">🌿 Visi & Misi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
            Our Vision <span className="gradient-text">&amp; Mission</span>
          </h2>
          <p className="mt-4 text-earth/60 text-lg">Sarau Luxury</p>
        </motion.div>

        {/* Visi & Misi cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              label: '👁️ Visi',
              title: 'Visi Kami',
              text: 'Menjadi Event Organizer outing & outbound pilihan utama yang paling dipercaya dan dicintai oleh perusahaan dari berbagai industri di Indonesia, dengan menghadirkan pengalaman yang kreatif, menyenangkan, dan berkesan.',
            },
            {
              label: '🎯 Misi',
              title: 'Misi Kami',
              text: 'Mempersiapkan dan menghasilkan kegiatan Meeting, Outbound, serta acara perusahaan lainnya dengan tim yang solid, pendekatan kreatif, dan layanan yang dapat diandalkan — sehingga setiap acara menjadi pengalaman yang tidak akan terlupakan.',
            },
          ].map(({ label, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earth/8 hover:shadow-lg hover:shadow-forest/10 transition-all duration-500"
            >
              <span className="section-tag mb-5 inline-flex">{label}</span>
              <h3 className="font-display text-2xl font-bold text-bark mb-4">{title}</h3>
              <p className="text-earth/80 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values — 4 cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark">
            Nilai-Nilai yang Kami <span className="gradient-text">Pegang</span>
          </h2>
          <p className="mt-3 text-earth/60 max-w-md mx-auto">
            Empat pilar yang menjadi fondasi setiap event yang kami hadirkan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, emoji, title, desc, iconBg, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center p-7 bg-white rounded-3xl shadow-sm border border-earth/8 group hover:shadow-xl hover:shadow-forest/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-5 transition-all duration-300`}>
                <Icon size={28} className={`${iconColor} transition-colors duration-300`} />
              </div>
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-display text-lg font-bold text-bark mb-3">{title}</h3>
              <p className="text-earth/70 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
