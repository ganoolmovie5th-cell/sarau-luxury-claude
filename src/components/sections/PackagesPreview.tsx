'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, ArrowRight, Bus, Gamepad2, Waves, Mountain, Tent, Bike, Users, Utensils, TreePine, Mic2 } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const gatheringPackages = [
  {
    name: 'Gathering Silver',
    badge: null,
    price: '525.000',
    unit: '/pax/orang',
    minPax: 'Minimal 20 Pax',
    popular: false,
    color: 'from-slate-50 to-gray-50 border-slate-200',
    features: [
      'Penginapan 2D1N',
      '3x Meal',
      '2x Coffee Break',
      'Aula',
      'Lapangan',
      'Kolam renang',
      'Fun Game',
      'Alat game',
      'Game Master',
      'Pemandu',
      'Dokumentasi',
    ],
  },
  {
    name: 'Gathering Gold',
    badge: '⭐ Paling Populer',
    price: '675.000',
    unit: '/pax/orang',
    minPax: 'Minimal 20 Pax',
    popular: true,
    note: 'Bisa Pilih Rafting / Paintball',
    color: 'from-forest to-forest border-transparent',
    features: [
      'Penginapan 2D1N',
      '3x Meal',
      '2x Coffee Break',
      'Aula',
      'Lapangan',
      'Kolam renang',
      'Rafting 11 km',
      'Snack dan Kelapa Muda',
      'Fun Game',
      'Alat game',
      'Game Master',
      'Pemandu',
      'Dokumentasi',
    ],
  },
  {
    name: 'Gathering Platinum',
    badge: null,
    price: '925.000',
    unit: '/pax/orang',
    minPax: 'Minimal 20 Pax',
    popular: false,
    note: 'Bisa Pilih Rafting / Paintball',
    color: 'from-amber-50 to-yellow-50 border-amber-200',
    features: [
      'Penginapan 2D1N',
      '3x Meal',
      '2x Coffee Break',
      'Aula',
      'Lapangan',
      'Kolam renang',
      'Rafting 11 km',
      'Snack dan Kelapa Muda',
      'Team Building',
      'Game Master',
      'Pemandu',
      'Alat game',
      'Bus PP 2D1N',
      'Dokumentasi',
      'Termasuk tol (di luar parkir & tips driver)',
    ],
  },
]

type AddOnItem = {
  icon: React.ElementType
  name: string
  price: string
  unit: string
  note?: string
  features: string[]
}

const addOns: AddOnItem[] = [
  {
    icon: Bus,
    name: 'Bus 35 Seat',
    price: '4.000.000',
    unit: '/Unit/2D1N',
    features: ['Bus 2D1N', 'BBM', 'Driver dan kenek', 'Belum termasuk tol, parkir dan tips driver'],
  },
  {
    icon: Bus,
    name: 'Bus 50 Seat',
    price: '5.500.000',
    unit: '/Unit/2D1N',
    features: ['Bus 2D1N', 'BBM', 'Driver dan kenek', 'Belum termasuk tol, parkir dan tips driver'],
  },
  {
    icon: Bus,
    name: 'Bus 59 Seat',
    price: '6.000.000',
    unit: '/Unit/2D1N',
    features: ['Bus 2D1N', 'BBM', 'Driver dan kenek', 'Belum termasuk tol, parkir dan tips driver'],
  },
  {
    icon: Gamepad2,
    name: 'Fun Game',
    price: '150.000',
    unit: '/pax/orang',
    features: ['Game Master', 'Fasilitator', 'Perlengkapan Game', 'Mineral', 'Dokumentasi', 'Ice breaking', 'Durasi 3 Jam'],
  },
  {
    icon: Users,
    name: 'Team Building',
    price: '175.000',
    unit: '/pax/orang',
    features: ['Game Master', 'Fasilitator', 'Perlengkapan Game', 'Mineral', 'Dokumentasi', 'Ice breaking', 'Durasi 3 Jam'],
  },
  {
    icon: Waves,
    name: 'Rafting 11 km',
    price: '250.000',
    unit: '/pax/orang',
    note: 'Minimal 5 Pax',
    features: ['1x Makan', '1x Snack', 'Kelapa muda', 'Transportasi saat Rafting', 'Pemandu & rescue', 'Perlengkapan rafting', 'Dokumentasi', 'Durasi 3 Jam'],
  },
  {
    icon: Waves,
    name: 'Body Rafting',
    price: '225.000',
    unit: '/Orang',
    note: 'Minimal 5 Pax',
    features: ['Tiket masuk', '1x Makan', 'Melewati 3 Curug', 'Pemandu', 'Dokumentasi', 'Durasi 3 Jam'],
  },
  {
    icon: Waves,
    name: 'Mini Rafting',
    price: '125.000',
    unit: '/Orang',
    note: 'Minimal 5 Pax',
    features: ['Tiket masuk', 'Perlengkapan perahu karet', 'Pelampung', 'Helm'],
  },
  {
    icon: Mountain,
    name: 'Offroad',
    price: '350.000',
    unit: '/pax/orang',
    features: ['Driver', 'Mineral', 'Pemandu', 'Dokumentasi', 'Jeep 4 orang / Landy 7 Orang', 'Durasi 3 Jam'],
  },
  {
    icon: Gamepad2,
    name: 'Paintball',
    price: '175.000',
    unit: '/pax/orang',
    features: ['Pemandu', 'Seragam', 'Rompi', 'Peluru 30 Pcs', 'Arena', 'Mineral', 'Dokumentasi'],
  },
  {
    icon: Bike,
    name: 'ATV',
    price: '175.000',
    unit: '/pax/orang',
    features: ['ATV', 'Mineral', 'Dokumentasi'],
  },
  {
    icon: Tent,
    name: 'Camping',
    price: '450.000',
    unit: '/Tenda',
    features: ['2–3 Orang', 'Sleeping bag', 'Matras', 'Kompor mini', 'Gas refill'],
  },
  {
    icon: TreePine,
    name: 'Trekking',
    price: '200.000',
    unit: '/Pax/Orang',
    features: ['Tiketing', 'Guide', 'P3K', 'Snack dan Mineral', 'Jalur trekking', 'Perizinan', 'Dokumentasi'],
  },
  {
    icon: Waves,
    name: 'Bogor Aqua Game',
    price: '125.000',
    unit: '/pax/Orang',
    features: ['Area', 'Perlengkapan', '1x Coffee Break', 'Dokumentasi'],
  },
]

const meetingAddOns: AddOnItem[] = [
  {
    icon: Users,
    name: 'Halfday Meeting Package',
    price: '225.000',
    unit: '/pax/orang',
    features: ['Meeting Room', '4 Jam', '1x Lunch', '1x Coffee Break', 'Dokumentasi'],
  },
  {
    icon: Users,
    name: 'Fullday Meeting Package',
    price: '300.000',
    unit: '/pax/Orang',
    features: ['Meeting Room', '8 Jam', '1x Lunch', '2x Coffee Break', 'Dokumentasi'],
  },
  {
    icon: Utensils,
    name: 'BBQ',
    price: '150.000',
    unit: '/pax/Orang',
    features: ['4 Menu (Ayam, Cumi, Sosis, Jagung)'],
  },
  {
    icon: Utensils,
    name: 'Kambing Guling',
    price: '3.000.000',
    unit: '/Ekor',
    features: ['Satu Ekor'],
  },
  {
    icon: Mic2,
    name: 'Orgen Tunggal (1 Penyanyi)',
    price: '2.500.000',
    unit: '/paket',
    features: ['Durasi 2–3 Jam'],
  },
  {
    icon: Mic2,
    name: 'Orgen Tunggal (2 Penyanyi)',
    price: '3.500.000',
    unit: '/paket',
    features: ['Durasi 2–3 Jam'],
  },
]

const tabs = [
  { id: 'gathering', label: '🏕️ Paket Gathering' },
  { id: 'activities', label: '🎯 Aktivitas & Add-On' },
  { id: 'meeting',    label: '🤝 Meeting & Hiburan' },
]

// ─── SUB COMPONENTS ───────────────────────────────────────────────────────────

function GatheringCard({ pkg, i, inView }: { pkg: typeof gatheringPackages[0]; i: number; inView: boolean }) {
  const isPopular = pkg.popular
  return (
    <motion.div
      key={pkg.name}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl border overflow-hidden bg-gradient-to-b ${pkg.color} ${isPopular ? 'shadow-forest shadow-2xl scale-[1.02] md:scale-105' : 'shadow-sm'}`}
    >
      {pkg.badge && (
        <div className="absolute top-0 left-0 right-0 text-center py-2 bg-sun text-bark text-xs font-bold tracking-widest uppercase">
          {pkg.badge}
        </div>
      )}
      <div className={`p-7 ${pkg.badge ? 'pt-12' : ''}`}>
        <div className={`font-display font-bold text-xl mb-1 ${isPopular ? 'text-cream' : 'text-bark'}`}>{pkg.name}</div>
        {pkg.note && (
          <div className={`text-xs font-semibold mb-1 px-2 py-1 rounded-full inline-block ${isPopular ? 'bg-white/15 text-cream/80' : 'bg-forest/10 text-forest'}`}>
            {pkg.note}
          </div>
        )}
        <div className={`text-xs mb-5 ${isPopular ? 'text-cream/60' : 'text-earth/60'}`}>{pkg.minPax}</div>

        {/* Price */}
        <div className="mb-6">
          <div className={`font-display font-bold text-3xl ${isPopular ? 'text-sun' : 'text-forest'}`}>
            Rp {pkg.price}
          </div>
          <div className={`text-sm ${isPopular ? 'text-cream/60' : 'text-earth/60'}`}>{pkg.unit}</div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-8">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isPopular ? 'bg-sun/30' : 'bg-forest/15'}`}>
                <Check size={9} className={isPopular ? 'text-sun' : 'text-forest'} />
              </div>
              <span className={`text-sm ${isPopular ? 'text-cream/80' : 'text-earth/80'}`}>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/booking"
          className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
            isPopular
              ? 'bg-sun text-bark hover:bg-sun/90'
              : 'bg-forest text-cream hover:bg-forest/90'
          }`}
        >
          Pesan Sekarang <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  )
}

function AddOnCard({ item, i, inView }: { item: AddOnItem; i: number; inView: boolean }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="bg-white rounded-2xl border border-earth/10 p-5 hover:shadow-lg hover:shadow-forest/8 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-forest" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-bark text-sm leading-tight">{item.name}</div>
          {item.note && <div className="text-xs text-forest font-medium mt-0.5">{item.note}</div>}
        </div>
      </div>
      <div className="mb-3">
        <span className="font-display font-bold text-xl text-forest">Rp {item.price}</span>
        <span className="text-xs text-earth/60 ml-1">{item.unit}</span>
      </div>
      <ul className="space-y-1">
        {item.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-earth/70">
            <Check size={10} className="text-forest flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PackagesPreview({ hideHeader = false }: { hideHeader?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [activeTab, setActiveTab] = useState('gathering')

  return (
    <section ref={ref} className="section-padding bg-cream/80 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #95D5B2 0%, transparent 45%)' }}
      />

      <div className="container-wide relative z-10">
        {/* Header — disembunyikan jika halaman sudah punya H1 sendiri */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="section-tag mb-4 inline-flex">💼 Price List</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">
              Paket & Harga yang{' '}
              <span className="gradient-text">Transparan</span>
            </h2>
            <p className="text-earth/80 text-lg max-w-xl mx-auto">
              Semua harga sudah termasuk fasilitas lengkap. Hubungi kami untuk penawaran spesial grup besar.
            </p>
          </motion.div>
        )}

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-forest text-cream border-forest shadow-md shadow-forest/20'
                  : 'bg-white border-earth/20 text-earth/80 hover:border-forest/40 hover:text-forest'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'gathering' && (
            <motion.div
              key="gathering"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
                {gatheringPackages.map((pkg, i) => (
                  <GatheringCard key={pkg.name} pkg={pkg} i={i} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'activities' && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {addOns.map((item, i) => (
                  <AddOnCard key={item.name + item.price} item={item} i={i} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'meeting' && (
            <motion.div
              key="meeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {meetingAddOns.map((item, i) => (
                  <AddOnCard key={item.name} item={item} i={i} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 space-y-3"
        >
          <p className="text-earth/60 text-sm">
            *Harga dapat berubah sesuai destinasi, fasilitas, dan jumlah peserta.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Konsultasi Gratis <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
