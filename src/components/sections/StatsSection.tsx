'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { Trophy, Users, MapPin, Star } from 'lucide-react'

import { STATS } from '@/lib/constants'

const stats = [
  { icon: Trophy, value: STATS.totalEvents,      suffix: '+', label: 'Event Sukses',        desc: 'Outing, outbound & gathering terlaksana' },
  { icon: Users,  value: STATS.totalClients,     suffix: '+', label: 'Perusahaan Klien',    desc: 'Dari berbagai industri' },
  { icon: MapPin, value: STATS.totalDestinations,suffix: '+', label: 'Destinasi Wisata',    desc: 'Di Jawa, Bali & sekitarnya' },
  { icon: Star,   value: STATS.googleRating,     suffix: '',  label: 'Rating Google',       desc: 'Rating kepuasan klien', decimal: 1 },
]

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className="relative -mt-1 bg-cream py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-leaf/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-sun/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide">
        {/* Visually hidden heading untuk screen readers & heading order */}
        <h2 className="sr-only">Pencapaian Sarau Luxury</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, desc, decimal }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-forest/15 hover:shadow-xl transition duration-500 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest/10 group-hover:bg-forest flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={22} className="text-forest group-hover:text-cream transition-colors duration-300" />
              </div>
              <div className="font-display font-bold text-4xl md:text-5xl text-bark mb-1">
                {inView ? (
                  <CountUp
                    end={value}
                    duration={2.5}
                    delay={i * 0.1}
                    decimals={decimal || 0}
                  />
                ) : '0'}
                <span className="text-forest">{suffix}</span>
              </div>
              <h3 className="font-semibold text-bark text-sm md:text-base mb-1">{label}</h3>
              <p className="text-earth/70 text-xs md:text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
