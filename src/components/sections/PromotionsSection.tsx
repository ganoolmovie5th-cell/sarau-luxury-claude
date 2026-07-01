'use client'
import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Tag } from 'lucide-react'

const promos = [
  {
    src: '/promotions/promo-1.jpeg',
    alt: 'Promo Sarau Luxury 1',
  },
  {
    src: '/promotions/promo-2.jpeg',
    alt: 'Promo Sarau Luxury 2',
  },
  {
    src: '/promotions/promo-3.jpeg',
    alt: 'Promo Sarau Luxury 3',
  },
]

export default function PromotionsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #F4A261 0%, transparent 40%), radial-gradient(circle at 10% 80%, #95D5B2 0%, transparent 35%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex items-center gap-2">
            <Tag size={14} /> Promo Spesial
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">
            Penawaran <span className="gradient-text">Terbatas</span>
          </h2>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Dapatkan harga terbaik untuk event team building & gathering perusahaan Anda.
          </p>
        </motion.div>

        {/* Promo Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/booking"
                className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square"
              >
                <Image
                  src={promo.src}
                  alt={promo.alt}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-sun text-bark text-sm font-bold px-4 py-2 rounded-full">
                    Tanya Promo Ini →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/booking" className="btn-primary inline-flex">
            Hubungi Kami untuk Promo →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
