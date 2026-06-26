'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  { name: 'Bank BCA',                      domain: 'bca.co.id',                color: '#006cb7' },
  { name: 'Hotel Mercure',                 domain: 'mercure.com',              color: '#003580' },
  { name: 'Hino Motors Indonesia',         domain: 'hino.co.id',               color: '#CC0000' },
  { name: 'Nippon Steel',                  domain: 'nippon-steel.com',         color: '#1a1a2e' },
  { name: 'Aulia Cosmetic',                domain: 'auliacosmetic.com',        color: '#b5006e' },
  { name: 'Adaro Energy Indonesia',        domain: 'adaro.co.id',              color: '#003366' },
  { name: 'Konnichiwa',                    domain: 'konnichiwa.co.id',         color: '#d62828' },
  { name: 'Epson Indonesia',               domain: 'epson.co.id',              color: '#00539f' },
  { name: 'Grand Soll Marina Hotel',       domain: 'sollmarinahotel.com',      color: '#0d2b20' },
  { name: 'Park Hyatt Jakarta',            domain: 'hyatt.com',                color: '#8b6914' },
  { name: 'Primasid Andalan Utama',        domain: 'primasid.com',             color: '#c44a15' },
  { name: 'Asfindo Berkah Mandiri',        domain: 'asfindo.com',              color: '#2d6a4f' },
  { name: 'Aloft Hotel',                   domain: 'alofthotels.com',          color: '#e31837' },
  { name: 'Four Points Hotel',             domain: 'fourpoints.com',           color: '#8b1a1a' },
  { name: 'Astra',                         domain: 'astra.co.id',              color: '#eb0a1e' },
  { name: 'Toyota',                        domain: 'toyota.co.id',             color: '#eb0a1e' },
  { name: 'Modena',                        domain: 'modena.com',               color: '#c0392b' },
  { name: 'Escalier Interior',             domain: 'escalierinterior.com',     color: '#1a5fa0' },
  { name: 'Pegadaian',                     domain: 'pegadaian.co.id',          color: '#00703a' },
  { name: 'Siloam Hospitals',              domain: 'siloamhospitals.com',      color: '#005baa' },
  { name: 'MNC Bank',                      domain: 'mncbank.co.id',            color: '#e31837' },
  { name: 'Clariant Indonesia',            domain: 'clariant.com',             color: '#e2001a' },
  { name: 'Lippo General Insurance',       domain: 'lippoinsurance.com',       color: '#d4380d' },
  { name: 'Hugo Store',                    domain: 'hugoboss.com',             color: '#1a1a1a' },
  { name: 'Indopenske',                    domain: 'indopenske.co.id',         color: '#003087' },
  { name: 'Sahabat Solusindo',             domain: 'sahabatsolusindo.com',     color: '#0e8a6e' },
  { name: 'Trisakti Mekar Mandiri',        domain: 'trisakti.co.id',           color: '#1a5276' },
  { name: 'Mahawira Putra Teknik',         domain: 'mahawira.co.id',           color: '#117a65' },
  { name: 'Sarana Energi Investama',       domain: 'saranaenergi.co.id',       color: '#e67e22' },
  { name: 'Vinno Jaya',                    domain: 'vinnojaya.co.id',          color: '#7b2d8b' },
  { name: 'SDN Daya Bersama',              domain: 'sdndayabersama.sch.id',    color: '#27ae60' },
  { name: 'Fluid Science Dynamics',        domain: 'fluidsciencedynamics.com', color: '#0077b6' },
  { name: 'Bank Mandiri',                  domain: 'bankmandiri.co.id',        color: '#003d79' },
  { name: 'Bank BNI',                      domain: 'bni.co.id',                color: '#f77f00' },
  { name: 'Kalbe Farma',                   domain: 'kalbe.co.id',              color: '#007bff' },
  { name: 'Mayham Perabot',                domain: 'mayham.co.id',             color: '#8b4513' },
  { name: 'Auly',                          domain: 'aulychelly.com',           color: '#ff69b4' },
  { name: 'Cakra Medika',                  domain: 'cakramedika.co.id',        color: '#e74c3c' },
  { name: 'Tata Mulia',                    domain: 'tatamulia.co.id',          color: '#e67e22' },
  { name: 'Mas Travel',                    domain: 'mastravel.co.id',          color: '#16a085' },
  { name: 'Asia Part Indotech',            domain: 'asiapartindotech.com',     color: '#c0392b' },
  { name: 'Notaris Lola Pandeglang',       domain: 'notarislola.co.id',        color: '#2c3e50' },
  { name: 'Tiara Kasih Christian School',  domain: 'tiarakasih.sch.id',        color: '#b5720a' },
  { name: 'GKI Cinere',                    domain: 'gkicinere.org',            color: '#8e44ad' },
  { name: 'Visiotek Global Indonesia',     domain: 'visiotek.co.id',           color: '#2471a3' },
  { name: 'Tak Prime',                     domain: 'takprime.co.id',           color: '#1a252f' },
  { name: 'TAF',                           domain: 'taf.co.id',                color: '#eb0a1e' },
  { name: 'Intertrans Global Logistics',   domain: 'intertrans.co.id',         color: '#1f618d' },
  { name: 'Gurita Lintas Samudera',        domain: 'guritals.co.id',           color: '#117a65' },
  { name: 'Bogasari',                      domain: 'bogasari.com',             color: '#a85a10' },
  { name: 'Bank CIMB Niaga',               domain: 'cimbniaga.co.id',          color: '#d4001a' },
  { name: 'MAP',                           domain: 'mapactive.com',            color: '#c0392b' },
  { name: 'SMT',                           domain: 'serpongmas.co.id',         color: '#0a6b5a' },
]

function LogoCard({ name, domain, color }: { name: string; domain: string; color: string }) {
  const [logoErr, setLogoErr] = useState(false)
  const initials = name.replace(/^(PT\.|Bank|RS\.)\s*/i, '').trim().slice(0, 2).toUpperCase()

  return (
    <div className="flex-shrink-0 flex items-center gap-3 h-16 px-5 bg-white rounded-2xl shadow-sm border border-earth/10 hover:border-forest/30 hover:shadow-forest/10 hover:shadow-lg transition duration-300 group">
      {logoErr ? (
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
      ) : (
        <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0 border border-earth/10 p-0.5">
          <Image
            src={`/api/logo/${domain}`}
            alt={`${name} logo`}
            width={32}
            height={32}
            unoptimized
            className="object-contain w-full h-full"
            onError={() => setLogoErr(true)}
          />
        </div>
      )}
      <span className="font-semibold text-bark group-hover:text-forest transition-colors text-sm whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function ClientsMarquee() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true, initialInView: true })

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
