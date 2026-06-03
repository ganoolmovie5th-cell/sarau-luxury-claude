'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, ArrowRight, Zap, Crown, Leaf } from 'lucide-react'

const packages = [
  {
    icon: Leaf,
    name: 'Starter',
    tagline: 'Cocok untuk tim kecil',
    price: '15',
    unit: 'juta / event',
    minPax: '20–50 pax',
    color: 'from-leaf/30 to-cream border-leaf/30',
    btnClass: 'btn-secondary',
    features: [
      '1 hari program',
      'Maks. 50 peserta',
      '3 aktivitas pilihan',
      'Snack & makan siang',
      'Dokumentasi foto',
      'MC & fasilitator',
    ],
    popular: false,
  },
  {
    icon: Zap,
    name: 'Professional',
    tagline: 'Paling banyak dipilih',
    price: '35',
    unit: 'juta / event',
    minPax: '50–150 pax',
    color: 'from-forest to-forest-dark border-transparent',
    btnClass: 'btn-sun',
    features: [
      '2 hari 1 malam',
      'Maks. 150 peserta',
      '6 aktivitas pilihan',
      'Full board (3x makan)',
      'Dokumentasi foto & video',
      'MC, fasilitator & tim',
      'Merchandise peserta',
      'Sertifikat digital',
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: 'Luxury',
    tagline: 'Pengalaman premium eksklusif',
    price: 'Custom',
    unit: 'hubungi kami',
    minPax: '150+ pax',
    color: 'from-earth/20 to-cream border-earth/30',
    btnClass: 'btn-primary',
    features: [
      'Durasi custom',
      'Peserta tak terbatas',
      'Program fully custom',
      'Venue eksklusif',
      'Full dokumentasi premium',
      'Personal event manager',
      'Gala dinner setup',
      'Entertainment & live music',
      'Semua inklusif',
    ],
    popular: false,
  },
]

export default function PackagesPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-cream/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #95D5B2 0%, transparent 45%)' }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">💼 Paket Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-5">
            Pilih Paket yang{' '}
            <span className="gradient-text">Tepat</span> untuk Tim Anda
          </h2>
          <p className="text-earth/80 text-lg max-w-xl mx-auto">
            Semua paket sudah termasuk perencanaan, pelaksanaan, dan evaluasi — tinggal hadir dan nikmati!
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          {packages.map(({ icon: Icon, name, tagline, price, unit, minPax, color, btnClass, features, popular }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl border overflow-hidden bg-gradient-to-b ${color} ${popular ? 'shadow-forest shadow-2xl scale-[1.03] md:scale-105' : 'shadow-sm'}`}
            >
              {popular && (
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-sun text-bark text-xs font-bold tracking-widest uppercase">
                  ⭐ Paling Populer
                </div>
              )}
              <div className={`p-8 ${popular ? 'pt-12' : ''}`}>
                {/* Icon + name */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${popular ? 'bg-white/20' : 'bg-forest/10'}`}>
                  <Icon size={24} className={popular ? 'text-sun' : 'text-forest'} />
                </div>
                <div className={`font-display font-bold text-2xl mb-1 ${popular ? 'text-cream' : 'text-bark'}`}>{name}</div>
                <div className={`text-sm mb-6 ${popular ? 'text-cream/70' : 'text-earth/70'}`}>{tagline}</div>

                {/* Price */}
                <div className="mb-2">
                  <span className={`font-display font-bold text-4xl ${popular ? 'text-cream' : 'text-bark'}`}>
                    {price === 'Custom' ? '' : 'Rp '}
                  </span>
                  <span className={`font-display font-bold text-4xl ${popular ? 'text-sun' : 'text-forest'}`}>{price}</span>
                </div>
                <div className={`text-sm mb-1 ${popular ? 'text-cream/60' : 'text-earth/60'}`}>{unit}</div>
                <div className={`text-xs font-semibold mb-7 ${popular ? 'text-leaf' : 'text-forest'}`}>Min. {minPax}</div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${popular ? 'bg-sun/30' : 'bg-forest/15'}`}>
                        <Check size={11} className={popular ? 'text-sun' : 'text-forest'} />
                      </div>
                      <span className={`text-sm ${popular ? 'text-cream/80' : 'text-earth/80'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/packages" className={`${btnClass} w-full justify-center`}>
                  Pilih Paket <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-earth/60 text-sm mt-10"
        >
          *Harga dapat berubah sesuai destinasi, fasilitas, dan jumlah peserta. Hubungi kami untuk penawaran terbaik.
        </motion.p>
      </div>
    </section>
  )
}
