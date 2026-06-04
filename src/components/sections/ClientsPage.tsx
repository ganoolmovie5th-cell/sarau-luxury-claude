'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import TestimonialsSection from './TestimonialsSection'
import CtaSection from './CtaSection'

// ─── Logo helper — pakai URL langsung, fallback ke Logo.dev ──────────────────
const logodev = (domain: string) => `https://img.logo.dev/${domain}?token=pk_X3ZNBkRoREWZEXuuXf5C5Q&size=80&format=png`
const logo = (domain: string, url?: string) => url || logodev(domain)

// ─── Client data ──────────────────────────────────────────────────────────────
const clients = [
  // ── Hospitality ──
  { name: 'Hotel Mercure',           domain: 'mercure.com',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mercure_logo.svg/320px-Mercure_logo.svg.png',                 industry: 'Hospitality', color: '#003580' },
  { name: 'Grand Soll Marina Hotel', domain: 'sollmarinahotel.com',  logoUrl: undefined,                                                                                                                   industry: 'Hospitality', color: '#1b4332' },
  { name: 'Aloft Hotel',             domain: 'alofthotels.com',      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Aloft_Hotels_logo.svg/320px-Aloft_Hotels_logo.svg.png',         industry: 'Hospitality', color: '#e31837' },
  { name: 'Four Points Hotel',       domain: 'fourpoints.com',       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Four_Points_by_Sheraton_logo.svg/320px-Four_Points_by_Sheraton_logo.svg.png', industry: 'Hospitality', color: '#8b1a1a' },
  // ── Otomotif ──
  { name: 'PT. Hino Motors',                   domain: 'hino-global.com',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Hino_logo.svg/320px-Hino_logo.svg.png',              industry: 'Otomotif', color: '#CC0000' },
  { name: 'PT. Toyota Indonesia',              domain: 'toyota.co.id',       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/320px-Toyota_carlogo.svg.png',     industry: 'Otomotif', color: '#eb0a1e' },
  { name: 'PT. Indomobil Bussan Trucking',     domain: 'indomobil.co.id',    logoUrl: undefined,                                                                                                        industry: 'Otomotif', color: '#003087' },
  { name: 'PT. Asia Parts',                    domain: 'asiaparts.co.id',    logoUrl: undefined,                                                                                                        industry: 'Otomotif', color: '#c0392b' },
  // ── Manufaktur & Industri ──
  { name: 'PT. Nippon Steel',                  domain: 'nipponsteel.com',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nippon_Steel_logo.svg/320px-Nippon_Steel_logo.svg.png', industry: 'Manufaktur', color: '#1a1a2e' },
  { name: 'PT. Nippon Steel Chemical',         domain: 'nssmc.com',          logoUrl: undefined,                                                                                                        industry: 'Manufaktur', color: '#2c3e7a' },
  { name: 'PT. Clariant Indonesia',            domain: 'clariant.com',       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Clariant_logo.svg/320px-Clariant_logo.svg.png',       industry: 'Manufaktur', color: '#e2001a' },
  { name: 'PT. Modena Indonesia',              domain: 'modena.id',          logoUrl: undefined,                                                                                                        industry: 'Manufaktur', color: '#c0392b' },
  { name: 'PT. Escalier Indonesia',            domain: 'escalier.co.id',     logoUrl: undefined,                                                                                                        industry: 'Manufaktur', color: '#2980b9' },
  { name: 'PT. Trisakti Mekar Mandiri',        domain: 'trisakti.co.id',     logoUrl: undefined,                                                                                                        industry: 'Manufaktur', color: '#1a5276' },
  { name: 'PT. Mahawira Putra Teknik',         domain: 'mahawira.co.id',     logoUrl: undefined,                                                                                                        industry: 'Manufaktur', color: '#117a65' },
  { name: 'PT. Tata Mulia',                    domain: 'tatamulia.co.id',    logoUrl: undefined,                                                                                                        industry: 'Konstruksi', color: '#e67e22' },
  // ── Energi ──
  { name: 'PT. Adaro Energy',                  domain: 'adaro.com',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Adaro_Energy_logo.svg/320px-Adaro_Energy_logo.svg.png', industry: 'Energi', color: '#003366' },
  { name: 'PT. Sarana Energi Hutama',          domain: 'saranaenergi.co.id', logoUrl: undefined,                                                                                                        industry: 'Energi', color: '#e67e22' },
  // ── Teknologi & Elektronik ──
  { name: 'PT. Epson Indonesia',               domain: 'epson.co.id',        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epson_logo.svg/320px-Epson_logo.svg.png',             industry: 'Teknologi', color: '#00539f' },
  { name: 'PT. Fluid Science D',               domain: 'fluidscienced.com',  logoUrl: undefined,                                                                                                        industry: 'Teknologi', color: '#0077b6' },
  { name: 'PT. Sahabat Jaya Solusindo',        domain: 'sahabatjaya.co.id',  logoUrl: undefined,                                                                                                        industry: 'Teknologi', color: '#1abc9c' },
  // ── Keuangan & Perbankan ──
  { name: 'Bank BCA',                          domain: 'bca.co.id',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/320px-Bank_Central_Asia.svg.png',  industry: 'Keuangan', color: '#006cb7' },
  { name: 'Bank Mandiri',                      domain: 'bankmandiri.co.id',  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png', industry: 'Keuangan', color: '#003d79' },
  { name: 'Bank BNI',                          domain: 'bni.co.id',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_BNI.png/320px-Logo_BNI.png',                    industry: 'Keuangan', color: '#f77f00' },
  { name: 'MNC Bank',                          domain: 'mncbank.co.id',      logoUrl: undefined,                                                                                                        industry: 'Keuangan', color: '#e31837' },
  { name: 'PT. Lippo General Insurance',       domain: 'lippoinsurance.com', logoUrl: undefined,                                                                                                        industry: 'Keuangan', color: '#d4380d' },
  { name: 'Pegadaian',                         domain: 'pegadaian.co.id',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pegadaian_logo.svg/320px-Pegadaian_logo.svg.png',    industry: 'Keuangan', color: '#009444' },
  // ── Kecantikan & Retail ──
  { name: 'PT. Aulia Cosmetic Indonesia',      domain: 'auliacosmetic.com',  logoUrl: undefined,                                                                                                        industry: 'Kecantikan', color: '#e91e8c' },
  { name: 'Hugo Store',                        domain: 'hugoboss.com',       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hugo_Boss_logo.svg/320px-Hugo_Boss_logo.svg.png',    industry: 'Retail', color: '#1a1a1a' },
  { name: 'Vinno Jaya',                        domain: 'vinnojaya.co.id',    logoUrl: undefined,                                                                                                        industry: 'Retail', color: '#7b2d8b' },
  { name: 'Toko Mayham Perabot',               domain: 'mayham.co.id',       logoUrl: undefined,                                                                                                        industry: 'Retail', color: '#8b4513' },
  { name: 'Auly Chelly Fashion',               domain: 'aulychelly.com',     logoUrl: undefined,                                                                                                        industry: 'Fashion', color: '#ff69b4' },
  // ── F&B ──
  { name: 'Konnichiwa Group',                  domain: 'konichiwagroup.com', logoUrl: undefined,                                                                                                        industry: 'F&B', color: '#d62828' },
  // ── Distribusi & Logistik ──
  { name: 'PT. Primasid Andalan Utama',        domain: 'primasid.com',       logoUrl: undefined,                                                                                                        industry: 'Distribusi', color: '#ff6b35' },
  { name: 'PT. Asfindo Berkah Mandiri',        domain: 'asfindo.com',        logoUrl: undefined,                                                                                                        industry: 'Konstruksi', color: '#2d6a4f' },
  // ── Farmasi ──
  { name: 'PT. Kalbe Farma',                   domain: 'kalbe.co.id',        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kalbe_Farma_logo.svg/320px-Kalbe_Farma_logo.svg.png', industry: 'Farmasi', color: '#007bff' },
  // ── Kesehatan ──
  { name: 'RS. Siloam',                        domain: 'siloamhospitals.com',logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Siloam_Hospitals.svg/320px-Siloam_Hospitals.svg.png', industry: 'Kesehatan', color: '#005baa' },
  { name: 'Klinik Lab. Cakra Medika',          domain: 'cakramedika.co.id',  logoUrl: undefined,                                                                                                        industry: 'Kesehatan', color: '#e74c3c' },
  // ── Travel ──
  { name: 'Mas Travel',                        domain: 'mastravel.co.id',    logoUrl: undefined,                                                                                                        industry: 'Travel', color: '#16a085' },
  // ── Hukum & Pendidikan ──
  { name: 'Notaris Lola Pandeglang',           domain: 'notarislola.co.id',  logoUrl: undefined,                                                                                                        industry: 'Hukum', color: '#2c3e50' },
  { name: 'SDN Daya Bersama',                  domain: 'sdndayabersama.sch.id', logoUrl: undefined,                                                                                                     industry: 'Pendidikan', color: '#27ae60' },
]

const industries = [
  { label: 'Hospitality',  icon: '🏨' },
  { label: 'Otomotif',     icon: '🚗' },
  { label: 'Manufaktur',   icon: '🏭' },
  { label: 'Energi',       icon: '⚡' },
  { label: 'Teknologi',    icon: '💻' },
  { label: 'Keuangan',     icon: '🏦' },
  { label: 'Kecantikan',   icon: '✨' },
  { label: 'Retail',       icon: '🛍️' },
  { label: 'Fashion',      icon: '👗' },
  { label: 'F&B',          icon: '🍜' },
  { label: 'Distribusi',   icon: '📦' },
  { label: 'Konstruksi',   icon: '🏗️' },
  { label: 'Kesehatan',    icon: '🏥' },
  { label: 'Farmasi',      icon: '💊' },
  { label: 'Travel',       icon: '✈️' },
  { label: 'Hukum',        icon: '⚖️' },
  { label: 'Pendidikan',   icon: '🎓' },
]

// ─── Logo card ────────────────────────────────────────────────────────────────
function ClientCard({ client, i, inView }: {
  client: typeof clients[0]; i: number; inView: boolean
}) {
  const [imgError, setImgError] = useState(false)
  const src = client.logoUrl || logo(client.domain)

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
            src={src}
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
              { value: '41+', label: 'Klien Korporat', icon: '🏢' },
              { value: '17+', label: 'Industri Berbeda', icon: '🌐' },
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
