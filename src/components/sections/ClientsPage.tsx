'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import TestimonialsSection from './TestimonialsSection'
import CtaSection from './CtaSection'

// ─── Logo helper via Logo.dev (gratis, no auth) ───────────────────────────────
const logo = (domain: string) => `https://img.logo.dev/${domain}?token=pk_X3ZNBkRoREWZEXuuXf5C5Q&size=80&format=png`

// ─── Client data ──────────────────────────────────────────────────────────────
const clients = [
  {
    name: 'Hotel Mercure',
    domain: 'mercure.com',
    industry: 'Hospitality',
    color: '#003580',
  },
  {
    name: 'PT. Hino Motors',
    domain: 'hino-global.com',
    industry: 'Otomotif',
    color: '#CC0000',
  },
  {
    name: 'PT. Nippon Steel',
    domain: 'nipponsteel.com',
    industry: 'Manufaktur',
    color: '#1a1a2e',
  },
  {
    name: 'PT. Aulia Cosmetic Indonesia',
    domain: 'auliacosmetic.com',
    industry: 'Kecantikan',
    color: '#e91e8c',
  },
  {
    name: 'PT. Adaro Energy',
    domain: 'adaro.com',
    industry: 'Energi',
    color: '#003366',
  },
  {
    name: 'Konichiwa Group',
    domain: 'konichiwagroup.com',
    industry: 'Food & Beverage',
    color: '#d62828',
  },
  {
    name: 'PT. Fluid Science D',
    domain: 'fluidscienced.com',
    industry: 'Sains & Teknologi',
    color: '#0077b6',
  },
  {
    name: 'Grand Soll Marina Hotel',
    domain: 'sollmarinahotel.com',
    industry: 'Hospitality',
    color: '#1b4332',
  },
  {
    name: 'PT. Primasid Andalan Utama',
    domain: 'primasid.com',
    industry: 'Distribusi',
    color: '#ff6b35',
  },
  {
    name: 'PT. Asfindo Berkah Mandiri',
    domain: 'asfindo.com',
    industry: 'Konstruksi',
    color: '#2d6a4f',
  },
  {
    name: 'PT. Epson Indonesia',
    domain: 'epson.co.id',
    industry: 'Teknologi',
    color: '#00539f',
  },
]

const industries = [
  { label: 'Hospitality', icon: '🏨' },
  { label: 'Otomotif', icon: '🚗' },
  { label: 'Manufaktur', icon: '🏭' },
  { label: 'Energi', icon: '⚡' },
  { label: 'Teknologi', icon: '💻' },
  { label: 'Food & Beverage', icon: '🍜' },
  { label: 'Konstruksi', icon: '🏗️' },
  { label: 'Kecantikan', icon: '✨' },
]

// ─── Logo card ────────────────────────────────────────────────────────────────
function ClientCard({ client, i, inView }: {
  client: typeof clients[0]; i: number; inView: boolean
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="bg-white rounded-2xl border border-earth/10 p-5 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:shadow-forest/10 hover:-translate-y-1 hover:border-forest/20 transition-all duration-300 group min-h-[140px]"
    >
      {/* Logo or initials */}
      <div className="w-16 h-16 relative flex items-center justify-center flex-shrink-0">
        {!imgError ? (
          <Image
            src={logo(client.domain)}
            alt={`Logo ${client.name}`}
            fill
            className="object-contain"
            sizes="64px"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback: initial letters dalam warna brand */
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg"
            style={{ backgroundColor: client.color }}
          >
            {client.name.replace(/^PT\.\s*/i, '').trim().slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Name & industry */}
      <div className="text-center">
        <div className="font-semibold text-bark text-sm leading-tight mb-1.5 group-hover:text-forest transition-colors">
          {client.name}
        </div>
        <span
          className="text-xs px-2.5 py-0.5 rounded-full font-medium"
          style={{ backgroundColor: `${client.color}18`, color: client.color }}
        >
          {client.industry}
        </span>
      </div>
    </motion.div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ClientsPage() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <div>
      {/* Hero */}
      <div className="pt-36 pb-20 gradient-forest relative overflow-hidden noise-overlay">
        <div className="container-tight text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-leaf border border-leaf/20 font-accent text-lg mb-6">
              🤝 Klien Kami
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-5">
              Dipercaya oleh{' '}
              <span className="text-sun">Perusahaan Terbaik</span>
            </h1>
            <p className="text-cream/70 text-xl max-w-2xl mx-auto">
              Dari hotel berbintang, perusahaan manufaktur Jepang, hingga perusahaan energi nasional
              — kami bangga menjadi mitra event pilihan berbagai perusahaan terkemuka.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry tags */}
      <section className="py-10 bg-white border-b border-earth/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-earth/15 text-earth/80 text-sm font-medium"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients grid */}
      <section ref={ref} className="section-padding bg-cream">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag mb-4 inline-flex">⭐ Klien Terpercaya</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Mereka yang{' '}
              <span className="gradient-text">Mempercayai Kami</span>
            </h2>
            <p className="mt-4 text-earth/60 max-w-xl mx-auto">
              Perusahaan-perusahaan terkemuka yang telah merasakan pengalaman terbaik bersama Sarau Luxury.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {clients.map((client, i) => (
              <ClientCard key={client.name} client={client} i={i} inView={inView} />
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {[
              { value: '11+', label: 'Klien Korporat', icon: '🏢' },
              { value: '5+',  label: 'Industri Berbeda', icon: '🌐' },
              { value: '100+', label: 'Event Sukses', icon: '🎉' },
              { value: '5.0', label: 'Rating Google', icon: '⭐' },
            ].map(({ value, label, icon }) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center border border-earth/10 shadow-sm">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-display font-bold text-3xl text-forest mb-1">{value}</div>
                <div className="text-earth/60 text-sm">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
