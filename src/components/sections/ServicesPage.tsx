'use client'
import { useRef } from 'react'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { BASE_SERVICES } from '@/lib/constants'

// Page-only fields — id/icon/title/badge come from BASE_SERVICES
const pageData = [
  { subtitle: 'Celebrate & Connect',   color: 'bg-sun',    light: 'bg-sun/15',     emoji: '🎉', desc: 'Program gathering perusahaan lengkap dengan penginapan, makan, aktivitas seru, dan hiburan. Tersedia dalam 3 paket (Silver, Gold, Platinum) mulai dari Rp 525.000/pax — semua sudah termasuk akomodasi 2D1N.', features: ['Penginapan 2D1N', '3x Meal & 2x Coffee Break', 'Aula, Lapangan & Kolam Renang', 'Fun Game & Game Master', 'Pilihan Rafting 11km / Paintball (Paket Gold & Platinum)', 'Team Building (Paket Platinum)', 'Bus PP tersedia (Paket Platinum)', 'Dokumentasi profesional'] },
  { subtitle: 'Recharge & Reconnect',  color: 'bg-forest', light: 'bg-forest/10',  emoji: '⛺', desc: 'Program wisata keluar kantor yang memadukan kesenangan, relaksasi, dan penguatan hubungan antar anggota tim. Pilihan destinasi lengkap — dari Lembang, Anyer, Bali, hingga Bromo.', features: ['Pilihan destinasi lengkap (Jawa, Bali, Lombok)', 'Akomodasi & transportasi terkoordinasi', 'Aktivitas: Rafting, Offroad, ATV, Body Rafting', 'Pemandu & fasilitator profesional', 'Catering & konsumsi terjamin', 'Dokumentasi foto & video'] },
  { subtitle: 'Challenge & Grow',      color: 'bg-earth',  light: 'bg-earth/10',   emoji: '🏔️', desc: 'Program pelatihan berbasis alam terbuka yang dirancang untuk meningkatkan kepemimpinan, komunikasi, dan teamwork melalui metode experiential learning yang terstruktur.', features: ['Fun Game (Rp 150.000/pax)', 'Team Building (Rp 175.000/pax)', 'Rafting 11km (Rp 250.000/pax)', 'Paintball & ATV (Rp 175.000/pax)', 'Trekking & Body Rafting', 'Game Master & Fasilitator bersertifikat', 'Durasi fleksibel (3 jam – full day)'] },
  { subtitle: 'Connect & Collaborate', color: 'bg-moss',   light: 'bg-moss/10',    emoji: '🤝', desc: 'Aktivitas indoor dan outdoor kreatif yang bisa diadaptasi di mana saja — dari kantor hingga resort. Fokus pada sinergi, komunikasi, dan kebersamaan tim.', features: ['Fun Game & Ice Breaking', 'Amazing Race & Games Kreatif', 'Bogor Aqua Game (Rp 125.000/pax)', 'Game Master & Fasilitator', 'Perlengkapan game lengkap', 'Mineral & Dokumentasi', 'Fleksibel indoor/outdoor'] },
  { subtitle: 'Celebrate Together',    color: 'bg-leaf',   light: 'bg-leaf/10',    emoji: '❤️', desc: 'Rayakan momen kebersamaan bersama seluruh keluarga besar perusahaan dalam suasana hangat, meriah, dan penuh kenangan manis untuk semua usia.', features: ['Aktivitas ramah anak hingga lansia', 'BBQ & Kambing Guling tersedia', 'Orgen Tunggal / Hiburan Live', 'Lomba & Doorprize menarik', 'Foto booth & dokumentasi', 'Catering halal tersertifikasi', 'Setup dekorasi & tenda'] },
  { subtitle: 'Meet & Excel',          color: 'bg-forest', light: 'bg-forest/10',  emoji: '🎤', desc: 'Paket meeting profesional dengan fasilitas lengkap. Halfday mulai Rp 225.000/pax dan Fullday mulai Rp 300.000/pax — sudah termasuk ruangan, konsumsi, dan dokumentasi.', features: ['Halfday Meeting (4 jam) – Rp 225.000/pax', 'Fullday Meeting (8 jam) – Rp 300.000/pax', 'Meeting Room & AV Equipment', '1-2x Lunch & Coffee Break', 'Dokumentasi profesional', 'Bisa dikombinasi dengan outbound'] },
  { subtitle: 'Capture Every Moment',  color: 'bg-earth',  light: 'bg-earth/10',   emoji: '📸', desc: 'Layanan dokumentasi profesional dengan fotografer, videografer, dan editor berpengalaman. Dari foto candid hingga cinematic highlight video.', features: ['Fotografer profesional', 'Videografer sinematik', 'Drone aerial footage', 'Same-day editing highlight', 'Full album digital delivery', 'Tersedia untuk semua paket'] },
]

const services = BASE_SERVICES.map((base, i) => ({ ...base, ...pageData[i] }))

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
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
      {/* Visual — emoji */}
      <div className={`${service.light} rounded-3xl h-72 md:h-full min-h-[320px] flex items-center justify-center relative overflow-hidden group ${isReversed ? 'md:col-start-2' : ''}`}>
        <div className="text-8xl select-none group-hover:scale-110 transition-transform duration-500">{service.emoji}</div>
        {service.badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-full bg-sun text-bark text-xs font-bold shadow-lg">⭐ {service.badge}</span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className={isReversed ? 'md:col-start-1' : ''}>
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-14 h-14 rounded-2xl ${service.color} text-cream flex items-center justify-center`}>
            <Icon size={26} />
          </div>
          {'badge' in service && service.badge && (
            <span className="px-3 py-1 rounded-full bg-sun text-bark text-xs font-bold tracking-wide">
              ⭐ {service.badge}
            </span>
          )}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-bark mb-4">{service.title}</h2>
        <h4 className="text-earth/50 text-sm font-semibold uppercase tracking-widest mb-4">{service.subtitle}</h4>
        <p className="text-earth/80 leading-relaxed mb-6">{service.desc}</p>
        <h5 className="text-bark font-semibold text-xs uppercase tracking-widest mb-3">Yang Sudah Termasuk:</h5>
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
        <h6 className="sr-only">Hubungi Sarau Luxury untuk layanan {service.title} — konsultasi gratis dalam 15 menit</h6>
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
