'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, Filter } from 'lucide-react'

const categories = ['Semua', 'Outbound', 'Outing', 'Team Building', 'Gathering', 'MICE']

const items = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  color: ['bg-forest/15', 'bg-earth/15', 'bg-sun/15', 'bg-leaf/20', 'bg-moss/15'][i % 5],
  tall: i % 5 === 0 || i % 7 === 0,
}))

export default function GalleryPage() {
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua' ? items : items.filter((it) => it.category === active)

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <span className="section-tag mb-4 inline-flex">📸 Galeri</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Momen <span className="gradient-text">Berkesan</span>
          </h1>
          <p className="text-earth/70 text-lg">Ratusan event, ribuan kenangan indah bersama klien kami.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-forest text-cream shadow-forest shadow-md'
                  : 'bg-white border border-earth/20 text-earth/80 hover:border-forest/40 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer relative ${item.color} ${item.tall ? 'h-80' : 'h-52'} mb-4 flex items-center justify-center`}
              >
                <ImageIcon size={28} className="text-forest/20" />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/50 transition-all duration-300" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold text-leaf">{item.category}</span>
                  <span className="font-display font-semibold text-cream text-sm">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-earth/50 text-xs mt-10">
          * Gambar akan ditampilkan dari Sanity CMS setelah konfigurasi selesai
        </p>
      </div>
    </div>
  )
}
