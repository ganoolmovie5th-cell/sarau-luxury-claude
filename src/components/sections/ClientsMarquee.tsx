'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Placeholder client list — replace with real logos via Sanity
const clients = [
  'Bank BCA', 'Telkom Indonesia', 'Pertamina', 'Bank Mandiri',
  'Astra International', 'Gojek', 'Tokopedia', 'BRI',
  'Unilever', 'Indofood', 'Garuda Indonesia', 'PLN',
  'Bukalapak', 'Traveloka', 'OVO', 'BPJS Ketenagakerjaan',
]

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-2xl shadow-sm border border-earth/10 hover:border-forest/30 hover:shadow-forest/10 hover:shadow-lg transition-all duration-300 group">
      <span className="font-display font-semibold text-earth/50 group-hover:text-forest transition-colors text-sm whitespace-nowrap">
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
            <span className="gradient-text">200+ Perusahaan</span>
          </h2>
          <p className="text-earth/70 mt-3 text-base">dari berbagai industri di Indonesia</p>
        </motion.div>
      </div>

      {/* Marquee track 1 */}
      <div className="relative mb-4 overflow-hidden">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee">
          {[...clients, ...clients].map((name, i) => (
            <LogoCard key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee track 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee2">
          {[...clients.slice(8), ...clients.slice(0, 8), ...clients.slice(8), ...clients.slice(0, 8)].map((name, i) => (
            <LogoCard key={`rev-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
