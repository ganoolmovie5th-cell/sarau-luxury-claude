'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const logo = (domain: string) => `https://img.logo.dev/${domain}?token=pk_X3ZNBkRoREWZEXuuXf5C5Q&size=80&format=png`

const clients = [
  { name: 'Hotel Mercure',              domain: 'mercure.com',        color: '#003580' },
  { name: 'PT. Hino Motors',            domain: 'hino-global.com',    color: '#CC0000' },
  { name: 'PT. Nippon Steel',           domain: 'nipponsteel.com',    color: '#1a1a2e' },
  { name: 'PT. Aulia Cosmetic',         domain: 'auliacosmetic.com',  color: '#e91e8c' },
  { name: 'PT. Adaro Energy',           domain: 'adaro.com',          color: '#003366' },
  { name: 'Konichiwa Group',            domain: 'konichiwagroup.com', color: '#d62828' },
  { name: 'PT. Fluid Science D',        domain: 'fluidscienced.com',  color: '#0077b6' },
  { name: 'Grand Soll Marina Hotel',    domain: 'sollmarinahotel.com',color: '#1b4332' },
  { name: 'PT. Primasid Andalan Utama', domain: 'primasid.com',       color: '#ff6b35' },
  { name: 'PT. Asfindo Berkah Mandiri', domain: 'asfindo.com',        color: '#2d6a4f' },
  { name: 'PT. Epson Indonesia',        domain: 'epson.co.id',        color: '#00539f' },
]

function LogoCard({ name, domain, color }: { name: string; domain: string; color: string }) {
  const [imgError, setImgError] = useState(false)
  const initials = name.replace(/^PT\.\s*/i, '').trim().slice(0, 2).toUpperCase()

  return (
    <div className="flex-shrink-0 flex items-center gap-3 h-16 px-5 bg-white rounded-2xl shadow-sm border border-earth/10 hover:border-forest/30 hover:shadow-forest/10 hover:shadow-lg transition-all duration-300 group">
      <div className="w-8 h-8 relative flex-shrink-0 flex items-center justify-center">
        {!imgError ? (
          <Image
            src={logo(domain)}
            alt={name}
            fill
            className="object-contain"
            sizes="32px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
        )}
      </div>
      <span className="font-semibold text-earth/60 group-hover:text-forest transition-colors text-sm whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function ClientsMarquee() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      <div className="container-wide mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag mb-4 inline-flex">🤝 Klien Kami</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark">
            Dipercaya oleh{' '}
            <span className="gradient-text">Perusahaan Terkemuka</span>
          </h2>
          <p className="text-earth/70 mt-3 text-base">dari berbagai industri di Indonesia</p>
        </motion.div>
      </div>

      {/* Marquee track 1 */}
      <div className="relative mb-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
        <div className="flex gap-4 w-max animate-marquee">
          {[...clients, ...clients].map((c, i) => (
            <LogoCard key={`${c.name}-${i}`} {...c} />
          ))}
        </div>
      </div>

      {/* Marquee track 2 reverse */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
        <div className="flex gap-4 w-max animate-marquee2">
          {[...clients.slice(5), ...clients.slice(0, 5), ...clients.slice(5), ...clients.slice(0, 5)].map((c, i) => (
            <LogoCard key={`rev-${c.name}-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
