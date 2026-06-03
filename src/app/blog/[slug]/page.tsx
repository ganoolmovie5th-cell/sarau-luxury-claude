import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import CtaSection from '@/components/sections/CtaSection'

// ─── Share Buttons (client component) ────────────────────────────────────────
import ShareButtons from './ShareButtons'

// ─── POST DATA ────────────────────────────────────────────────────────────────
type Post = {
  title: string; category: string; readTime: string
  date: string; author: string; emoji: string; excerpt: string
  content: Section[]
}
type Section = { type: 'intro' | 'h2' | 'p' | 'ul' | 'ol' | 'tip' | 'quote' | 'hr'; text?: string; items?: string[] }

const posts: Record<string, Post> = {
  '10-ide-team-building-kreatif': {
    title: '10 Ide Team Building Kreatif yang Wajib Dicoba Perusahaan Anda',
    category: 'Tips', readTime: '5 menit', date: '15 Jun 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '🎯',
    excerpt: 'Temukan 10 ide segar yang terbukti meningkatkan semangat dan kekompakan tim perusahaan Anda.',
    content: [
      { type: 'intro', text: 'Team building yang efektif bukan sekadar kumpul-kumpul. Program yang dirancang dengan baik dapat meningkatkan produktivitas tim hingga 25% dan mengurangi turnover karyawan secara signifikan. Berikut 10 ide yang bisa langsung Anda eksekusi!' },
      { type: 'h2', text: '1. 🚀 Amazing Race Kota' },
      { type: 'p', text: 'Jadikan kota Anda sebagai arena permainan! Tim berlomba menyelesaikan misi di berbagai titik dengan clue yang mengasyikkan. Melatih navigasi, komunikasi, dan semangat kompetisi sehat.' },
      { type: 'h2', text: '2. 🍳 Cooking Battle' },
      { type: 'p', text: 'Tidak ada yang lebih menyenangkan dari memasak bersama! Program ini melatih delegasi tugas, time management, dan tentu saja — makan enak bareng tim.' },
      { type: 'h2', text: '3. 🎨 Mural Bersama' },
      { type: 'p', text: 'Ciptakan karya seni kolektif yang bisa dipajang di kantor. Setiap anggota tim berkontribusi pada kanvas besar yang menjadi simbol kebersamaan dan kreativitas tim.' },
      { type: 'h2', text: '4. 🌱 Pertanian & Kebun Urban' },
      { type: 'p', text: 'Program farm-to-table yang unik: tim berkebun bersama, memanen hasil kebun, lalu memasak dan menikmatinya bersama. Menyenangkan, edukatif, dan penuh makna.' },
      { type: 'h2', text: '5. 🎤 Stand-Up Comedy Workshop' },
      { type: 'p', text: 'Workshop stand-up comedy melatih public speaking, kepercayaan diri, dan yang paling penting — keberanian untuk tertawa bersama rekan kerja!' },
      { type: 'h2', text: '6. 🏆 Game Show Internal' },
      { type: 'p', text: 'Rancang versi perusahaan Anda dari game show favorit — kuis pengetahuan produk, tebak gambar, atau mimik wajah. Kompetisi ringan yang mengundang tawa!' },
      { type: 'h2', text: '7. 🎯 Paintball & Airsoft' },
      { type: 'p', text: 'Aktivitas penuh adrenalin yang melatih strategi tim, komunikasi lapangan, dan tentu saja — melepas stres dengan cara yang sangat menyenangkan.' },
      { type: 'h2', text: '8. 🛶 Arung Jeram (Rafting)' },
      { type: 'p', text: 'Hadapi tantangan arus sungai bersama! Rafting melatih sinkronisasi tim, kepercayaan satu sama lain, dan keberanian menghadapi tantangan bersama.' },
      { type: 'h2', text: '9. 🌄 Trekking & Hiking' },
      { type: 'p', text: 'Perjalanan mendaki bersama membangun mentalitas "tidak ada yang ditinggal". Setiap langkah adalah metafora untuk perjalanan tim dalam menghadapi tantangan bisnis.' },
      { type: 'h2', text: '10. ❤️ Charity Challenge' },
      { type: 'p', text: 'Gabungkan team building dengan aksi sosial. Tim bersaing untuk mengumpulkan donasi atau membuat kerajinan untuk disumbangkan. Membangun empati dan kebanggaan bersama.' },
      { type: 'tip', text: 'Butuh bantuan mengeksekusi salah satu ide di atas? Tim Sarau Luxury siap membantu Anda merancang program team building yang sempurna — mulai dari konsep hingga eksekusi!' },
    ],
  },

  'destinasi-outing-terbaik-jawa-bali': {
    title: 'Destinasi Outing Terbaik di Jawa & Bali untuk Perusahaan Anda',
    category: 'Destinasi', readTime: '8 menit', date: '1 Jun 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '🗺️',
    excerpt: 'Panduan lengkap memilih destinasi outing yang tepat sesuai budget dan karakter tim Anda.',
    content: [
      { type: 'intro', text: 'Memilih destinasi outing yang tepat adalah kunci suksesnya sebuah event. Terlalu jauh bisa menguras anggaran, terlalu dekat bisa terasa kurang berkesan. Berikut rekomendasi terbaik kami berdasarkan pengalaman ratusan event.' },
      { type: 'h2', text: '🏔️ Lembang & Bandung Utara' },
      { type: 'p', text: 'Udara sejuk, pemandangan indah, dan jarak yang terjangkau dari Jakarta (3-4 jam) menjadikan Lembang sebagai destinasi favorit perusahaan. Cocok untuk gathering 1-3 hari dengan anggaran menengah.' },
      { type: 'ul', items: ['Tersedia banyak villa dan resort dengan kapasitas besar', 'Aktivitas: outbound, paintball, offroad, berkuda', 'Harga terjangkau dibanding Bali', 'Cocok untuk semua musim'] },
      { type: 'h2', text: '🌊 Anyer & Carita, Banten' },
      { type: 'p', text: 'Pantai terdekat dari Jakarta dengan view Selat Sunda yang memukau. Ideal untuk team building outdoor, water sport, dan menikmati sunset bersama tim.' },
      { type: 'h2', text: '🏝️ Bali' },
      { type: 'p', text: 'Destinasi premium yang selalu memukau. Ubud untuk suasana budaya dan alam, Nusa Dua untuk resort mewah, Seminyak untuk gaya hidup. Cocok untuk event tahunan bergengsi.' },
      { type: 'ul', items: ['Banyak pilihan venue dan hotel bintang 5', 'Aktivitas water sport lengkap di Tanjung Benoa', 'Kunjungan budaya dan spiritual di Ubud', 'Cocok untuk reward trip dan MICE event'] },
      { type: 'h2', text: '🌋 Bromo & Malang, Jawa Timur' },
      { type: 'p', text: 'Pengalaman menyaksikan sunrise di Gunung Bromo adalah momen yang tak terlupakan. Dipadukan dengan Kota Malang yang sejuk dan kuliner khasnya, destinasi ini cocok untuk tim yang suka petualangan.' },
      { type: 'h2', text: '🌿 Yogyakarta' },
      { type: 'p', text: 'Kota budaya yang kaya sejarah. Kombinasi Candi Borobudur, Prambanan, Kaliurang, dan kuliner legendaris menjadikan Jogja pilihan tepat untuk gathering bermakna sekaligus edukatif.' },
      { type: 'quote', text: 'Destinasi terbaik adalah yang sesuai dengan karakter dan tujuan tim Anda, bukan yang paling viral di media sosial.' },
      { type: 'tip', text: 'Konsultasikan kebutuhan destinasi Anda dengan tim Sarau Luxury. Kami akan merekomendasikan destinasi terbaik sesuai budget, jumlah peserta, dan tujuan event Anda.' },
    ],
  },

  'tips-sukses-family-gathering': {
    title: 'Tips Sukses Family Gathering Ratusan Peserta yang Berkesan',
    category: 'Panduan', readTime: '6 menit', date: '20 Mei 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '👨‍👩‍👧‍👦',
    excerpt: 'Step-by-step panduan menggelar family gathering besar yang berkesan dan sesuai anggaran.',
    content: [
      { type: 'intro', text: 'Family gathering adalah salah satu event paling dinantikan karyawan. Ketika berhasil, dampaknya luar biasa terhadap loyalitas dan semangat tim. Tapi ketika gagal, bisa menjadi bahan omongan bertahun-tahun. Ini panduan lengkapnya!' },
      { type: 'h2', text: '📅 6 Bulan Sebelum: Perencanaan Awal' },
      { type: 'ul', items: ['Tentukan budget total dan breakdown per pos', 'Tentukan tanggal dan pastikan tidak bentrok dengan agenda perusahaan', 'Survey destinasi dan venue yang sesuai kapasitas', 'Bentuk panitia inti dengan pembagian tugas yang jelas'] },
      { type: 'h2', text: '📋 3 Bulan Sebelum: Detail Eksekusi' },
      { type: 'ul', items: ['Konfirmasi venue dan vendor (catering, dekorasi, hiburan)', 'Rancang rundown acara yang detail', 'Siapkan aktivitas untuk semua kelompok usia (anak-anak hingga lansia)', 'Pesan seragam atau atribut event jika diperlukan'] },
      { type: 'h2', text: '🎮 Aktivitas yang Wajib Ada' },
      { type: 'p', text: 'Family gathering yang sukses butuh aktivitas yang bisa dinikmati semua orang — dari anak kecil hingga orang tua.' },
      { type: 'ul', items: ['Fun games interaktif untuk keluarga', 'Permainan anak-anak (bouncy castle, face painting)', 'Sesi foto keluarga profesional', 'Doorprize dan hadiah menarik', 'Pertunjukan hiburan (orgen tunggal, sulap)'] },
      { type: 'h2', text: '🍽️ Soal Konsumsi' },
      { type: 'p', text: 'Makanan adalah hal yang paling diingat peserta. Pastikan variasi menu cukup, porsi melimpah, dan ada pilihan untuk peserta dengan kebutuhan khusus (vegetarian, halal, alergi).' },
      { type: 'h2', text: '📸 Dokumentasi yang Baik' },
      { type: 'p', text: 'Sewa fotografer dan videografer profesional. Momen berharga ini hanya terjadi sekali setahun — pastikan terabadikan dengan baik. Pertimbangkan juga live streaming untuk anggota keluarga yang tidak bisa hadir.' },
      { type: 'quote', text: 'Family gathering yang sukses bukan soal seberapa mewah acaranya, tapi seberapa banyak kenangan indah yang tercipta untuk setiap keluarga.' },
      { type: 'tip', text: 'Sarau Luxury spesialis dalam mengorganisir family gathering dari 50 hingga 1000+ peserta. Hubungi kami untuk konsultasi gratis dan penawaran terbaik!' },
    ],
  },
  'manfaat-outbound-untuk-produktivitas': {
    title: 'Bagaimana Outbound Training Meningkatkan Produktivitas Tim Secara Nyata',
    category: 'Insight', readTime: '7 menit', date: '10 Mei 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '📈',
    excerpt: 'Riset dan fakta tentang dampak nyata program outbound terhadap kinerja tim pasca event.',
    content: [
      { type: 'intro', text: 'Banyak perusahaan masih memandang outbound sebagai "foya-foya" atau sekadar jalan-jalan. Padahal riset membuktikan sebaliknya — program outbound yang dirancang dengan baik memberikan ROI yang terukur dan nyata.' },
      { type: 'h2', text: '📊 Apa Kata Riset?' },
      { type: 'ul', items: ['Tim yang rutin mengikuti outbound training 20% lebih produktif (Gallup, 2023)', 'Tingkat retensi karyawan meningkat 40% pada perusahaan yang aktif berinvestasi di team building', 'Kolaborasi antar divisi meningkat rata-rata 30% pasca outbound', 'Tingkat kepuasan kerja naik signifikan dalam 3 bulan setelah event'] },
      { type: 'h2', text: '🧠 Mengapa Outbound Efektif?' },
      { type: 'p', text: 'Outbound menciptakan kondisi "belajar melalui pengalaman" (experiential learning). Otak manusia jauh lebih mudah menyerap pelajaran ketika dikemas dalam aktivitas fisik yang menyenangkan dibanding training di ruang kelas.' },
      { type: 'h2', text: '🎯 5 Kompetensi yang Dilatih' },
      { type: 'ol', items: ['Komunikasi efektif — lewat permainan yang butuh koordinasi verbal', 'Problem solving — lewat tantangan yang membutuhkan kreativitas', 'Leadership — lewat situasi yang memunculkan pemimpin alami', 'Trust building — lewat aktivitas yang membutuhkan kepercayaan penuh', 'Manajemen tekanan — lewat simulasi situasi penuh tekanan'] },
      { type: 'h2', text: '⏰ Kapan Waktu Terbaik?' },
      { type: 'p', text: 'Idealnya outbound dilakukan di awal tahun (untuk membangun momentum) atau di akhir kuartal setelah periode kerja intens. Hindari musim puncak bisnis perusahaan Anda.' },
      { type: 'h2', text: '📐 Berapa Frekuensi Ideal?' },
      { type: 'p', text: 'Untuk hasil optimal, lakukan program team building minimal 2 kali setahun. Satu program besar (full day/overnight) dan satu program ringan (half day). Konsistensi jauh lebih penting daripada sesekali tapi mewah.' },
      { type: 'quote', text: 'Investasi terbaik yang bisa dilakukan perusahaan adalah investasi pada manusianya. Outbound bukan biaya, tapi investasi yang menghasilkan.' },
      { type: 'tip', text: 'Sarau Luxury menyediakan program outbound training berbasis kompetensi yang dapat dikustomisasi sesuai kebutuhan spesifik tim Anda. Konsultasi gratis!' },
    ],
  },

  'perbedaan-outing-outbound': {
    title: 'Outing vs Outbound: Apa Bedanya dan Mana yang Cocok untuk Tim Anda?',
    category: 'Tips', readTime: '4 menit', date: '5 Mei 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '🤔',
    excerpt: 'Panduan memilih antara outing santai dan outbound training sesuai kebutuhan tim Anda.',
    content: [
      { type: 'intro', text: 'Sering bingung bedanya outing dan outbound? Kamu tidak sendirian. Banyak HR dan manajemen yang masih keliru menggunakan kedua istilah ini. Padahal, keduanya punya tujuan, metode, dan hasil yang berbeda.' },
      { type: 'h2', text: '🏖️ Apa itu Outing?' },
      { type: 'p', text: 'Outing adalah perjalanan bersama tim ke suatu destinasi dengan tujuan utama relaksasi, bonding, dan refreshing. Fokusnya adalah kesenangan dan kebersamaan, bukan pembelajaran terstruktur.' },
      { type: 'ul', items: ['Tujuan: Refreshing, reward, meningkatkan keakraban', 'Aktivitas: Wisata, makan bersama, games ringan', 'Suasana: Santai dan menyenangkan', 'Cocok untuk: Akhir tahun, reward karyawan, merayakan pencapaian'] },
      { type: 'h2', text: '🏋️ Apa itu Outbound?' },
      { type: 'p', text: 'Outbound (atau outbound training) adalah program terstruktur dengan tujuan mengembangkan kompetensi spesifik melalui aktivitas outdoor yang dirancang khusus. Ada fasilitator, ada debriefing, ada learning outcome yang jelas.' },
      { type: 'ul', items: ['Tujuan: Pengembangan kompetensi tim yang terukur', 'Aktivitas: Simulasi, permainan edukatif, tantangan fisik terstruktur', 'Suasana: Dinamis, kompetitif, penuh pembelajaran', 'Cocok untuk: Onboarding, problem tim, meningkatkan performa'] },
      { type: 'h2', text: '🤷 Mana yang Harus Dipilih?' },
      { type: 'p', text: 'Jawabannya tergantung tujuan Anda saat ini:' },
      { type: 'ol', items: ['Pilih Outing jika: Tim sudah solid, butuh refreshing setelah kerja keras, ingin merayakan pencapaian', 'Pilih Outbound jika: Ada masalah komunikasi, konflik antar divisi, atau target meningkatkan performa spesifik', 'Pilih Gabungan (paling efektif): Outbound di pagi hari + outing/wisata di sore hari'] },
      { type: 'quote', text: 'Pilihan terbaik adalah yang sesuai dengan kondisi dan kebutuhan nyata tim Anda saat ini, bukan yang paling populer atau paling murah.' },
      { type: 'tip', text: 'Konsultasikan dengan Sarau Luxury — kami akan membantu menganalisis kebutuhan tim Anda dan merekomendasikan program yang paling tepat dan efektif.' },
    ],
  },
  'venue-team-building-jakarta': {
    title: '15 Venue Team Building Terbaik di Bandung & Sekitarnya',
    category: 'Destinasi', readTime: '9 menit', date: '25 Apr 2025',
    author: 'Muhammad Dwi Muhaimin', emoji: '📍',
    excerpt: 'Rekomendasi venue indoor dan outdoor terbaik untuk berbagai jenis aktivitas team building.',
    content: [
      { type: 'intro', text: 'Bandung dan sekitarnya adalah surga venue team building! Dari pegunungan Lembang yang sejuk, hingga resort mewah di Ciwidey — pilihan tersedia untuk semua ukuran tim dan budget. Berikut rekomendasi terpilih kami.' },
      { type: 'h2', text: '🏔️ Area Lembang' },
      { type: 'ul', items: ['Grafika Cikole — hutan pinus untuk outbound, kapasitas hingga 500 orang', 'The Ranch Ciater — aktivitas berkuda dan outbound di alam terbuka', 'Farm House Lembang — cocok untuk family gathering dengan nuansa Eropa', 'De Ranch — kombinasi wisata edukasi dan aktivitas seru'] },
      { type: 'h2', text: '🌿 Area Ciwidey' },
      { type: 'ul', items: ['Kawah Putih & sekitarnya — pemandangan unik untuk outbound petualangan', 'Glamping di Situ Patengan — penginapan glamour di tepi danau', 'Rancabali Tea Estate — trekking di perkebunan teh yang memukau'] },
      { type: 'h2', text: '🏙️ Dalam Kota Bandung' },
      { type: 'ul', items: ['Hotel Savoy Homann — venue meeting klasik bersejarah', 'Trans Luxury Hotel — untuk event MICE premium', 'Harris Hotel Bandung — mid-range dengan fasilitas lengkap'] },
      { type: 'h2', text: '🌊 Area Pantai Barat (Pelabuhan Ratu/Pangandaran)' },
      { type: 'ul', items: ['Pangandaran — pantai tenang cocok untuk outbound dan gathering', 'Pelabuhan Ratu — dekat dari Bandung, aktivitas surfing dan beach games', 'Cimaja Beach — spot surfing kelas dunia untuk tim adventurous'] },
      { type: 'h2', text: '💡 Tips Memilih Venue' },
      { type: 'ol', items: ['Sesuaikan kapasitas venue dengan jumlah peserta (tambah 20% buffer)', 'Pastikan akses transportasi mudah dan terjangkau', 'Cek fasilitas: aula, lapangan outbound, penginapan, catering', 'Kunjungi venue langsung sebelum memutuskan', 'Minta referensi dari event sebelumnya'] },
      { type: 'quote', text: 'Venue yang tepat adalah yang membuat peserta merasa nyaman sejak tiba dan tidak mau pulang saat acara selesai.' },
      { type: 'tip', text: 'Sarau Luxury sudah bekerja sama dengan ratusan venue terbaik di Jawa Barat. Kami bantu negosiasi harga terbaik dan pastikan venue sesuai kebutuhan event Anda!' },
    ],
  },
}


// ─── RELATED POSTS ────────────────────────────────────────────────────────────
function getRelated(currentSlug: string) {
  return Object.entries(posts)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3)
    .map(([slug, post]) => ({ slug, ...post }))
}

// ─── METADATA ─────────────────────────────────────────────────────────────────
type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  return {
    title: post ? `${post.title} | Sarau Luxury Blog` : 'Blog Post',
    description: post?.excerpt || '',
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

// ─── CONTENT RENDERER ────────────────────────────────────────────────────────
function renderContent(sections: Section[]) {
  return sections.map((s, i) => {
    switch (s.type) {
      case 'intro':
        return (
          <p key={i} className="text-lg text-earth/80 leading-relaxed font-medium border-l-4 border-forest/30 pl-5 py-1 bg-forest/5 rounded-r-xl mb-8">
            {s.text}
          </p>
        )
      case 'h2':
        return (
          <h2 key={i} className="font-display text-2xl font-bold text-bark mt-10 mb-4 flex items-center gap-2">
            {s.text}
          </h2>
        )
      case 'p':
        return <p key={i} className="text-earth/80 leading-relaxed mb-5">{s.text}</p>
      case 'ul':
        return (
          <ul key={i} className="space-y-2 mb-6 ml-2">
            {s.items?.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-earth/80">
                <span className="w-5 h-5 rounded-full bg-forest/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest block" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )
      case 'ol':
        return (
          <ol key={i} className="space-y-2 mb-6 ml-2">
            {s.items?.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-earth/80">
                <span className="w-6 h-6 rounded-full bg-forest text-cream flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  {j + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        )
      case 'quote':
        return (
          <blockquote key={i} className="my-8 px-6 py-5 bg-bark/5 border-l-4 border-bark rounded-r-2xl">
            <p className="text-bark font-semibold text-lg italic leading-relaxed">"{s.text}"</p>
          </blockquote>
        )
      case 'tip':
        return (
          <div key={i} className="my-8 p-5 bg-forest/8 border border-forest/20 rounded-2xl flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <p className="text-forest font-medium leading-relaxed text-sm">{s.text}</p>
          </div>
        )
      case 'hr':
        return <hr key={i} className="my-8 border-earth/15" />
      default:
        return null
    }
  })
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: Props) {
  const post    = posts[params.slug]
  const related = getRelated(params.slug)

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
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <div className="pt-36 pb-12 bg-gradient-to-b from-white to-cream">
        <div className="container-tight max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-forest text-sm font-semibold mb-8 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Blog
          </Link>

          {/* Category + read time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 text-forest text-sm font-semibold">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-earth/50 text-sm">
              <Clock size={13} /> {post.readTime} baca
            </span>
          </div>

          {/* Emoji + Title */}
          <div className="text-7xl mb-5 leading-none">{post.emoji}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-bark mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-earth/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-bold">
                {post.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="text-bark font-semibold text-sm">{post.author}</div>
                <div className="text-earth/50 text-xs">Sarau Luxury</div>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-earth/50 text-sm">
              <Calendar size={13} /> {post.date}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="pb-16">
        <div className="container-tight max-w-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-earth/8">
            {renderContent(post.content)}
          </div>

          {/* Share + CTA */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-earth/8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="font-semibold text-bark mb-1">Artikel ini bermanfaat?</div>
                <div className="text-earth/60 text-sm">Bagikan ke rekan kerja Anda!</div>
              </div>
              <Link href="/contact" className="btn-primary whitespace-nowrap flex items-center gap-2">
                Konsultasi Gratis <ArrowRight size={15} />
              </Link>
            </div>

            {/* Share buttons */}
            <div className="mt-5 pt-5 border-t border-earth/10">
              <div className="text-xs font-semibold text-earth/50 uppercase tracking-widest mb-3">Bagikan artikel ini</div>
              <ShareButtons />
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <div className="pb-20">
          <div className="container-tight max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-bark mb-6">Artikel Terkait</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(({ slug, title, emoji, category, readTime }) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="bg-white rounded-2xl border border-earth/8 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className="text-3xl mb-3">{emoji}</div>
                  <span className="text-xs font-semibold text-forest bg-forest/10 px-2 py-0.5 rounded-full">{category}</span>
                  <h4 className="font-semibold text-bark text-sm leading-snug mt-2 mb-2 group-hover:text-forest transition-colors line-clamp-2">
                    {title}
                  </h4>
                  <span className="flex items-center gap-1 text-xs text-earth/50">
                    <Clock size={10} /> {readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CtaSection />
    </div>
  )
}
