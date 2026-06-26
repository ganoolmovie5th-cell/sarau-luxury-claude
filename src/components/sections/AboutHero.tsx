'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="pt-36 pb-20 gradient-forest relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #95D5B2, transparent 50%), radial-gradient(circle at 20% 80%, #F4A261, transparent 50%)' }}
      />
      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-leaf border border-leaf/20 font-accent text-lg mb-6">
            🌿 Tentang Kami
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight">
            Kami Adalah Pencerita{' '}<br />
            <span className="text-sun">Pengalaman Tim Anda</span>
          </h1>
          <h2 className="text-cream/70 text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Sarau Luxury lahir dari satu keyakinan: setiap tim berhak mendapatkan pengalaman
            yang mengubah cara mereka bekerja, berkomunikasi, dan bertumbuh bersama.
          </h2>
          <h4 className="sr-only">Event Organizer Profesional sejak 2018 — 100+ Event Sukses, 53+ Klien Korporat</h4>
        </motion.div>
      </div>
    </section>
  )
}
