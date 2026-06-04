'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ZoomIn } from 'lucide-react'

const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`

const galleryItems = [
  { id: 1,  src: gd('19Z0PLEUY2THTrafQ_NTJezJhfEZYF_V8'), title: 'Semangat Tim yang Membara',    category: 'Outbound',      span: 'row-span-2' },
  { id: 2,  src: gd('1lrnK9HRhjD0W-8uPDPQLWkGHBnEWmnQN'), title: 'Kebersamaan yang Nyata',       category: 'Gathering',     span: '' },
  { id: 3,  src: gd('1IVOSqzmigs7hd6bGF34SASET2Kcf8-lq'), title: 'Kolaborasi Tim Solid',         category: 'Team Building', span: '' },
  { id: 4,  src: gd('1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN'), title: 'Petualangan Tak Terlupakan',   category: 'Outing',        span: 'col-span-2' },
  { id: 5,  src: gd('1F5cVgjHxEB2NeGsKpp3LiNohL5mq_mKc'), title: 'Energi Positif Outbound',      category: 'Outbound',      span: '' },
  { id: 6,  src: gd('1JBJPpk5dPPdUUln30xDVPtJmp6foxEMp'), title: 'Games Seru & Kompetitif',      category: 'Team Building', span: 'row-span-2' },
]

export default function GalleryPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-tag mb-4 inline-flex">📸 Galeri</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Kenangan yang{' '}
              <span className="gradient-text">Tak Terlupakan</span>
            </h2>
          </div>
          <Link href="/gallery" className="btn-secondary flex-shrink-0">
            Lihat Semua <ArrowRight size={17} />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4"
        >
          {galleryItems.map(({ id, src, title, category, span }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`${span} rounded-2xl overflow-hidden group cursor-pointer relative bg-earth/10`}
            >
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/55 transition-all duration-500" />
              {/* Caption */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-semibold text-leaf mb-1">{category}</span>
                <span className="font-display font-semibold text-cream text-sm leading-tight">{title}</span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            Lihat Semua Foto <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
