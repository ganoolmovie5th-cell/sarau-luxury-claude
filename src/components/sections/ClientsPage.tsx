'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TestimonialsSection from './TestimonialsSection'
import CtaSection from './CtaSection'

// ─── Client data ──────────────────────────────────────────────────────────────
const clients = [
  // ── Hospitality ──
  { name: 'Hotel Mercure',                 domain: 'mercure.com',            industry: 'Hospitality', color: '#003580' },
  { name: 'Grand Soll Marina Hotel',       domain: 'sollmarinahotel.com',    industry: 'Hospitality', color: '#1b4332' },
  { name: 'Park Hyatt Jakarta',            domain: 'hyatt.com',              industry: 'Hospitality', color: '#8b6914' },
  { name: 'Aloft Hotel',                   domain: 'alofthotels.com',        industry: 'Hospitality', color: '#e31837' },
  { name: 'Four Points Hotel',             domain: 'fourpoints.com',         industry: 'Hospitality', color: '#8b1a1a' },
  // ── Otomotif ──
  { name: 'PT. Hino Motors',               domain: 'hino.co.id',             industry: 'Otomotif', color: '#CC0000' },
  { name: 'PT. Toyota Indonesia',          domain: 'toyota.astra.co.id',     industry: 'Otomotif', color: '#eb0a1e' },
  { name: 'PT. Indomobil Bussan Trucking', domain: 'indomobil.co.id',        industry: 'Otomotif', color: '#003087' },
  { name: 'PT. Asia Parts',               domain: 'asiaparts.co.id',         industry: 'Otomotif', color: '#c0392b' },
  // ── Manufaktur ──
  { name: 'PT. Nippon Steel',              domain: 'nipponsteel.com',        industry: 'Manufaktur', color: '#1a1a2e' },
  { name: 'PT. Nippon Steel Chemical',     domain: 'nssmc.com',              industry: 'Manufaktur', color: '#2c3e7a' },
  { name: 'PT. Clariant Indonesia',        domain: 'clariant.com',           industry: 'Manufaktur', color: '#e2001a' },
  { name: 'PT. Modena Indonesia',          domain: 'modena.id',              industry: 'Manufaktur', color: '#c0392b' },
  { name: 'PT. Escalier Indonesia',        domain: 'escalier.co.id',         industry: 'Manufaktur', color: '#2980b9' },
  { name: 'PT. Trisakti Mekar Mandiri',    domain: 'trisakti.co.id',         industry: 'Manufaktur', color: '#1a5276' },
  { name: 'PT. Mahawira Putra Teknik',     domain: 'mahawira.co.id',         industry: 'Manufaktur', color: '#117a65' },
  { name: 'PT. Tata Mulia',               domain: 'tatamulia.co.id',         industry: 'Konstruksi', color: '#e67e22' },
  // ── Energi ──
  { name: 'PT. Adaro Energy',              domain: 'adaro.com',              industry: 'Energi', color: '#003366' },
  { name: 'PT. Sarana Energi Hutama',      domain: 'saranaenergi.co.id',     industry: 'Energi', color: '#e67e22' },
  // ── Teknologi ──
  { name: 'PT. Epson Indonesia',           domain: 'epson.co.id',            industry: 'Teknologi', color: '#00539f' },
  { name: 'PT. Fluid Science D',           domain: 'fluidscienced.com',      industry: 'Teknologi', color: '#0077b6' },
  { name: 'PT. Sahabat Jaya Solusindo',    domain: 'sahabatjaya.co.id',      industry: 'Teknologi', color: '#1abc9c' },
  // ── Keuangan ──
  { name: 'Bank BCA',                      domain: 'bca.co.id',              industry: 'Keuangan', color: '#006cb7' },
  { name: 'Bank Mandiri',                  domain: 'bankmandiri.co.id',      industry: 'Keuangan', color: '#003d79' },
  { name: 'Bank BNI',                      domain: 'bni.co.id',              industry: 'Keuangan', color: '#f77f00' },
  { name: 'MNC Bank',                      domain: 'mncbank.co.id',          industry: 'Keuangan', color: '#e31837' },
  { name: 'PT. Lippo General Insurance',   domain: 'lippoinsurance.com',     industry: 'Keuangan', color: '#d4380d' },
  { name: 'Pegadaian',                     domain: 'pegadaian.co.id',        industry: 'Keuangan', color: '#009444' },
  // ── Kecantikan & Retail ──
  { name: 'PT. Aulia Cosmetic Indonesia',  domain: 'auliacosmetic.com',      industry: 'Kecantikan', color: '#e91e8c' },
  { name: 'Hugo Store',                    domain: 'hugoboss.com',           industry: 'Retail', color: '#1a1a1a' },
  { name: 'Vinno Jaya',                    domain: 'vinnojaya.co.id',        industry: 'Retail', color: '#7b2d8b' },
  { name: 'Toko Mayham Perabot',           domain: 'mayham.co.id',           industry: 'Retail', color: '#8b4513' },
  { name: 'Auly Chelly Fashion',           domain: 'aulychelly.com',         industry: 'Fashion', color: '#ff69b4' },
  // ── F&B ──
  { name: 'Konnichiwa Group',              domain: 'konichiwagroup.com',     industry: 'F&B', color: '#d62828' },
  // ── Distribusi & Konstruksi ──
  { name: 'PT. Primasid Andalan Utama',    domain: 'primasid.com',           industry: 'Distribusi', color: '#ff6b35' },
  { name: 'PT. Asfindo Berkah Mandiri',    domain: 'asfindo.com',            industry: 'Konstruksi', color: '#2d6a4f' },
  // ── Farmasi ──
  { name: 'PT. Kalbe Farma',               domain: 'kalbe.co.id',            industry: 'Farmasi', color: '#007bff' },
  // ── Kesehatan ──
  { name: 'RS. Siloam',                    domain: 'siloamhospitals.com',    industry: 'Kesehatan', color: '#005baa' },
  { name: 'Klinik Lab. Cakra Medika',      domain: 'cakramedika.co.id',      industry: 'Kesehatan', color: '#e74c3c' },
  // ── Travel ──
  { name: 'Mas Travel',                    domain: 'mastravel.co.id',        industry: 'Travel', color: '#16a085' },
  // ── Hukum & Pendidikan ──
  { name: 'Notaris Lola Pandeglang',       domain: 'notarislola.co.id',      industry: 'Hukum', color: '#2c3e50' },
  { name: 'SDN Daya Bersama',              domain: 'sdndayabersama.sch.id',  industry: 'Pendidikan', color: '#27ae60' },
  { name: 'Sekolah Tiara Kasih',           domain: 'tiarakasih.sch.id',      industry: 'Pendidikan', color: '#f39c12' },
  { name: 'GKI Cinere',                    domain: 'gkicinere.org',           industry: 'Komunitas', color: '#8e44ad' },
  // ── Teknologi Baru ──
  { name: 'PT. Visiotek Global',           domain: 'visiotek.co.id',          industry: 'Teknologi', color: '#2471a3' },
  { name: 'Tak Prime',                     domain: 'takprime.co.id',          industry: 'Teknologi', color: '#1a252f' },
  { name: 'PT. Serpong Mas Telematika',    domain: 'serpongmas.co.id',        industry: 'Teknologi', color: '#148f77' },
  // ── Otomotif & Keuangan Baru ──
  { name: 'Toyota Astra Finance',          domain: 'toyotafinance.co.id',     industry: 'Keuangan', color: '#eb0a1e' },
  { name: 'Bank CIMB Niaga',               domain: 'cimbniaga.co.id',         industry: 'Keuangan', color: '#d4001a' },
  { name: 'Mitra Adi Perkasa',             domain: 'map.co.id',               industry: 'Retail', color: '#c0392b' },
  // ── Logistik & Industri ──
  { name: 'PT. Intertrans Global Logistics', domain: 'intertrans.co.id',      industry: 'Logistik', color: '#1f618d' },
  { name: 'PT. Gurita Lintas Samudera',    domain: 'guritals.co.id',          industry: 'Logistik', color: '#117a65' },
  { name: 'PT. Bogasari',                  domain: 'bogasari.com',            industry: 'Manufaktur', color: '#ca6f1e' },
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
  { label: 'Logistik',     icon: '🚢' },
  { label: 'Konstruksi',   icon: '🏗️' },
  { label: 'Kesehatan',    icon: '🏥' },
  { label: 'Farmasi',      icon: '💊' },
  { label: 'Travel',       icon: '✈️' },
  { label: 'Hukum',        icon: '⚖️' },
  { label: 'Pendidikan',   icon: '🎓' },
  { label: 'Komunitas',    icon: '🙏' },
]

// ─── Logo card ────────────────────────────────────────────────────────────────
function ClientCard({ client, i, inView }: {
  client: typeof clients[0]; i: number; inView: boolean
}) {
  const initials = client.name.replace(/^(PT\.|Bank|RS\.)\s*/i, '').trim().slice(0, 2).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="bg-white rounded-2xl border border-earth/10 p-5 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:shadow-forest/10 hover:-translate-y-1 hover:border-forest/20 transition-all duration-300 group min-h-[140px]"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0 shadow-sm"
        style={{ backgroundColor: client.color }}
      >
        {initials}
      </div>
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
              { value: '53+', label: 'Klien Korporat', icon: '🏢' },
              { value: '19+', label: 'Industri Berbeda', icon: '🌐' },
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
