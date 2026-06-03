'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Tent, Users, Mountain, Heart, Presentation, Camera } from 'lucide-react'

const services = [
  {
    icon: Tent,
    title: 'Outing Perusahaan',
    slug: 'outing',
    desc: 'Wisata keluar kantor yang menyenangkan, mempererat hubungan antar tim dengan destinasi pilihan terbaik.',
    color: 'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream',
    tag: 'Populer',
  },
  {
    icon: Mountain,
    title: 'Outbound Training',
    slug: 'outbound',
    desc: 'Program pelatihan di alam terbuka yang meningkatkan kepercayaan diri, komunikasi, dan kerja sama tim.',
    color: 'bg-earth/10 text-earth group-hover:bg-earth group-hover:text-cream',
    tag: 'Unggulan',
  },
  {
    icon: Users,
    title: 'Team Building',
    slug: 'teambuilding',
    desc: 'Aktivitas indoor dan outdoor kreatif yang dirancang khusus untuk memperkuat sinergi tim Anda.',
    color: 'bg-sun/20 text-earth-dark group-hover:bg-sun group-hover:text-bark',
    tag: null,
  },
  {
    icon: Heart,
    title: 'Family Gathering',
    slug: 'family',
    desc: 'Rayakan kebersamaan bersama keluarga besar perusahaan dalam suasana hangat dan penuh kegembiraan.',
    color: 'bg-leaf/20 text-forest group-hover:bg-leaf group-hover:text-bark',
    tag: null,
  },
  {
    icon: Presentation,
    title: 'MICE Event',
    slug: 'mice',
    desc: 'Meeting, incentive, conference, dan exhibition profesional dengan fasilitas terbaik dan tim berpengalaman.',
    color: 'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream',
    tag: 'Premium',
  },
  {
    icon: Camera,
    title: 'Dokumentasi Event',
    slug: 'documentation',
    desc: 'Abadikan setiap momen berharga dengan tim fotografer dan videografer profesional kami.',
    color: 'bg-earth/10 text-earth group-hover:bg-earth group-hover:text-cream',
    tag: null,
  },
]

export default function ServicesPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #95D5B2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F4A261 0%, transparent 40%)' }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">🎯 Layanan Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-5">
            Semua yang Tim Anda{' '}
            <span className="gradient-text">Butuhkan</span>
          </h2>
          <p className="text-earth/80 text-lg max-w-xl mx-auto leading-relaxed">
            Dari outing santai hingga outbound penuh tantangan — kami hadirkan solusi lengkap
            untuk setiap kebutuhan event perusahaan Anda.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ icon: Icon, title, slug, desc, color, tag }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services#${slug}`}
                className="card-base block p-7 group cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${color}`}>
                    <Icon size={26} />
                  </div>
                  {tag && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sun/20 text-earth border border-sun/30">
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-xl text-bark mb-3 group-hover:text-forest transition-colors">
                  {title}
                </h3>
                <p className="text-earth/70 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center gap-2 text-forest text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Selengkapnya <ArrowRight size={15} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/services" className="btn-primary">
            Lihat Semua Layanan <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
