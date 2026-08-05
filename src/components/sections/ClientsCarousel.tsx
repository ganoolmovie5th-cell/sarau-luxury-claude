'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const clients = [
  { name: 'Bank BCA', domain: 'bca.co.id', color: '#006cb7' },
  { name: 'Toyota', domain: 'toyota.co.id', color: '#eb0a1e' },
  { name: 'Park Hyatt Jakarta', domain: 'hyatt.com', color: '#8b6914' },
  { name: 'Kalbe Farma', domain: 'kalbe.co.id', color: '#007bff' },
  { name: 'Hino Motors', domain: 'hino.co.id', color: '#CC0000' },
  { name: 'Bank Mandiri', domain: 'bankmandiri.co.id', color: '#003d79' },
  { name: 'Bank BNI', domain: 'bni.co.id', color: '#f77f00' },
  { name: 'Epson Indonesia', domain: 'epson.co.id', color: '#00539f' },
  { name: 'Astra', domain: 'astra.co.id', color: '#eb0a1e' },
  { name: 'Adaro Energy', domain: 'adaro.co.id', color: '#003366' },
  { name: 'Siloam Hospitals', domain: 'siloamhospitals.com', color: '#005baa' },
  { name: 'Hotel Mercure', domain: 'mercure.com', color: '#003580' },
  { name: 'Pegadaian', domain: 'pegadaian.co.id', color: '#00703a' },
  { name: 'Bogasari', domain: 'bogasari.com', color: '#a85a10' },
  { name: 'Bank CIMB Niaga', domain: 'cimbniaga.co.id', color: '#d4001a' },
  { name: 'Nippon Steel', domain: 'nippon-steel.com', color: '#1a1a2e' },
  { name: 'Aloft Hotel', domain: 'alofthotels.com', color: '#e31837' },
  { name: 'Four Points Hotel', domain: 'fourpoints.com', color: '#8b1a1a' },
  { name: 'Modena', domain: 'modena.com', color: '#c0392b' },
  { name: 'TAF', domain: 'taf.co.id', color: '#eb0a1e' },
]

function LogoCard({ name, domain, color }: { name: string; domain: string; color: string }) {
  const [logoErr, setLogoErr] = useState(false)
  const initials = name.replace(/^(PT\.|Bank|RS\.)\s*/i, '').trim().slice(0, 2).toUpperCase()

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-24 bg-white rounded-2xl shadow-sm border border-earth/10 hover:border-forest/30 hover:shadow-lg transition duration-300 group">
      {logoErr ? (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: color }}>
          {initials}
        </div>
      ) : (
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-earth/10 p-0.5">
          <Image src={`/api/logo/${domain}`} alt={`${name} logo`} width={40} height={40} unoptimized className="object-contain w-full h-full" onError={() => setLogoErr(true)} />
        </div>
      )}
      <span className="font-medium text-bark text-[10px] mt-2 text-center leading-tight px-1 line-clamp-2">{name}</span>
    </div>
  )
}

export default function ClientsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanLeft(scrollLeft > 0)
    setCanRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = dir === 'left' ? -300 : 300
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    setTimeout(checkScroll, 400)
  }

  useEffect(() => { checkScroll() }, [])

  return (
    <section ref={ref} className="py-20 bg-cream relative overflow-hidden">
      <div className="container-wide mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
          <span className="section-tag mb-4 inline-flex">🤝 Klien Kami</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark">
            Dipercaya oleh <span className="gradient-text">100+ Perusahaan</span>
          </h2>
          <p className="text-earth mt-3 text-base">dari berbagai industri di Indonesia</p>
        </motion.div>
      </div>

      <div className="container-wide relative">
        {/* Arrows */}
        {canLeft && (
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors cursor-pointer" aria-label="Scroll left">
            <ChevronLeft size={20} />
          </button>
        )}
        {canRight && (
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors cursor-pointer" aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        )}

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-cream to-transparent pointer-events-none" />

        {/* Carousel */}
        <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scrollbar-hide px-8 py-2" style={{ scrollbarWidth: 'none' }}>
          {clients.map((c) => (
            <LogoCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
