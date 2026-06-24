'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MessageCircle, Search, FileText,
  CheckCircle, Settings, PartyPopper, BarChart3,
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Konsultasi Gratis',
    desc: 'Hubungi kami via WhatsApp, form, atau telepon. Ceritakan kebutuhan event, estimasi peserta, dan konsep yang diinginkan. Gratis, tanpa komitmen apapun.',
    tag: 'Mulai di sini',
  },
  {
    number: '02',
    icon: Search,
    title: 'Survei & Analisis',
    desc: 'Tim kami menganalisis kebutuhan Anda, survei lokasi jika diperlukan, dan menyiapkan konsep program yang paling sesuai dengan tujuan serta karakter tim.',
    tag: '1–2 hari',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Proposal & Penawaran',
    desc: 'Proposal detail dikirim dalam 24 jam kerja — lengkap dengan rincian program, fasilitas, timeline, dan harga transparan tanpa biaya tersembunyi.',
    tag: '24 jam kerja',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Konfirmasi & DP',
    desc: 'MOU ditandatangani bersama, DP 30–50% untuk booking slot. Setelah konfirmasi, persiapan resmi dimulai sesuai jadwal yang telah disepakati.',
    tag: 'Booking terkonfirmasi',
  },
  {
    number: '05',
    icon: Settings,
    title: 'Persiapan Matang',
    desc: 'Koordinasi vendor, konfirmasi venue, briefing tim fasilitator & game master, serta gladi teknis. Semua detail dipersiapkan agar hari H berjalan sempurna.',
    tag: '1–4 minggu',
  },
  {
    number: '06',
    icon: PartyPopper,
    title: 'Hari H Berlangsung',
    desc: 'Tim profesional kami mengeksekusi setiap detail — dari registrasi peserta, ice breaking, aktivitas utama, hingga closing ceremony dan makan bersama.',
    tag: 'Hari event',
  },
  {
    number: '07',
    icon: BarChart3,
    title: 'Evaluasi & Dokumentasi',
    desc: 'Laporan event lengkap beserta foto & video dokumentasi dikirim dalam 7 hari pasca event. Feedback Anda membantu kami terus meningkatkan kualitas layanan.',
    tag: 'Pasca event',
  },
]

export default function ProcessTimeline() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true, initialInView: true })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 50%, #95D5B2 0%, transparent 40%), radial-gradient(circle at 85% 20%, #F4A261 0%, transparent 35%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">🗺️ Cara Kerja</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">
            Dari Konsultasi hingga{' '}
            <span className="gradient-text">Event Berkesan</span>
          </h2>
          <p className="text-earth/70 text-lg max-w-xl mx-auto">
            Proses terstruktur dan transparan — Anda tahu persis apa yang terjadi di setiap tahap.
          </p>
        </motion.div>

        {/* Timeline — desktop: alternating, mobile: vertical */}
        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest/20 via-forest/40 to-forest/10 -translate-x-px" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0
              const delay = i * 0.1

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-0 md:gap-8 mb-6 md:mb-0
                    ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                    flex-row
                  `}
                >
                  {/* Card — takes half width on desktop */}
                  <div className={`
                    flex-1 md:max-w-[calc(50%-2.5rem)]
                    ${isLeft ? 'md:text-right' : 'md:text-left'}
                    md:py-6
                  `}>
                    <div className={`
                      bg-cream rounded-2xl p-6 border border-earth/10
                      hover:border-forest/25 hover:shadow-lg hover:shadow-forest/8
                      transition-all duration-300 group
                      ${isLeft ? 'md:ml-auto' : ''}
                    `}>
                      {/* Tag */}
                      <span className={`
                        inline-flex text-[10px] font-bold uppercase tracking-widest
                        px-2.5 py-1 rounded-full mb-3
                        ${i % 2 === 0 ? 'bg-forest/10 text-forest' : 'bg-sun/15 text-earth'}
                      `}>
                        {step.tag}
                      </span>

                      <h3 className="font-display font-bold text-xl text-bark mb-2 group-hover:text-forest transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-earth/70 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative flex-shrink-0 flex flex-col items-center z-10
                    mr-4 md:mr-0
                    md:w-20 md:flex-none
                  ">
                    {/* Connecting line segment (mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-forest/15 -z-10" />

                    {/* Node circle */}
                    <div className={`
                      w-12 h-12 md:w-14 md:h-14 rounded-full flex flex-col items-center justify-center
                      shadow-lg flex-shrink-0 border-2
                      ${i % 2 === 0
                        ? 'bg-forest border-forest/30 shadow-forest/20'
                        : 'bg-sun border-sun/30 shadow-sun/20'}
                    `}>
                      <Icon
                        size={18}
                        className={i % 2 === 0 ? 'text-cream' : 'text-bark'}
                      />
                    </div>

                    {/* Step number */}
                    <span className={`
                      text-[10px] font-bold mt-1 tracking-widest
                      ${i % 2 === 0 ? 'text-forest' : 'text-earth/60'}
                    `}>
                      {step.number}
                    </span>
                  </div>

                  {/* Empty half (desktop) */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-earth/60 text-sm mb-5">
            Rata-rata waktu dari konsultasi hingga eksekusi: <strong className="text-bark">2–4 minggu</strong>
          </p>
          <Link href="/booking" className="btn-primary inline-flex">
            Mulai Konsultasi Gratis →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
