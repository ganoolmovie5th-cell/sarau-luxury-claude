'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Target, Heart } from 'lucide-react'

const values = [
  { icon: Heart,   title: 'Passion',      desc: 'Kami mencintai pekerjaan kami dan menuangkan energi terbaik di setiap event.' },
  { icon: Target,  title: 'Precision',    desc: 'Detail adalah segalanya. Setiap elemen event direncanakan dengan teliti.' },
  { icon: Eye,     title: 'Partnership',  desc: 'Klien bukan sekadar pelanggan — mereka adalah mitra jangka panjang kami.' },
]

export default function MissionVision() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            { label: '🎯 Misi', title: 'Misi Kami', text: 'Menghadirkan pengalaman outing dan outbound berkualitas tinggi yang tidak hanya menyenangkan, tetapi juga memberi dampak nyata pada pertumbuhan tim dan budaya perusahaan klien kami.' },
            { label: '👁️ Visi', title: 'Visi Kami', text: 'Menjadi event organizer outing & outbound nomor satu di Indonesia yang paling dipercaya dan dicintai oleh perusahaan dari berbagai industri pada tahun 2030.' },
          ].map(({ label, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earth/8"
            >
              <span className="section-tag mb-5 inline-flex">{label}</span>
              <h3 className="font-display text-2xl font-bold text-bark mb-4">{title}</h3>
              <p className="text-earth/80 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bark">
            Nilai-Nilai yang Kami <span className="gradient-text">Pegang</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-7">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center p-8 bg-white rounded-3xl shadow-sm border border-earth/8 group hover:shadow-forest/15 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-forest/10 group-hover:bg-forest flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <Icon size={28} className="text-forest group-hover:text-cream transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-bark mb-3">{title}</h3>
              <p className="text-earth/70 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
