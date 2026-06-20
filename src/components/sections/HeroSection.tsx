'use client'

import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { STATS } from '@/lib/constants'
import HeroSceneBoundary from '@/components/3d/HeroSceneBoundary'

// Lazy load Three.js hanya setelah browser idle — tidak block FCP/LCP
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => null,
})
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }, // dikurangi dari 0.15 → LCP lebih cepat
}

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },                    // dikurangi y: 40→24
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }, // 0.8→0.5s
}

// Variant khusus H1 (LCP element) — TIDAK pakai opacity:0
// Browser mendeteksi LCP hanya jika elemen visible; opacity:0 menunda deteksi
const h1Variants = {
  hidden:   { y: 24 },
  visible:  { y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const [sceneReady, setSceneReady] = useState(false)

  useEffect(() => {
    // Load Three.js hanya setelah browser idle — tidak ganggu FCP/LCP/TBT
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setSceneReady(true), { timeout: 3000 })
      return () => cancelIdleCallback(id)
    } else {
      // Fallback untuk Safari
      const t = setTimeout(() => setSceneReady(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bark">
      {/* 3D Canvas background — hanya render setelah idle */}
      <div className="absolute inset-0 z-0">
        {sceneReady && (
          <HeroSceneBoundary>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </HeroSceneBoundary>
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bark/60 via-bark/30 to-bark/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-bark/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 container-wide pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-forest/30 text-leaf border border-leaf/30 backdrop-blur-sm font-accent text-base">
              🌿 #1 Event Organizer Outing & Outbound
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={h1Variants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-6"
          >
            Where Teams{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Grow</span>
              {/* Hand-drawn underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9C50 3 100 1 198 9" stroke="#F4A261" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}Together
          </motion.h1>

          {/* Sub */}
          <motion.h2
            variants={itemVariants}
            className="text-cream/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-normal"
          >
            Sarau Luxury merancang pengalaman outing dan outbound terbaik untuk perusahaan Anda —
            dari team building seru hingga gathering eksklusif yang penuh kenangan.
          </motion.h2>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <Link href="/booking" className="btn-sun text-base px-8 py-4" aria-label="Konsultasi gratis event perusahaan">
              Konsultasi Gratis
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/gallery"
              aria-label="Lihat galeri dokumentasi event kami"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-cream border border-cream/30 hover:bg-cream/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center" aria-hidden="true">
                <Play size={14} fill="currentColor" />
              </span>
              Lihat Galeri
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: STATS.totalEventsLabel,      label: 'Event Sukses' },
              { value: STATS.totalClientsLabel,    label: 'Perusahaan Klien' },
              { value: STATS.yearsExperienceLabel, label: 'Tahun Pengalaman' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="text-sun font-display font-bold text-3xl">{stat.value}</div>
                <h4 className="text-cream/50 text-sm leading-tight max-w-[80px]">{stat.label}</h4>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-cream/40" />
        </motion.div>
      </motion.div>

      {/* Bottom leaf decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  )
}
