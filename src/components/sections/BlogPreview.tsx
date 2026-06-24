'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

const posts = [
  {
    slug: '10-ide-team-building-kreatif',
    title: '10 Ide Team Building Kreatif yang Wajib Dicoba Perusahaan Anda',
    excerpt: 'Team building bukan hanya soal lomba estafet atau tarik tambang. Temukan 10 ide segar yang terbukti meningkatkan semangat dan kekompakan tim.',
    category: 'Tips & Inspirasi',
    readTime: '5 menit',
    color: 'bg-leaf/20',
    icon: '🎯',
  },
  {
    slug: 'destinasi-outing-terbaik-jawa-bali',
    title: 'Destinasi Outing Terbaik di Jawa & Bali untuk Rombongan Perusahaan',
    excerpt: 'Dari Lembang yang sejuk, Bromo yang megah, hingga Bali yang eksotis — panduan lengkap memilih destinasi outing yang tepat sesuai budget.',
    category: 'Destinasi',
    readTime: '8 menit',
    color: 'bg-sun/20',
    icon: '🗺️',
  },
  {
    slug: 'tips-sukses-family-gathering',
    title: 'Tips Sukses Menggelar Family Gathering untuk Ratusan Peserta',
    excerpt: 'Merencanakan family gathering skala besar itu tidak sesulit yang dibayangkan, asal tahu triknya. Ini dia panduan step-by-step dari tim Sarau Luxury.',
    category: 'Panduan',
    readTime: '6 menit',
    color: 'bg-forest/10',
    icon: '👨‍👩‍👧‍👦',
  },
]

export default function BlogPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true, initialInView: true })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-64 bg-leaf/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-tag mb-4 inline-flex">📝 Blog & Tips</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Insight untuk{' '}
              <span className="gradient-text">Tim Hebat</span>
            </h2>
          </div>
          <Link href="/blog" className="btn-secondary flex-shrink-0">
            Semua Artikel <ArrowRight size={17} />
          </Link>
        </motion.div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map(({ slug, title, excerpt, category, readTime, color, icon }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/blog/${slug}`} className="card-base block group h-full" aria-label={`Baca artikel: ${title}`}>
                {/* Color header */}
                <div className={`${color} h-48 flex items-center justify-center text-5xl rounded-t-3xl`}>
                  {icon}
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest/10 text-forest">
                      {category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-earth/60">
                      <Clock size={12} /> {readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-bark leading-snug mb-3 group-hover:text-forest transition-colors">
                    {title}
                  </h3>
                  <p className="text-earth/70 text-sm leading-relaxed mb-5 line-clamp-3">{excerpt}</p>
                  <span className="flex items-center gap-2 text-forest text-sm font-semibold">
                    <BookOpen size={15} /> Baca Selengkapnya
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
