'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram } from 'lucide-react'

const team = [
  {
    name: 'Muhammad Dwi Muhaimin',
    role: 'Founder & CEO',
    initials: 'MDM',
    photo: 'https://lh3.googleusercontent.com/d/1Q9tWCbjGDrU46TXBTcScwmtc1WI-Xyjr',
    instagram: 'https://www.instagram.com/wiimhmn7?igsh=dzBzZjBqdDZ5ZXk5&utm_source=qr',
    color: 'bg-forest',
  },
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
          <p className="mt-4 text-earth/60 text-lg max-w-xl mx-auto">
            Dipimpin oleh individu yang berdedikasi untuk menciptakan pengalaman event terbaik bagi setiap klien.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {team.map(({ name, role, initials, photo, instagram, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group max-w-xs"
            >
              {/* Photo / Avatar */}
              <div className="relative w-48 h-48 mx-auto mb-5">
                <div className={`w-full h-full rounded-3xl overflow-hidden shadow-xl shadow-forest/20 group-hover:scale-105 transition-transform duration-300 ${color}`}>
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover object-top"
                      onError={(e) => {
                        // fallback to initials if image not found
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  {/* Initials fallback */}
                  <div className="absolute inset-0 flex items-center justify-center text-cream font-display font-bold text-4xl">
                    {initials}
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-sun text-bark text-xs font-bold px-3 py-1 rounded-full shadow whitespace-nowrap">
                  Founder & CEO
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-bold text-bark text-xl mb-1">{name}</h3>
                <p className="text-earth/60 text-sm mb-4">{role}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-forest/10 hover:bg-forest flex items-center justify-center text-forest hover:text-cream transition-all duration-200 hover:scale-110"
                  >
                    <Instagram size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
