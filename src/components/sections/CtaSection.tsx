'use client'
import { useRef } from 'react'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-forest rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden noise-overlay"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-white/10 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full border border-white/10 -translate-x-1/3 translate-y-1/3" />

          {/* Floating blobs */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-sun/30 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 right-16 w-20 h-20 bg-leaf/20 rounded-full blur-xl animate-float-slow" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-leaf font-accent text-lg mb-6">
              🚀 Siap Mulai?
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              Buat Tim Anda Tumbuh<br />
              <span className="text-sun">Bersama Sarau Luxury</span>
            </h2>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Konsultasikan kebutuhan event perusahaan Anda dengan tim kami.
              Gratis, tanpa komitmen, dan penawaran terbaik menanti Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-sun text-base px-10 py-4">
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${CONTACT.phone1Wa}?text=Halo%20Sarau%20Luxury%2C%20saya%20ingin%20konsultasi%20event%20perusahaan%20kami.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-cream border-2 border-white/30 hover:bg-white/10 transition duration-300 hover:-translate-y-0.5 text-base"
              >
                <Phone size={18} />
                Chat WhatsApp
              </a>
            </div>

            <p className="text-cream/40 text-sm mt-8">
              Respon dalam 15 menit · Senin – Sabtu, 08.00–20.00 WIB
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
