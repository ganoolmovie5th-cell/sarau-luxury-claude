'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const logo = (domain: string) => `https://cdn.brandfetch.io/${domain}/w/128/h/128/logo?c=1idxFGPkb7rQ0O7bwbG`

const clients = [
  { name: 'Bank BCA',                      domain: 'bca.co.id',             color: '#006cb7' },
  { name: 'Hotel Mercure',                 domain: 'mercure.com',           color: '#003580' },
  { name: 'PT. Hino Motors',               domain: 'hino-global.com',       color: '#CC0000' },
  { name: 'PT. Nippon Steel',              domain: 'nipponsteel.com',       color: '#1a1a2e' },
  { name: 'PT. Aulia Cosmetic',            domain: 'auliacosmetic.com',     color: '#e91e8c' },
  { name: 'PT. Adaro Energy',              domain: 'adaro.com',             color: '#003366' },
  { name: 'Konnichiwa Group',              domain: 'konichiwagroup.com',    color: '#d62828' },
  { name: 'PT. Epson Indonesia',           domain: 'epson.co.id',           color: '#00539f' },
  { name: 'Grand Soll Marina Hotel',       domain: 'sollmarinahotel.com',   color: '#1b4332' },
  { name: 'Park Hyatt Jakarta',            domain: 'hyatt.com',             color: '#8b6914' },
  { name: 'PT. Primasid Andalan Utama',    domain: 'primasid.com',          color: '#ff6b35' },
  { name: 'PT. Asfindo Berkah Mandiri',    domain: 'asfindo.com',           color: '#2d6a4f' },
  { name: 'Aloft Hotel',                   domain: 'alofthotels.com',       color: '#e31837' },
  { name: 'Four Points Hotel',             domain: 'fourpoints.com',        color: '#8b1a1a' },
  { name: 'PT. Toyota Indonesia',          domain: 'toyota.astra.co.id',    color: '#eb0a1e' },
  { name: 'PT. Modena Indonesia',          domain: 'modena.id',             color: '#c0392b' },
  { name: 'PT. Escalier Indonesia',        domain: 'escalier.co.id',        color: '#2980b9' },
  { name: 'Pegadaian',                     domain: 'pegadaian.co.id',       color: '#009444' },
  { name: 'RS. Siloam',                    domain: 'siloamhospitals.com',   color: '#005baa' },
  { name: 'MNC Bank',                      domain: 'mncbank.co.id',         color: '#e31837' },
  { name: 'PT. Clariant Indonesia',        domain: 'clariant.com',          color: '#e2001a' },
  { name: 'PT. Lippo General Insurance',   domain: 'lippoinsurance.com',    color: '#d4380d' },
  { name: 'Hugo Store',                    domain: 'hugoboss.com',          color: '#1a1a1a' },
  { name: 'PT. Nippon Steel Chemical',     domain: 'nssmc.com',             color: '#2c3e7a' },
  { name: 'PT. Indomobil Bussan Trucking', domain: 'indomobil.co.id',       color: '#003087' },
  { name: 'PT. Sahabat Jaya Solusindo',    domain: 'sahabatjaya.co.id',     color: '#1abc9c' },
  { name: 'PT. Trisakti Mekar Mandiri',    domain: 'trisakti.co.id',        color: '#1a5276' },
  { name: 'PT. Mahawira Putra Teknik',     domain: 'mahawira.co.id',        color: '#117a65' },
  { name: 'PT. Sarana Energi Hutama',      domain: 'saranaenergi.co.id',    color: '#e67e22' },
  { name: 'Vinno Jaya',                    domain: 'vinnojaya.co.id',       color: '#7b2d8b' },
  { name: 'SDN Daya Bersama',              domain: 'sdndayabersama.sch.id', color: '#27ae60' },
  { name: 'PT. Fluid Science D',           domain: 'fluidscienced.com',     color: '#0077b6' },
  // Klien baru
  { name: 'Bank Mandiri',                  domain: 'bankmandiri.co.id',     color: '#003d79' },
  { name: 'Bank BNI',                      domain: 'bni.co.id',             color: '#f77f00' },
  { name: 'PT. Kalbe Farma',               domain: 'kalbe.co.id',           color: '#007bff' },
  { name: 'Toko Mayham Perabot',           domain: 'mayham.co.id',          color: '#8b4513' },
  { name: 'Auly Chelly Fashion',           domain: 'aulychelly.com',        color: '#ff69b4' },
  { name: 'Klinik Lab. Cakra Medika',      domain: 'cakramedika.co.id',     color: '#e74c3c' },
  { name: 'PT. Tata Mulia',               domain: 'tatamulia.co.id',       color: '#e67e22' },
  { name: 'Mas Travel',                    domain: 'mastravel.co.id',       color: '#16a085' },
  { name: 'PT. Asia Parts',               domain: 'asiaparts.co.id',       color: '#c0392b' },
  { name: 'Notaris Lola Pandeglang',       domain: 'notarislola.co.id',     color: '#2c3e50' },
]

function LogoCard({ name, color }: { name: string; domain: string; color: string }) {
  const initials = name.replace(/^(PT\.|Bank|RS\.)\s*/i, '').trim().slice(0, 2).toUpperCase()

  return (
    <div className="flex-shrink-0 flex items-center gap-3 h-16 px-5 bg-white rounded-2xl shadow-sm border border-earth/10 hover:border-forest/30 hover:shadow-forest/10 hover:shadow-lg transition-all duration-300 group">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
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
