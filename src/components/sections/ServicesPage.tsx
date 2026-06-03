'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Tent, Mountain, Users, Heart, Presentation, Camera, Check } from 'lucide-react'

const services = [
  {
    id: 'outing',
    icon: Tent,
    title: 'Outing Perusahaan',
    subtitle: 'Recharge & Reconnect',
    desc: 'Program wisata keluar kantor yang memadukan kesenangan, relaksasi, dan penguatan hubungan antar anggota tim. Dari destinasi lokal hingga mancanegara.',
    features: ['Paket all-inclusive', 'Pilihan 50+ destinasi', 'Akomodasi terkurasi', 'Transportation & guide', 'Dokumentasi profesional'],
    color: 'bg-forest',
    light: 'bg-forest/10',
    emoji: '⛺',
  },
  {
    id: 'outbound',
    icon: Mountain,
    title: 'Outbound Training',
    subtitle: 'Challenge & Grow',
    desc: 'Program pelatihan berbasis alam terbuka yang dirancang untuk meningkatkan kemampuan kepemimpinan, komunikasi, dan teamwork dengan metode experiential learning.',
    features: ['High rope & low rope games', 'Leadership simulation', 'Problem solving challenge', 'Fasilitator bersertifikat', 'Laporan evaluasi tim'],
    color: 'bg-earth',
    light: 'bg-earth/10',
    emoji: '🏔️',
  },
  {
    id: 'teambuilding',
    icon: Users,
    title: 'Team Building',
    subtitle: 'Connect & Collaborate',
    desc: 'Aktivitas indoor dan outdoor kreatif yang bisa diadaptasi di mana saja — dari kantor hingga resort. Fokus pada sinergi dan komunikasi tim.',
    features: ['Amazing race & fun games', 'Creative workshop', 'Cooking class team', 'Digital scavenger hunt', 'Fleksibel indoor/outdoor'],
    color: 'bg-moss',
    light: 'bg-moss/10',
    emoji: '🤝',
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family Gathering',
    subtitle: 'Celebrate Together',
    desc: 'Rayakan momen kebersamaan bersama seluruh keluarga besar perusahaan dalam suasana hangat, meriah, dan penuh kenangan manis.',
    features: ['Kid-friendly activities', 'Gala dinner & entertainment', 'Lomba & doorprize', 'Photo booth & dokumentasi', 'Catering halal tersertifikasi'],
    color: 'bg-sun',
    light: 'bg-sun/15',
    emoji: '❤️',
  },
  {
    id: 'mice',
    icon: Presentation,
    title: 'MICE Event',
    subtitle: 'Meet & Excel',
    desc: 'Pengelolaan profesional untuk Meeting, Incentive, Conference, dan Exhibition skala kecil hingga besar dengan standar internasional.',
    features: ['Venue & AV equipment', 'Conference system setup', 'Simultaneous interpretation', 'Incentive trip planning', 'Exhibition management'],
    color: 'bg-forest-dark',
    light: 'bg-forest/10',
    emoji: '🎤',
  },
  {
    id: 'documentation',
    icon: Camera,
    title: 'Dokumentasi Event',
    subtitle: 'Capture Every Moment',
    desc: 'Layanan dokumentasi profesional dengan fotografer, videografer, dan editor berpengalaman. Dari foto candid hingga company highlight video.',
    features: ['Professional photographer', 'Cinematic videographer', 'Drone aerial footage', 'Same-day editing highlight', 'Full album delivery'],
    color: 'bg-earth-dark',
    light: 'bg-earth/10',
    emoji: '📸',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { icon: Icon } = service
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-2 gap-10 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}
    >
      {/* Visual */}
      <div className={`${service.light} rounded-3xl h-72 md:h-full min-h-[320px] flex items-center justify-center relative overflow-hidden group ${isReversed ? 'md:col-start-2' : ''}`}>
        <div className="text-8xl select-none group-hover:scale-110 transition-transform duration-500">{service.emoji}</div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent to-bark/10" />
      </div>

      {/* Text */}
      <div className={isReversed ? 'md:col-start-1' : ''}>
        <div className={`w-14 h-14 rounded-2xl ${service.color} text-cream flex items-center justify-center mb-5`}>
          <Icon size={26} />
        </div>
        <p className="text-earth/60 font-accent text-xl mb-2">{service.subtitle}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">{service.title}</h2>
        <p className="text-earth/80 leading-relaxed mb-6">{service.desc}</p>
        <ul className="space-y-2 mb-8">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-earth/80">
              <div className="w-5 h-5 rounded-full bg-forest/15 flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-forest" />
              </div>
              {f}
            </li>
          ))}
        </ul>
        <Link href="/booking" className="btn-primary">
          Inquiry Sekarang <ArrowRight size={17} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-cream">
      {/* Header */}
      <div className="container-tight text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="section-tag mb-4 inline-flex">🎯 Layanan</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-5">
            Semua Layanan <span className="gradient-text">Kami</span>
          </h1>
          <p className="text-earth/80 text-xl max-w-xl mx-auto">
            Solusi lengkap untuk setiap kebutuhan event perusahaan Anda, dari A sampai Z.
          </p>
        </motion.div>
      </div>

      {/* Services list */}
      <div className="container-wide space-y-24">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  )
}
