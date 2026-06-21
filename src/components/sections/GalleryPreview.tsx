'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Images } from 'lucide-react'

const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}`

// Layout bento — 7 foto dengan posisi yang lebih dinamis
const photos = [
  { id: 1,  src: gd('19Z0PLEUY2THTrafQ_NTJezJhfEZYF_V8'), title: 'Semangat Tim yang Membara',  category: 'Outbound'      },
  { id: 2,  src: gd('1lrnK9HRhjD0W-8uPDPQLWkGHBnEWmnQN'), title: 'Kebersamaan yang Nyata',     category: 'Gathering'     },
  { id: 3,  src: gd('1IVOSqzmigs7hd6bGF34SASET2Kcf8-lq'), title: 'Kolaborasi Tim Solid',       category: 'Team Building' },
  { id: 4,  src: gd('1e0Tuw7vsNhRpJv0dD09zkF-F6qjQgUXN'), title: 'Petualangan Tak Terlupakan', category: 'Outing'        },
  { id: 5,  src: gd('1F5cVgjHxEB2NeGsKpp3LiNohL5mq_mKc'), title: 'Energi Positif Outbound',    category: 'Outbound'      },
  { id: 6,  src: gd('1JBJPpk5dPPdUUln30xDVPtJmp6foxEMp'), title: 'Games Seru & Kompetitif',    category: 'Team Building' },
  { id: 7,  src: gd('1cydhBNrsRQDtXFpMwNtMJc3-fTSkOVBJ'), title: 'Keceriaan Bersama Keluarga', category: 'Gathering'     },
]

const categoryColor: Record<string, string> = {
  'Outbound':      'bg-forest/80',
  'Gathering':     'bg-sun/80',
  'Team Building': 'bg-earth/80',
  'Outing':        'bg-moss/80',
}

function PhotoCard({ photo, className, delay, inView }: {
  photo: typeof photos[0]
  className: string
  delay: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${className} relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer bg-earth/10`}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Gradient overlay — always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-transparent to-transparent" />

      {/* Category badge */}
      <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-cream text-xs font-bold ${categoryColor[photo.category] ?? 'bg-bark/70'} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300`}>
        {photo.category}
      </div>

      {/* Caption always at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-display font-semibold text-cream text-sm leading-tight drop-shadow-md">
          {photo.title}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
      />
    </motion.div>
  )
}

export default function GalleryPreview() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sun/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

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
            <p className="text-earth/60 mt-3 max-w-md">
              Setiap momen berharga terabadikan — dari tawa, kerja sama, hingga pencapaian bersama.
            </p>
          </div>
          <Link href="/gallery" className="btn-secondary flex-shrink-0 self-start md:self-auto">
            Lihat Semua <ArrowRight size={17} />
          </Link>
        </motion.div>

        {/* ── Bento grid layout ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4">

          {/* Foto 1 — besar kiri, span 2 row */}
          <PhotoCard
            photo={photos[0]}
            className="col-span-1 md:col-span-2 row-span-2"
            delay={0.1}
            inView={inView}
          />

          {/* Foto 2 — kanan atas kecil */}
          <PhotoCard
            photo={photos[1]}
            className="col-span-1 row-span-1"
            delay={0.2}
            inView={inView}
          />

          {/* Foto 3 — kanan atas kecil */}
          <PhotoCard
            photo={photos[2]}
            className="col-span-1 row-span-1"
            delay={0.25}
            inView={inView}
          />

          {/* Foto 4 — kanan bawah lebar */}
          <PhotoCard
            photo={photos[3]}
            className="col-span-2 row-span-1"
            delay={0.3}
            inView={inView}
          />

          {/* Foto 5 — bawah kiri */}
          <PhotoCard
            photo={photos[4]}
            className="col-span-1 row-span-1"
            delay={0.35}
            inView={inView}
          />

          {/* Foto 6 — bawah tengah */}
          <PhotoCard
            photo={photos[5]}
            className="col-span-1 row-span-1"
            delay={0.4}
            inView={inView}
          />

          {/* Foto 7 — bawah kanan lebar */}
          <PhotoCard
            photo={photos[6]}
            className="col-span-2 row-span-1"
            delay={0.45}
            inView={inView}
          />

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <div className="flex items-center gap-2 text-earth/60 text-sm">
            <Images size={16} className="text-forest" />
            <span>23+ foto dari berbagai event</span>
          </div>
          <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
            Lihat Semua Foto <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
