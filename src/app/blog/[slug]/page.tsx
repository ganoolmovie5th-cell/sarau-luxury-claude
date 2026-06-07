import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import CtaSection from '@/components/sections/CtaSection'

// ─── Share Buttons (client component) ────────────────────────────────────────
import ShareButtons from './ShareButtons'

// ─── Cover images per artikel (sama dengan BlogListPage) ─────────────────────
const coverImages: Record<string, string> = {
  'cara-membuat-konsep-gathering-unik':             'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80',
  'tips-hemat-budget-outing-perusahaan':            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80',
  'aktivitas-outbound-terbaik-untuk-leadership':    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200&q=80',
  'panduan-rafting-untuk-corporate':                'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=1200&q=80',
  'cara-mengatasi-konflik-tim-dengan-team-building':'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80',
  'checklist-persiapan-outing-perusahaan':          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
  'perbedaan-family-gathering-company-gathering':   'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=80',
  'destinasi-wisata-outbound-sekitar-banten':       'https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=1200&q=80',
  'tips-agar-peserta-antusias-selama-outbound':     'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
  'manfaat-paintball-untuk-teamwork':               'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&q=80',
  'cara-memilih-eo-yang-tepat':                     'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  '10-ide-team-building-kreatif':                   'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80',
  'destinasi-outing-terbaik-jawa-bali':             'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
  'tips-sukses-family-gathering':                   'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
  'manfaat-outbound-untuk-produktivitas':           'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
  'perbedaan-outing-outbound':                      'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=1200&q=80',
  'venue-team-building-bandung':                    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
}
const DEFAULT_COVER = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80'

// ─── POST DATA ────────────────────────────────────────────────────────────────
type Post = {
  title: string; category: string; readTime: string
  date: string; author: string; emoji: string; excerpt: string
  content: Section[]
}
type Section = { type: 'intro' | 'h2' | 'p' | 'ul' | 'ol' | 'tip' | 'quote' | 'hr'; text?: string; items?: string[] }

const posts: Record<string, Post> = {
  // ── Artikel baru (update mingguan) ──
  'cara-membuat-konsep-gathering-unik': {
    title: 'Cara Membuat Konsep Gathering Perusahaan yang Unik & Berkesan',
    category: 'Panduan', readTime: '6 menit', date: '12 Jun 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '💡',
    excerpt: 'Bosan dengan konsep gathering yang itu-itu saja? Ini panduan lengkap membuat konsep yang segar dan tak terlupakan.',
    content: [
      { type: 'intro', text: 'Gathering tahunan perusahaan seringkali terjebak di pola yang sama — makan bersama, games standar, foto-foto, selesai. Padahal, dengan sedikit kreativitas, gathering bisa menjadi momen yang benar-benar berkesan dan berdampak pada tim.' },
      { type: 'h2', text: '1. 🎨 Tentukan Tema yang Kuat' },
      { type: 'p', text: 'Tema adalah fondasi dari seluruh konsep gathering. Tema yang kuat akan memandu setiap keputusan — dari dekorasi, dress code, games, hingga menu makanan. Pilih tema yang relevan dengan identitas perusahaan atau tren saat ini.' },
      { type: 'ul', items: ['Olimpiade Perusahaan — kompetisi antar divisi dengan semangat sportivitas', 'Around the World — setiap meja atau tim mewakili negara berbeda', 'Back to Nature — tema alam dengan aktivitas outdoor edukatif', 'Decade Challenge — nostalgia per dekade (70an, 80an, 90an)', 'Superhero Corporate — setiap tim punya "kekuatan super" sendiri'] },
      { type: 'h2', text: '2. 🗺️ Pilih Lokasi yang Mendukung Tema' },
      { type: 'p', text: 'Lokasi bukan hanya soal tempat, tapi soal pengalaman. Lokasi yang tepat akan memperkuat tema dan menciptakan momen foto yang memorable. Pertimbangkan villa di pegunungan untuk tema alam, atau convention hall untuk tema formal.' },
      { type: 'h2', text: '3. 🎮 Rancang Aktivitas yang Melibatkan Semua' },
      { type: 'p', text: 'Hindari aktivitas yang hanya bisa dinikmati sebagian peserta. Rancang rangkaian kegiatan yang inklusif — dari yang santai (untuk yang kurang aktif) hingga yang menantang (untuk yang suka tantangan).' },
      { type: 'ol', items: ['Ice breaking ringan di pagi hari untuk mencairkan suasana', 'Kompetisi tim yang membutuhkan strategi dan kerjasama', 'Sesi kreatif atau workshop singkat yang relevan', 'Gala dinner atau BBQ malam hari sebagai penutup'] },
      { type: 'h2', text: '4. 📸 Siapkan Momen Foto yang Instagramable' },
      { type: 'p', text: 'Di era media sosial, momen foto adalah bagian tak terpisahkan dari gathering. Siapkan spot foto khusus, props sesuai tema, dan fotografer profesional yang bisa menangkap momen spontan.' },
      { type: 'h2', text: '5. 🎁 Buat Kenang-kenangan yang Bermakna' },
      { type: 'p', text: 'Souvenir bukan sekadar formalitas. Buat kenang-kenangan yang personal dan bermanfaat — foto polaroid tim, totebag dengan nama peserta, atau sertifikat penghargaan yang lucu tapi bermakna.' },
      { type: 'quote', text: 'Gathering yang berkesan bukan soal seberapa mahal budgetnya, tapi seberapa banyak perhatian dan kreativitas yang dituangkan ke dalamnya.' },
      { type: 'tip', text: 'Tim Sarau Luxury siap membantu merancang konsep gathering yang unik dan disesuaikan dengan karakter perusahaan Anda. Konsultasi gratis, hubungi kami sekarang!' },
    ],
  },
  'tips-hemat-budget-outing-perusahaan': {
    title: 'Tips Hemat Budget Outing Perusahaan Tanpa Mengurangi Keseruan',
    category: 'Tips', readTime: '5 menit', date: '5 Jun 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '💰',
    excerpt: 'Strategi cerdas mengoptimalkan anggaran outing agar tetap seru, berkesan, dan efisien.',
    content: [
      { type: 'intro', text: 'Budget terbatas bukan alasan untuk menggelar outing yang membosankan. Dengan perencanaan yang cerdas, outing berkesan tetap bisa terwujud tanpa menguras kas perusahaan.' },
      { type: 'h2', text: '💡 1. Booking Jauh-Jauh Hari' },
      { type: 'p', text: 'Booking venue dan transportasi 2-3 bulan sebelumnya bisa menghemat 20-30% dibanding booking mendadak. Selain lebih murah, pilihan lokasi juga lebih banyak.' },
      { type: 'h2', text: '🗓️ 2. Pilih Hari Kerja atau Low Season' },
      { type: 'p', text: 'Hindari weekend dan musim liburan. Outing di hari Senin-Kamis atau di luar periode Juli-Agustus dan Desember bisa menghemat biaya akomodasi hingga 40%.' },
      { type: 'h2', text: '🚌 3. Sewa Bus Bersama vs Urus Sendiri' },
      { type: 'p', text: 'Menyewa bus bersama jauh lebih hemat dan praktis dibanding reimburse kendaraan pribadi. Hitung total biaya dengan kalkulasi per orang — biasanya bus menang jauh.' },
      { type: 'ul', items: ['Bus 35 seat: Rp 4 juta/unit (Rp 114rb/orang)', 'Bus 50 seat: Rp 5,5 juta/unit (Rp 110rb/orang)', 'Bandingkan dengan bensin + tol kendaraan pribadi yang bisa 3-5x lebih mahal'] },
      { type: 'h2', text: '🎮 4. Pilih Paket All-In vs Satuan' },
      { type: 'p', text: 'Paket gathering all-in seperti Gathering Silver (Rp 525rb/pax) sudah include penginapan, makan, dan aktivitas. Jika dihitung satuan, bisa 40-60% lebih mahal.' },
      { type: 'h2', text: '📸 5. Batasi Add-On yang Tidak Perlu' },
      { type: 'p', text: 'Fokus pada kualitas pengalaman, bukan kuantitas aktivitas. 2-3 aktivitas utama yang bagus lebih berkesan dari 6 aktivitas biasa-biasa saja.' },
      { type: 'tip', text: 'Sarau Luxury memiliki berbagai paket fleksibel yang bisa disesuaikan dengan budget Anda. Hubungi kami untuk simulasi budget gratis!' },
    ],
  },
  'aktivitas-outbound-terbaik-untuk-leadership': {
    title: 'Aktivitas Outbound Terbaik untuk Melatih Jiwa Leadership Tim',
    category: 'Insight', readTime: '7 menit', date: '29 Mei 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🦁',
    excerpt: 'Simulasi dan game outbound yang terbukti ampuh memunculkan pemimpin alami dalam tim Anda.',
    content: [
      { type: 'intro', text: 'Setiap tim menyimpan calon pemimpin yang belum tersadar. Program outbound yang dirancang dengan tepat bisa menjadi "laboratorium kepemimpinan" — memunculkan potensi leadership yang selama ini tersembunyi di balik rutinitas kantor.' },
      { type: 'h2', text: '🏆 1. Survival Challenge' },
      { type: 'p', text: 'Tim dihadapkan pada skenario "terdampar" dengan sumber daya terbatas. Aktivitas ini memaksa munculnya pemimpin alami yang bisa mengambil keputusan cepat, mendelegasikan tugas, dan menjaga semangat tim.' },
      { type: 'h2', text: '🗺️ 2. Treasure Hunt dengan Twist' },
      { type: 'p', text: 'Bukan sekadar cari harta — setiap clue membutuhkan keputusan strategis. Satu orang tidak bisa menyelesaikan semua, memaksa rotasi kepemimpinan dan mengajarkan kapan harus memimpin dan kapan harus mengikuti.' },
      { type: 'h2', text: '🏗️ 3. Bridge Building Challenge' },
      { type: 'p', text: 'Tim harus membangun jembatan dari material terbatas yang bisa menopang beban tertentu. Melatih planning, resource management, dan kemampuan leader mendengar input anggota tim.' },
      { type: 'h2', text: '⛺ 4. Blind Trail Hike' },
      { type: 'p', text: 'Sebagian anggota tim ditutup matanya, sebagian lagi jadi pemandu. Bergantian peran ini membangun empati, komunikasi verbal yang efektif, dan kepercayaan antara pemimpin dan yang dipimpin.' },
      { type: 'h2', text: '🎯 5. Strategi Perang (War Game Simulation)' },
      { type: 'p', text: 'Simulasi kompetisi antar tim dengan skenario bisnis atau militer. Sangat efektif untuk melatih strategic thinking, adaptasi cepat, dan kemampuan memotivasi tim saat tekanan tinggi.' },
      { type: 'h2', text: '📊 Mengapa Ini Efektif?' },
      { type: 'p', text: 'Situasi luar biasa (extraordinary situation) memunculkan perilaku yang tidak akan muncul di meeting room. Otak beroperasi berbeda saat ada tantangan fisik — lebih kreatif, lebih instinktif, lebih authentic.' },
      { type: 'quote', text: 'Leadership sejati tidak bisa diajarkan di kelas. Ia hanya bisa dimunculkan melalui pengalaman nyata yang menantang.' },
      { type: 'tip', text: 'Sarau Luxury merancang program outbound berbasis kompetensi kepemimpinan yang dapat dikustomisasi untuk kebutuhan industri dan level jabatan tim Anda.' },
    ],
  },
  'panduan-rafting-untuk-corporate': {
    title: 'Panduan Lengkap Rafting untuk Acara Corporate — Aman & Seru',
    category: 'Panduan', readTime: '6 menit', date: '22 Mei 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🚣',
    excerpt: 'Semua yang perlu Anda tahu sebelum memilih rafting sebagai aktivitas outbound perusahaan.',
    content: [
      { type: 'intro', text: 'Rafting adalah salah satu aktivitas outbound paling populer — adrenalin tinggi, teamwork intensif, dan kenangan yang bertahan lama. Tapi sebelum booking, ada beberapa hal penting yang perlu Anda ketahui agar acara berjalan aman dan menyenangkan.' },
      { type: 'h2', text: '🌊 Jenis Rafting yang Tersedia' },
      { type: 'ul', items: ['Rafting 11 km — pengalaman penuh dengan berbagai jeram, cocok untuk yang mau tantangan lebih', 'Mini Rafting — jarak lebih pendek, cocok untuk pemula atau yang kurang suka tantangan besar', 'Body Rafting — tanpa perahu, langsung arung mengikuti arus melewati 3 curug, paling seru!'] },
      { type: 'h2', text: '✅ Syarat & Ketentuan Peserta' },
      { type: 'ul', items: ['Usia minimal 10 tahun, tidak ada batasan atas untuk rafting biasa', 'Tidak dalam kondisi hamil, baru operasi, atau punya penyakit jantung', 'Bisa berenang dasar (tidak harus jago — ada pelampung)', 'Kondisi fisik prima — tidak sedang demam atau cedera'] },
      { type: 'h2', text: '🎒 Persiapan yang Perlu Dibawa' },
      { type: 'ol', items: ['Baju yang tidak keberatan basah (bawa ganti!)', 'Sandal gunung atau sepatu yang aman untuk air', 'Tabir surya SPF 50+ (untuk rafting siang)', 'Tas kedap air untuk HP dan barang berharga', 'Handuk dan pakaian ganti yang cukup'] },
      { type: 'h2', text: '💰 Berapa Biayanya?' },
      { type: 'p', text: 'Paket rafting Sarau Luxury sudah include 1x makan, 1x snack, kelapa muda, transportasi saat rafting, pemandu, rescue, perlengkapan rafting, dan dokumentasi. Durasi sekitar 3 jam.' },
      { type: 'ul', items: ['Rafting 11 km: Rp 250.000/pax (min. 5 pax)', 'Body Rafting: Rp 225.000/orang (min. 5 pax)', 'Mini Rafting: Rp 125.000/orang (min. 5 pax)'] },
      { type: 'h2', text: '⚠️ Tips Keamanan' },
      { type: 'ul', items: ['Selalu ikuti instruksi guide — mereka sudah berpengalaman', 'Jangan lepas pelampung selama di sungai', 'Pegang dayung dengan kedua tangan saat memasuki jeram', 'Jika terjatuh: posisi telentang, kaki ke depan, jangan panik'] },
      { type: 'quote', text: 'Rafting bukan hanya soal menaklukkan arus sungai — ini tentang belajar saling percaya dan berkoordinasi di tengah situasi yang tidak pasti.' },
      { type: 'tip', text: 'Sarau Luxury menyediakan paket rafting dengan pemandu berlisensi dan peralatan safety standar internasional. Minimal 5 pax, bisa dikombinasikan dengan paket gathering!' },
    ],
  },
  // ── 8 Artikel Terjadwal (19 Jun – 31 Jul 2026) ──
  'cara-mengatasi-konflik-tim-dengan-team-building': {
    title: 'Cara Mengatasi Konflik Tim dengan Program Team Building yang Tepat',
    category: 'Insight', readTime: '6 menit', date: '19 Jun 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🤝',
    excerpt: 'Konflik antar anggota tim adalah hal wajar, tapi jika dibiarkan bisa merusak produktivitas. Team building bisa jadi solusinya.',
    content: [
      { type: 'intro', text: 'Konflik di tempat kerja tidak selalu buruk — namun jika tidak dikelola, bisa meracuni seluruh dinamika tim. Program team building yang dirancang khusus untuk resolusi konflik terbukti lebih efektif dari sekadar mediasi formal.' },
      { type: 'h2', text: '🔍 Kenali Sumber Konflik' },
      { type: 'p', text: 'Sebelum memilih program, penting untuk memahami akar konflik. Apakah karena miskomunikasi? Persaingan tidak sehat? Perbedaan nilai? Atau beban kerja yang tidak merata? Setiap akar masalah membutuhkan pendekatan yang berbeda.' },
      { type: 'ul', items: ['Miskomunikasi → program komunikasi efektif & active listening', 'Ego antar divisi → simulasi interdependensi tim', 'Persaingan tidak sehat → aktivitas kolaboratif tanpa kompetisi', 'Kurang rasa saling kenal → social bonding yang informal'] },
      { type: 'h2', text: '🎯 Aktivitas yang Terbukti Efektif' },
      { type: 'ul', items: ['Blindfold Trust Walk — membangun kepercayaan fisik antar anggota', 'Escape Room Tim — memaksa kolaborasi lintas hierarki', 'Cooking Challenge Bersama — komunikasi tanpa tekanan', 'Storytelling Circle — berbagi perspektif masing-masing anggota'] },
      { type: 'h2', text: '⏱️ Kapan Waktu yang Tepat?' },
      { type: 'p', text: 'Jangan tunggu konflik memuncak baru bertindak. Program pencegahan jauh lebih efektif dan murah dibanding program pemulihan. Idealnya jadwalkan team building setiap 6 bulan sekali sebagai maintenance hubungan tim.' },
      { type: 'h2', text: '📊 Seberapa Efektif?' },
      { type: 'p', text: 'Studi menunjukkan perusahaan yang rutin mengadakan team building mengalami penurunan konflik antar karyawan hingga 40% dan peningkatan kepuasan kerja sebesar 25% dalam 3 bulan setelah program.' },
      { type: 'quote', text: 'Tim yang solid bukan yang tidak pernah konflik, tapi yang tahu cara menyelesaikan konflik dengan dewasa dan cepat.' },
      { type: 'tip', text: 'Sarau Luxury menyediakan program team building khusus resolusi konflik yang dirancang bersama fasilitator berpengalaman. Konsultasi kebutuhan tim Anda sekarang.' },
    ],
  },
  'checklist-persiapan-outing-perusahaan': {
    title: 'Checklist Lengkap Persiapan Outing Perusahaan — Tidak Ada yang Terlewat',
    category: 'Panduan', readTime: '7 menit', date: '26 Jun 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '✅',
    excerpt: 'Panduan checklist step-by-step agar persiapan outing perusahaan Anda berjalan mulus dari awal hingga hari H.',
    content: [
      { type: 'intro', text: 'Event outing yang sukses dimulai dari perencanaan yang matang. Banyak panitia yang kewalahan karena tidak punya sistem checklist yang jelas. Ini panduan lengkap yang sudah kami racik dari ratusan event yang kami tangani.' },
      { type: 'h2', text: '📅 3 Bulan Sebelum Event' },
      { type: 'ul', items: ['Tentukan tujuan dan tema outing', 'Survey dan fix lokasi/venue', 'Tentukan anggaran total & breakdown per pos', 'Bentuk panitia dengan job desc yang jelas', 'Buka pendaftaran peserta & kumpulkan data (nama, ukuran kaos, alergi makanan)'] },
      { type: 'h2', text: '📝 1 Bulan Sebelum Event' },
      { type: 'ul', items: ['Konfirmasi booking venue & vendor', 'Desain dan cetak atribut (kaos, name tag, backdrop)', 'Finalisasi rundown acara menit per menit', 'Brief seluruh vendor & fasilitator', 'Siapkan games dan perlengkapan aktivitas', 'Konfirmasi transportasi (bus, driver, rute)'] },
      { type: 'h2', text: '📋 1 Minggu Sebelum Event' },
      { type: 'ul', items: ['Kirim itinerary & packing list ke semua peserta', 'Cek semua perlengkapan: P3K, sound system, proyektor', 'Konfirmasi ulang jumlah peserta final ke vendor catering', 'Briefing panitia terakhir', 'Siapkan dana cash untuk kebutuhan mendadak'] },
      { type: 'h2', text: '🌅 Hari H' },
      { type: 'ul', items: ['Tiba di lokasi minimal 1 jam sebelum peserta', 'Cek layout, dekorasi, dan sound system', 'Pastikan semua vendor sudah on-site', 'Siapkan absensi & name tag peserta', 'Dokumentasi dari awal hingga akhir acara'] },
      { type: 'h2', text: '🎬 Setelah Event' },
      { type: 'ul', items: ['Distribusikan dokumentasi foto/video ke peserta', 'Survey kepuasan peserta', 'Evaluasi panitia: apa yang berjalan baik, apa yang perlu diperbaiki', 'Selesaikan pembayaran vendor', 'Buat laporan event untuk manajemen'] },
      { type: 'tip', text: 'Menyerahkan semua urusan ke Sarau Luxury jauh lebih efisien — kami handle dari A sampai Z sehingga panitia internal Anda bisa fokus menikmati event bersama rekan kerja.' },
    ],
  },
  'perbedaan-family-gathering-company-gathering': {
    title: 'Family Gathering vs Company Gathering: Mana yang Lebih Tepat untuk Perusahaan Anda?',
    category: 'Tips', readTime: '5 menit', date: '3 Jul 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🏠',
    excerpt: 'Pahami perbedaan mendasar antara family gathering dan company gathering agar Anda bisa memilih yang paling sesuai kebutuhan.',
    content: [
      { type: 'intro', text: 'Banyak HR yang bingung memilih antara family gathering dan company gathering. Keduanya punya tujuan berbeda, format berbeda, dan dampak yang berbeda pula. Pahami dulu perbedaannya sebelum memutuskan.' },
      { type: 'h2', text: '👔 Company Gathering — Fokus pada Tim' },
      { type: 'p', text: 'Company gathering adalah event yang melibatkan karyawan saja (atau beserta pasangan tanpa anak). Fokusnya pada bonding antar rekan kerja, peningkatan performa, dan penguatan budaya perusahaan.' },
      { type: 'ul', items: ['Peserta: karyawan (± pasangan)', 'Aktivitas: outbound, team building, workshop, games kompetitif', 'Tujuan: meningkatkan kinerja tim & mempererat hubungan kerja', 'Suasana: semi-formal hingga fun', 'Budget: lebih hemat karena peserta terbatas'] },
      { type: 'h2', text: '❤️ Family Gathering — Fokus pada Apresiasi' },
      { type: 'p', text: 'Family gathering mengundang karyawan beserta seluruh keluarga — pasangan, anak-anak, bahkan orang tua. Fokusnya pada apresiasi, kebahagiaan, dan menunjukkan perusahaan peduli pada kehidupan karyawan di luar kantor.' },
      { type: 'ul', items: ['Peserta: karyawan + keluarga (semua usia)', 'Aktivitas: games keluarga, hiburan anak, doorprize, BBQ', 'Tujuan: apresiasi, loyalitas, employer branding', 'Suasana: sangat santai & meriah', 'Budget: lebih besar karena peserta lebih banyak'] },
      { type: 'h2', text: '🤔 Kapan Pilih yang Mana?' },
      { type: 'ol', items: ['Pilih Company Gathering jika ada isu tim yang perlu diselesaikan atau sedang onboarding karyawan baru', 'Pilih Family Gathering sebagai reward tahunan atau untuk meningkatkan loyalitas & retention karyawan', 'Pilih keduanya dalam setahun untuk hasil maksimal — company gathering di semester 1, family gathering di akhir tahun'] },
      { type: 'quote', text: 'Karyawan yang merasa keluarganya dihargai oleh perusahaan akan bekerja dengan loyalitas 2x lebih tinggi.' },
      { type: 'tip', text: 'Sarau Luxury berpengalaman menangani kedua jenis event ini. Diskusikan tujuan Anda dan kami bantu tentukan format yang paling tepat!' },
    ],
  },
  'destinasi-wisata-outbound-sekitar-banten': {
    title: '7 Destinasi Wisata Outbound Terbaik di Sekitar Banten & Jawa Barat',
    category: 'Destinasi', readTime: '8 menit', date: '10 Jul 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🏞️',
    excerpt: 'Panduan destinasi outbound terbaik yang mudah dijangkau dari Banten, Jakarta, dan Jawa Barat untuk perusahaan Anda.',
    content: [
      { type: 'intro', text: 'Lokasi yang tepat adalah setengah dari suksesnya sebuah outbound. Banten dan Jawa Barat menyimpan banyak permata tersembunyi yang sempurna untuk outbound perusahaan — dari pantai hingga pegunungan, dari sungai deras hingga hutan pinus.' },
      { type: 'h2', text: '1. 🌊 Sungai Citarik, Sukabumi — Rafting Terbaik' },
      { type: 'p', text: 'Salah satu lokasi rafting paling populer di Jawa Barat. Arus yang bervariasi cocok untuk semua level, pemandangan alam yang indah, dan fasilitas yang lengkap menjadikannya pilihan utama untuk outbound corporate.' },
      { type: 'h2', text: '2. 🌲 Grafika Cikole, Lembang — Hutan Pinus Outbound' },
      { type: 'p', text: 'Hutan pinus yang rindang dengan suhu sejuk di ketinggian 1.400 mdpl. Tersedia flying fox, jembatan tali, dan berbagai wahana outbound. Kapasitas besar hingga 500+ peserta dengan fasilitas lengkap.' },
      { type: 'h2', text: '3. 🏖️ Pantai Sawarna, Lebak — Pantai Tersembunyi Banten' },
      { type: 'p', text: 'Pantai eksotis di selatan Banten yang masih alami. Ombak besar untuk surfing, gua karang untuk eksplorasi, dan suasana yang jauh dari keramaian. Cocok untuk gathering yang ingin suasana beda.' },
      { type: 'h2', text: '4. 🌋 Kawasan Gunung Gede-Pangrango — Trekking' },
      { type: 'p', text: 'Jalur trekking dengan pemandangan savana dan kawah yang memukau. Cocok untuk tim yang suka tantangan fisik dan ingin pengalaman mendaki yang sesungguhnya bersama rekan kerja.' },
      { type: 'h2', text: '5. 🌿 Curug Cigamea, Bogor — Body Rafting & Air Terjun' },
      { type: 'p', text: 'Area Bogor Barat menyimpan banyak curug yang sempurna untuk body rafting. Melewati 3 curug berturut-turut dengan pemandu — pengalaman yang tidak akan terlupakan.' },
      { type: 'h2', text: '6. 🏕️ Cikidang, Sukabumi — Glamping & Team Building' },
      { type: 'p', text: 'Glamping mewah di tengah alam dengan fasilitas lengkap. Kombinasi sempurna antara kenyamanan akomodasi premium dan aktivitas outdoor yang seru. Cocok untuk tim yang ingin "mewah tapi alam".' },
      { type: 'h2', text: '7. 🏔️ Puncak & Cipanas — All-In-One' },
      { type: 'p', text: 'Kawasan paling mudah dijangkau dari Jakarta dan Banten. Banyak villa besar, wahana outbound, rafting, dan kebun teh. Pilihan paling praktis untuk gathering dengan waktu persiapan singkat.' },
      { type: 'tip', text: 'Sarau Luxury beroperasi di seluruh destinasi di atas. Kami yang handle transportasi, venue, aktivitas, dan katering — Anda tinggal hadir!' },
    ],
  },
  'tips-agar-peserta-antusias-selama-outbound': {
    title: '8 Tips Agar Semua Peserta Antusias dan Aktif Selama Outbound',
    category: 'Tips', readTime: '5 menit', date: '17 Jul 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🔥',
    excerpt: 'Salah satu tantangan terbesar EO adalah menjaga semangat peserta dari awal hingga akhir. Ini rahasianya.',
    content: [
      { type: 'intro', text: 'Pernah ada peserta outbound yang duduk di pojok, scrolling HP, tidak mau ikut aktivitas? Ini bukan kesalahan peserta — ini tanda program tidak dirancang dengan benar. Antusiasme peserta adalah tanggung jawab fasilitator dan EO.' },
      { type: 'h2', text: '1. 🎯 Ice Breaking yang Relevan di Awal' },
      { type: 'p', text: 'Jangan mulai dengan ceramah atau perkenalan formal. Mulai dengan ice breaking fisik yang memaksa semua orang bergerak dan tertawa dalam 5 menit pertama. Energi awal menentukan energi sepanjang hari.' },
      { type: 'h2', text: '2. 🎲 Variasikan Jenis Aktivitas' },
      { type: 'p', text: 'Campurkan aktivitas fisik, kreatif, dan strategis. Tidak semua orang suka berlari, tapi semua orang punya kekuatan berbeda. Program yang baik memberikan kesempatan setiap tipe kepribadian untuk bersinar.' },
      { type: 'h2', text: '3. 🏆 Sistem Poin dan Reward yang Jelas' },
      { type: 'p', text: 'Kompetisi sehat dengan reward menarik (bukan hanya piala) terbukti meningkatkan partisipasi. Buat leaderboard yang terlihat semua orang — manusia secara alami termotivasi oleh visibilitas.' },
      { type: 'h2', text: '4. 🤳 Dokumentasi Real-Time' },
      { type: 'p', text: 'Foto dan video yang ditampilkan live di layar besar selama event menciptakan "social proof" instan. Peserta yang melihat dirinya di layar otomatis lebih bersemangat.' },
      { type: 'h2', text: '5. 🎤 Fasilitator yang Energetik' },
      { type: 'p', text: 'Fasilitator adalah energi event. Pilih fasilitator yang tidak hanya kompeten secara teknis, tapi punya karisma dan kemampuan membaca suasana. Fasilitator yang tepat bisa membalikkan energi negatif dalam hitungan menit.' },
      { type: 'h2', text: '6. 🍕 Konsumsi yang Tepat Waktu' },
      { type: 'p', text: 'Lapar = tidak fokus = malas berpartisipasi. Pastikan jadwal makan dan snack tepat waktu. Coffee break yang strategis di antara sesi berat sangat membantu menjaga energi.' },
      { type: 'h2', text: '7. 🌤️ Kelola Faktor Cuaca' },
      { type: 'p', text: 'Selalu punya rencana cadangan untuk cuaca buruk. Kepanasan atau kehujanan tanpa solusi adalah pembunuh semangat nomor satu. Sediakan tenda, payung, atau backup venue indoor.' },
      { type: 'h2', text: '8. 🎊 Tutup dengan Powerful Closing' },
      { type: 'p', text: 'Closing yang berkesan mempengaruhi kesan keseluruhan event. Seremonial penghargaan, sesi berbagi cerita, atau pertunjukan singkat di akhir meninggalkan kesan positif yang bertahan lama.' },
      { type: 'tip', text: 'Fasilitator Sarau Luxury terlatih khusus untuk menjaga energi dan antusiasme peserta dari pagi hingga malam. Kami jamin tidak ada peserta yang bosan!' },
    ],
  },
  'manfaat-paintball-untuk-teamwork': {
    title: 'Ternyata Paintball Bukan Sekadar Seru — Ini 6 Manfaatnya untuk Teamwork',
    category: 'Insight', readTime: '6 menit', date: '24 Jul 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🎯',
    excerpt: 'Paintball sering dianggap sekadar hiburan. Padahal, di balik tembakan cat itu tersembunyi pelajaran teamwork yang sangat berharga.',
    content: [
      { type: 'intro', text: 'Paintball adalah salah satu aktivitas yang paling sering diminta dalam program outbound corporate. Tapi tahukah Anda bahwa di balik keseruan tembak-tembakan itu, ada pelajaran teamwork yang jauh lebih dalam dari yang terlihat?' },
      { type: 'h2', text: '1. 🗣️ Komunikasi dalam Tekanan' },
      { type: 'p', text: 'Di lapangan paintball, komunikasi buruk langsung berdampak — tim Anda tertembak. Ini adalah simulasi paling realistis dari pentingnya komunikasi efektif dalam situasi penuh tekanan, persis seperti deadline proyek atau krisis klien.' },
      { type: 'h2', text: '2. 🎯 Perencanaan Strategis' },
      { type: 'p', text: 'Tim yang menang bukan yang paling berani, tapi yang paling cerdas. Paintball mengajarkan pentingnya perencanaan sebelum eksekusi, membaca situasi, dan mengadaptasi strategi secara real-time.' },
      { type: 'h2', text: '3. 🙌 Kepercayaan Antar Anggota Tim' },
      { type: 'p', text: '"Cover me!" — dua kata yang mengandung kepercayaan penuh. Ketika satu anggota bergerak maju, yang lain harus benar-benar bisa diandalkan. Kepercayaan ini terbawa ke lingkungan kerja.' },
      { type: 'h2', text: '4. 👑 Rotasi Kepemimpinan Alami' },
      { type: 'p', text: 'Situasi berubah cepat di paintball. Pemimpin yang efektif harus bisa mendelegasikan ke anggota yang posisinya lebih baik. Ini mengajarkan flexible leadership yang sangat relevan di tempat kerja modern.' },
      { type: 'h2', text: '5. 💪 Resiliensi Setelah "Kalah"' },
      { type: 'p', text: '"Tertembak" di paintball bukan akhir dunia. Tim belajar untuk tidak panik, mengevaluasi kesalahan, dan kembali dengan strategi yang lebih baik. Mentalitas ini crucial untuk menghadapi kegagalan di dunia kerja.' },
      { type: 'h2', text: '6. 🎉 Bonding melalui Pengalaman Bersama' },
      { type: 'p', text: 'Tidak ada bonding yang lebih kuat dari "bertahan hidup bersama". Setelah satu sesi paintball, rekan yang tadinya kaku di kantor bisa menjadi teman dekat yang saling percaya.' },
      { type: 'ul', items: ['Harga: Rp 175.000/pax', 'Include: Pemandu, seragam, rompi, peluru 30 pcs, arena, mineral, dokumentasi', 'Minimal peserta: tidak ada (bisa untuk tim kecil)', 'Durasi: sekitar 2-3 jam'] },
      { type: 'tip', text: 'Paintball Sarau Luxury tersedia sebagai add-on untuk paket gathering manapun. Tambahkan ke paket Gold atau Platinum untuk pengalaman yang lebih lengkap!' },
    ],
  },
  'cara-memilih-eo-yang-tepat': {
    title: 'Cara Memilih Event Organizer yang Tepat untuk Outbound Perusahaan',
    category: 'Panduan', readTime: '7 menit', date: '31 Jul 2026',
    author: 'Muhammad Dwi Muhaimin', emoji: '🔍',
    excerpt: 'Jangan asal pilih EO! Ini 8 kriteria penting yang harus dicek sebelum mempercayakan event perusahaan Anda.',
    content: [
      { type: 'intro', text: 'Memilih Event Organizer adalah keputusan yang tidak boleh sembarangan. EO yang salah bisa mengubah event berharga menjadi bencana yang dikenang bertahun-tahun — bukan karena keseruannya, tapi karena kekacauannya.' },
      { type: 'h2', text: '1. ✅ Cek Portfolio dan Referensi' },
      { type: 'p', text: 'Minta portofolio event serupa yang pernah ditangani. Lebih baik lagi, minta kontak klien sebelumnya untuk ditelepon langsung. EO yang profesional tidak akan keberatan dengan hal ini.' },
      { type: 'h2', text: '2. 👥 Kenali Tim dan Fasilitatornya' },
      { type: 'p', text: 'Proposal bagus tapi eksekusi jelek = bencana. Pastikan Anda bertemu langsung dengan tim yang akan handle event Anda, bukan hanya bagian sales. Cek sertifikasi fasilitator jika ada.' },
      { type: 'h2', text: '3. 📋 Kejelasan Kontrak dan Rundown' },
      { type: 'p', text: 'EO profesional selalu memberikan kontrak yang jelas dengan detail layanan, timeline, terms & conditions, dan kebijakan pembatalan. Hindari EO yang hanya memberikan proposal harga tanpa kontrak.' },
      { type: 'h2', text: '4. 🚨 Contingency Plan' },
      { type: 'p', text: 'Tanyakan: "Bagaimana jika hujan deras saat outdoor event?" atau "Bagaimana jika ada peserta yang sakit?". EO yang berpengalaman selalu punya rencana B, C, bahkan D.' },
      { type: 'h2', text: '5. 💬 Responsivitas Komunikasi' },
      { type: 'p', text: 'Perhatikan seberapa cepat dan jelas mereka merespons pertanyaan Anda di awal. Komunikasi di fase persiapan adalah cerminan komunikasi saat event berlangsung.' },
      { type: 'h2', text: '6. 🏥 Keamanan dan Asuransi' },
      { type: 'p', text: 'Pastikan ada prosedur keamanan yang jelas untuk aktivitas berisiko (rafting, paintball, outbound fisik). Tanyakan apakah ada asuransi peserta yang ter-cover dalam paket.' },
      { type: 'h2', text: '7. 💰 Transparansi Biaya' },
      { type: 'p', text: 'Waspada dengan harga yang terlalu murah — biasanya ada hidden cost di akhir. Minta breakdown biaya yang detail: apa saja yang sudah include dan apa yang tidak.' },
      { type: 'h2', text: '8. 🌟 Review dan Reputasi Online' },
      { type: 'p', text: 'Cek Google Reviews, testimoni di website, dan media sosial mereka. Foto dan video dari event sebelumnya tidak bisa berbohong — itulah standar yang bisa Anda harapkan.' },
      { type: 'quote', text: 'EO terbaik bukan yang termurah, tapi yang memberikan value terbesar dan membuat Anda tenang dari persiapan hingga event selesai.' },
      { type: 'tip', text: 'Sarau Luxury memenuhi semua 8 kriteria di atas — dengan 8+ tahun pengalaman, 41+ klien korporat, dan rating Google 5.0. Konsultasi gratis tanpa komitmen!' },
    ],
  },
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
  'venue-team-building-bandung': {
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

          {/* Cover image */}
          <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImages[params.slug] || DEFAULT_COVER}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bark/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-4xl">{post.emoji}</div>
          </div>

          {/* Title */}
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
              {related.map(({ slug, title, category, readTime }) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="bg-white rounded-2xl border border-earth/8 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className="h-28 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={coverImages[slug] || DEFAULT_COVER}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-forest bg-forest/10 px-2 py-0.5 rounded-full">{category}</span>
                    <h4 className="font-semibold text-bark text-sm leading-snug mt-2 mb-2 group-hover:text-forest transition-colors line-clamp-2">
                      {title}
                    </h4>
                    <span className="flex items-center gap-1 text-xs text-earth/50">
                      <Clock size={10} /> {readTime}
                    </span>
                  </div>
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
