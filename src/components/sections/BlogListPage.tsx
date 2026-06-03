'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'

const posts = [
  { slug: '10-ide-team-building-kreatif', title: '10 Ide Team Building Kreatif yang Wajib Dicoba', excerpt: 'Temukan 10 ide segar yang terbukti meningkatkan semangat dan kekompakan tim perusahaan Anda.', category: 'Tips', readTime: '5 menit', emoji: '🎯', date: '15 Jun 2025' },
  { slug: 'destinasi-outing-terbaik-jawa-bali', title: 'Destinasi Outing Terbaik di Jawa & Bali', excerpt: 'Panduan lengkap memilih destinasi outing yang tepat sesuai budget dan karakter tim Anda.', category: 'Destinasi', readTime: '8 menit', emoji: '🗺️', date: '1 Jun 2025' },
  { slug: 'tips-sukses-family-gathering', title: 'Tips Sukses Family Gathering Ratusan Peserta', excerpt: 'Step-by-step panduan menggelar family gathering besar yang berkesan dan sesuai anggaran.', category: 'Panduan', readTime: '6 menit', emoji: '👨‍👩‍👧‍👦', date: '20 Mei 2025' },
  { slug: 'manfaat-outbound-untuk-produktivitas', title: 'Bagaimana Outbound Meningkatkan Produktivitas Tim', excerpt: 'Riset dan fakta tentang dampak nyata program outbound terhadap kinerja tim pasca event.', category: 'Insight', readTime: '7 menit', emoji: '📈', date: '10 Mei 2025' },
  { slug: 'perbedaan-outing-outbound', title: 'Outing vs Outbound: Apa Bedanya dan Mana yang Cocok?', excerpt: 'Panduan memilih antara outing santai dan outbound training sesuai kebutuhan tim Anda.', category: 'Tips', readTime: '4 menit', emoji: '🤔', date: '5 Mei 2025' },
  { slug: 'venue-team-building-jakarta', title: '15 Venue Team Building Terbaik di Jakarta & Sekitarnya', excerpt: 'Rekomendasi venue indoor dan outdoor terbaik untuk berbagai jenis aktivitas team building.', category: 'Destinasi', readTime: '9 menit', emoji: '📍', date: '25 Apr 2025' },
]

const cats = ['Semua', 'Tips', 'Destinasi', 'Panduan', 'Insight']

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredPosts =
    activeCategory === 'Semua'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">📝 Blog & Tips</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Insight untuk <span className="gradient-text">Tim Hebat</span>
          </h1>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Tips, inspirasi, dan panduan dari para ahli event Sarau Luxury untuk tim Anda.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === c
                  ? 'bg-forest text-cream border-forest shadow-md shadow-forest/20'
                  : 'bg-white border-earth/20 text-earth/80 hover:border-forest/40 hover:text-forest'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map(({ slug, title, excerpt, category, readTime, emoji, date }, i) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${slug}`} className="card-base block group h-full">
                    <div className="h-48 bg-gradient-to-br from-forest/10 to-leaf/20 flex items-center justify-center text-6xl rounded-t-3xl">
                      {emoji}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest/10 text-forest">{category}</span>
                        <span className="flex items-center gap-1 text-xs text-earth/60"><Clock size={11} /> {readTime}</span>
                        <span className="text-xs text-earth/40 ml-auto">{date}</span>
                      </div>
                      <h2 className="font-display font-semibold text-lg text-bark leading-snug mb-3 group-hover:text-forest transition-colors">
                        {title}
                      </h2>
                      <p className="text-earth/70 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                      <span className="flex items-center gap-2 text-forest text-sm font-semibold">
                        <BookOpen size={14} /> Baca Selengkapnya
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-3 text-center py-20 text-earth/50"
              >
                <div className="text-5xl mb-4">📭</div>
                <p className="text-lg font-medium">Belum ada artikel di kategori ini.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
