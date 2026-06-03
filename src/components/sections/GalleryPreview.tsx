'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ImageIcon } from 'lucide-react'

// Placeholder gallery items (replace with Sanity images)
const galleryItems = [
  { id: 1, title: 'Outbound Lembang',     category: 'Outbound',    aspect: 'tall',   color: 'bg-forest/20' },
  { id: 2, title: 'Team Building Bali',   category: 'Team Building', aspect: 'wide', color: 'bg-earth/20' },
  { id: 3, title: 'Family Day Puncak',    category: 'Gathering',   aspect: 'square', color: 'bg-sun/20' },
  { id: 4, title: 'Corporate Outing',     category: 'Outing',      aspect: 'square', color: 'bg-leaf/30' },
  { id: 5, title: 'MICE Jakarta',         category: 'MICE',        aspect: 'tall',   color: 'bg-moss/20' },
  { id: 6, title: 'Adventure Bromo',      category: 'Outbound',    aspect: 'wide',   color: 'bg-forest/30' },
]

const aspectMap = {
  tall:   'row-span-2',
  wide:   'col-span-2',
  square: '',
}

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

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4"
        >
          {galleryItems.map(({ id, title, category, aspect, color }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`${aspectMap[aspect as keyof typeof aspectMap]} rounded-2xl overflow-hidden group cursor-pointer relative ${color}`}
            >
              {/* Placeholder image area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon size={32} className="text-forest/30" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/50 transition-all duration-500" />

              {/* Caption */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-semibold text-leaf mb-1">{category}</span>
                <span className="font-display font-semibold text-cream text-sm leading-tight">{title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <p className="text-center text-earth/50 text-xs mt-6">
          * Gambar galeri akan ditampilkan dari Sanity CMS setelah konfigurasi selesai
        </p>
      </div>
    </section>
  )
}
