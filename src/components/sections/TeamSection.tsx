'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Instagram } from 'lucide-react'

const team = [
  { name: 'Arif Wibowo',     role: 'Founder & CEO',          initials: 'AW', color: 'bg-forest' },
  { name: 'Sari Dewi',       role: 'Creative Director',       initials: 'SD', color: 'bg-earth' },
  { name: 'Brama Putra',     role: 'Head of Operations',      initials: 'BP', color: 'bg-moss' },
  { name: 'Nadia Kusuma',    role: 'Client Relations Manager', initials: 'NK', color: 'bg-sun text-bark' },
  { name: 'Eko Prasetyo',    role: 'Lead Facilitator',        initials: 'EP', color: 'bg-forest-light' },
  { name: 'Tiara Anggraini', role: 'Marketing Manager',       initials: 'TA', color: 'bg-earth-light' },
]

export default function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4 inline-flex">👥 Tim Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
            Orang-Orang di Balik <span className="gradient-text">Sarau Luxury</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map(({ name, role, initials, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center group"
            >
              <div className={`w-full aspect-square rounded-2xl ${color} text-cream flex items-center justify-center text-3xl font-display font-bold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                {initials}
              </div>
              <h3 className="font-semibold text-bark text-sm mb-1">{name}</h3>
              <p className="text-earth/60 text-xs">{role}</p>
              <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="w-7 h-7 rounded-full bg-forest/10 hover:bg-forest flex items-center justify-center text-forest hover:text-cream transition-colors">
                  <Linkedin size={13} />
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-forest/10 hover:bg-forest flex items-center justify-center text-forest hover:text-cream transition-colors">
                  <Instagram size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
