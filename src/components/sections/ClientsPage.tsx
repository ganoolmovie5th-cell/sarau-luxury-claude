'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TestimonialsSection from './TestimonialsSection'
import CtaSection from './CtaSection'

const clients = [
  'Bank BCA', 'Telkom Indonesia', 'Pertamina', 'Bank Mandiri',
  'Astra International', 'Gojek', 'Tokopedia', 'BRI',
  'Unilever', 'Indofood', 'Garuda Indonesia', 'PLN',
  'Bukalapak', 'Traveloka', 'OVO', 'BPJS Ketenagakerjaan',
  'Danone Indonesia', 'Nestle Indonesia', 'Maybank', 'CIMB Niaga',
  'Bank Permata', 'XL Axiata', 'Smartfren', 'Indocement',
  'Holcim Indonesia', 'Semen Gresik', 'Kalbe Farma', 'Kimia Farma',
  'Matahari Department Store', 'MAP Group', 'Lippo Group', 'Sinarmas',
]

const industries = [
  { label: 'Perbankan & Keuangan', count: 45 },
  { label: 'Teknologi & Startup',  count: 38 },
  { label: 'FMCG & Retail',        count: 32 },
  { label: 'Energi & Manufaktur',  count: 28 },
  { label: 'Telekomunikasi',       count: 22 },
  { label: 'Healthcare & Pharma',  count: 18 },
  { label: 'Property & Konstruksi',count: 15 },
  { label: 'Lainnya',              count: 12 },
]

export default function ClientsPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div>
      {/* Hero */}
      <div className="pt-36 pb-20 gradient-forest relative overflow-hidden noise-overlay">
        <div className="container-tight text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-leaf border border-leaf/20 font-accent text-lg mb-6">🤝 Klien Kami</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-5">
              200+ Perusahaan <span className="text-sun">Mempercayai</span> Kami
            </h1>
            <p className="text-cream/70 text-xl max-w-2xl mx-auto">
              Dari startup hingga BUMN, dari perusahaan lokal hingga multinasional —
              kami bangga menjadi mitra event pilihan berbagai perusahaan terbaik Indonesia.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry breakdown */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <span className="section-tag mb-4 inline-flex">📊 Industri</span>
            <h2 className="font-display text-4xl font-bold text-bark">Klien dari <span className="gradient-text">Berbagai Industri</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {industries.map(({ label, count }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-cream rounded-2xl p-5 text-center hover:shadow-forest/10 hover:shadow-lg transition-all"
              >
                <div className="font-display font-bold text-3xl text-forest mb-1">{count}+</div>
                <div className="text-earth/70 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>

          {/* Logos grid */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-bark">Beberapa <span className="gradient-text">Klien Terpercaya</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="h-16 bg-cream rounded-xl flex items-center justify-center px-3 border border-earth/10 hover:border-forest/30 hover:shadow-sm transition-all group"
              >
                <span className="text-earth/50 group-hover:text-forest font-semibold text-xs text-center leading-tight transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
