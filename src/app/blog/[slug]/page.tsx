import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import CtaSection from '@/components/sections/CtaSection'

// Static data — replace with Sanity fetch per slug
const posts: Record<string, {
  title: string; category: string; readTime: string
  date: string; author: string; emoji: string; content: string
}> = {
  '10-ide-team-building-kreatif': {
    title: '10 Ide Team Building Kreatif yang Wajib Dicoba Perusahaan Anda',
    category: 'Tips',
    readTime: '5 menit',
    date: '15 Jun 2025',
    author: 'Sari Dewi',
    emoji: '🎯',
    content: `
Team building yang efektif bukan sekadar kumpul-kumpul. Program yang dirancang dengan baik
dapat meningkatkan produktivitas tim hingga 25% dan mengurangi turnover karyawan secara signifikan.

## 1. Escape Room Virtual

Di era hybrid work, escape room virtual menjadi pilihan cerdas. Tim bisa bermain dari mana saja,
memecahkan teka-teki bersama, dan melatih komunikasi serta problem-solving secara real-time.

## 2. Cooking Battle

Tidak ada yang lebih menyenangkan dari memasak bersama! Program ini melatih delegasi tugas,
time management, dan tentu saja — makan enak bareng tim. Bisa diadakan di dapur profesional
maupun open kitchen di venue pilihan.

## 3. Amazing Race Kota

Jadikan kota Anda sebagai arena permainan! Tim berlomba menyelesaikan misi di berbagai titik
kota dengan clue yang mengasyikkan. Melatih navigasi, komunikasi, dan semangat kompetisi sehat.

## 4. Mural Bersama

Ciptakan karya seni kolektif yang bisa dipajang di kantor. Setiap anggota tim berkontribusi
pada kanvas besar yang menjadi simbol kebersamaan dan kreativitas tim.

## 5. Pertanian & Kebun Urban

Program farm-to-table yang unik: tim berkebun bersama, memanen hasil kebun, lalu memasak
dan menikmatinya bersama. Menyenangkan, edukatif, dan penuh makna.

## 6. Stand-Up Comedy Workshop

Berani tampil di depan rekan kerja? Workshop stand-up comedy melatih public speaking,
kepercayaan diri, dan yang paling penting — keberanian untuk tertawa bersama!

## 7. Flash Mob Terencana

Persiapkan flash mob yang mengejutkan! Proses latihannya yang seru sudah menjadi team building
itu sendiri. Hasilnya bisa jadi konten viral untuk media sosial perusahaan.

## 8. Charity Challenge

Gabungkan team building dengan aksi sosial. Tim bersaing untuk mengumpulkan donasi atau
membuat kerajinan untuk disumbangkan. Membangun empati dan kebanggaan bersama.

## 9. Treasure Hunt Digital

Gunakan aplikasi AR (Augmented Reality) untuk membuat treasure hunt yang imersif.
Tim mencari "harta karun" virtual di lokasi nyata menggunakan smartphone mereka.

## 10. Game Show Internal

Rancang versi perusahaan Anda dari game show favorit — kuis pengetahuan produk,
tebak gambar, atau mimik wajah. Kompetisi ringan yang mengundang tawa!

---

*Butuh bantuan mengeksekusi salah satu ide di atas? Tim Sarau Luxury siap membantu Anda
merancang program team building yang sempurna untuk tim Anda.*
    `,
  },
}

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  return {
    title: post?.title || 'Blog Post',
    description: post?.content.slice(0, 160),
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-32 bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="font-display text-3xl font-bold text-bark mb-3">Post Tidak Ditemukan</h1>
          <p className="text-earth/70 mb-6">Artikel yang Anda cari belum tersedia.</p>
          <Link href="/blog" className="btn-primary">← Kembali ke Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <div className="pt-36 pb-16 bg-cream">
        <div className="container-tight">
          <Link href="/blog" className="inline-flex items-center gap-2 text-forest text-sm font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Kembali ke Blog
          </Link>

          <div className="text-7xl mb-6">{post.emoji}</div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-forest/10 text-forest text-sm font-semibold mb-5">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-bark mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-earth/60 text-sm">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-24 bg-cream">
        <div className="container-tight">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-earth/8 prose prose-lg max-w-none
            prose-headings:font-display prose-headings:text-bark
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-bark prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-earth/80 prose-p:leading-relaxed
            prose-strong:text-bark
            prose-a:text-forest prose-a:no-underline hover:prose-a:underline
            prose-hr:border-earth/15">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>
              if (line.startsWith('---')) return <hr key={i} />
              if (line.startsWith('*') && line.endsWith('*')) return <p key={i}><em>{line.slice(1, -1)}</em></p>
              if (line.trim() === '') return null
              return <p key={i}>{line}</p>
            })}
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  )
}
