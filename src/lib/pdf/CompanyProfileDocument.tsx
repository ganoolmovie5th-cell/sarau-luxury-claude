import React from 'react'
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'

// ─── Brand Colors ─────────────────────────────────────────────────────────────
const C = {
  forest:  '#2D6A4F',
  forestDark: '#1B4332',
  sun:     '#F4A261',
  cream:   '#F5F0E8',
  leaf:    '#95D5B2',
  bark:    '#3D2B1F',
  white:   '#FFFFFF',
  gray:    '#666666',
  lightGray: '#F0EDE8',
  border:  '#E5E0D8',
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  // Shared
  page:        { fontFamily: 'Helvetica', backgroundColor: C.white, padding: 0 },
  pageInner:   { paddingHorizontal: 48, paddingTop: 40, paddingBottom: 40 },
  row:         { flexDirection: 'row' },
  col:         { flex: 1 },

  // Cover
  cover:           { backgroundColor: C.forestDark, padding: 0, fontFamily: 'Helvetica' },
  coverAccentBar:  { height: 8, backgroundColor: C.sun },
  coverInner:      { paddingHorizontal: 52, paddingTop: 60, paddingBottom: 48 },
  coverEyebrow:    { fontSize: 11, color: C.leaf, letterSpacing: 3, marginBottom: 20, fontFamily: 'Helvetica-Bold' },
  coverTitle:      { fontSize: 42, color: C.white, fontFamily: 'Helvetica-Bold', lineHeight: 1.2, marginBottom: 12 },
  coverSubtitle:   { fontSize: 16, color: C.sun, fontFamily: 'Helvetica-Bold', marginBottom: 28 },
  coverDivider:    { height: 2, width: 60, backgroundColor: C.sun, marginBottom: 28 },
  coverDesc:       { fontSize: 12, color: '#B7D5C5', lineHeight: 1.7, maxWidth: 380, marginBottom: 48 },
  coverYear:       { fontSize: 11, color: C.leaf, marginBottom: 8 },
  coverStats:      { flexDirection: 'row', gap: 24, marginBottom: 56 },
  coverStatBox:    { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 8, padding: 16, flex: 1 },
  coverStatNum:    { fontSize: 26, color: C.sun, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  coverStatLabel:  { fontSize: 9, color: C.leaf, lineHeight: 1.4 },
  coverFooter:     { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.15)', paddingTop: 20 },
  coverFooterText: { fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: 1 },
  coverDot:        { width: 180, height: 180, borderRadius: 90, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)', position: 'absolute', top: 30, right: 30 },
  coverDot2:       { width: 120, height: 120, borderRadius: 60, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', position: 'absolute', top: 60, right: 60 },


  // Section header
  sectionTag:    { fontSize: 9, color: C.sun, fontFamily: 'Helvetica-Bold', letterSpacing: 2, marginBottom: 8 },
  sectionTitle:  { fontSize: 22, color: C.forestDark, fontFamily: 'Helvetica-Bold', marginBottom: 6 },
  sectionLine:   { height: 3, width: 40, backgroundColor: C.sun, marginBottom: 20 },
  sectionDesc:   { fontSize: 11, color: C.gray, lineHeight: 1.7, marginBottom: 24 },

  // Page header strip
  pageHeader:      { backgroundColor: C.forest, paddingHorizontal: 48, paddingVertical: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  pageHeaderTitle: { fontSize: 9, color: C.leaf, fontFamily: 'Helvetica-Bold', letterSpacing: 2 },
  pageHeaderBrand: { fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: 1 },

  // Page footer strip
  pageFooter:      { backgroundColor: C.lightGray, paddingHorizontal: 48, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  pageFooterText:  { fontSize: 8, color: C.gray },
  pageNum:         { fontSize: 8, color: C.gray },

  // Cards
  card:          { backgroundColor: C.lightGray, borderRadius: 8, padding: 16, marginBottom: 12 },
  cardTitle:     { fontSize: 12, color: C.forestDark, fontFamily: 'Helvetica-Bold', marginBottom: 5 },
  cardDesc:      { fontSize: 10, color: C.gray, lineHeight: 1.6 },
  cardBadge:     { backgroundColor: C.sun, borderRadius: 4, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start', marginBottom: 8 },
  cardBadgeText: { fontSize: 9, color: C.white, fontFamily: 'Helvetica-Bold' },

  // Stats grid
  statGrid:      { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statBox:       { flex: 1, backgroundColor: C.forest, borderRadius: 8, padding: 16, alignItems: 'center' },
  statNum:       { fontSize: 24, color: C.sun, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  statLabel:     { fontSize: 9, color: C.leaf, textAlign: 'center', lineHeight: 1.4 },

  // Package
  pkgCard:       { borderWidth: 1, borderColor: C.border, borderRadius: 10, padding: 18, marginBottom: 12 },
  pkgCardPrime:  { borderWidth: 2, borderColor: C.sun, borderRadius: 10, padding: 18, marginBottom: 12, backgroundColor: '#FFFBF5' },
  pkgName:       { fontSize: 14, color: C.forestDark, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  pkgPrice:      { fontSize: 18, color: C.forest, fontFamily: 'Helvetica-Bold', marginBottom: 6 },
  pkgPriceSub:   { fontSize: 9, color: C.gray },
  pkgFeature:    { fontSize: 10, color: C.gray, lineHeight: 1.7 },
  pkgBullet:     { fontSize: 10, color: C.sun, marginRight: 6 },

  // Contact
  contactRow:    { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 14, gap: 14 },
  contactLabel:  { fontSize: 10, color: C.gray, width: 90 },
  contactValue:  { fontSize: 10, color: C.forestDark, fontFamily: 'Helvetica-Bold', flex: 1, lineHeight: 1.5 },
  contactLink:   { fontSize: 10, color: C.forest, flex: 1, lineHeight: 1.5 },

  // Client tags
  tagWrap:       { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 20 },
  tag:           { backgroundColor: C.lightGray, borderRadius: 4, paddingHorizontal: 10, paddingVertical: 4 },
  tagText:       { fontSize: 9, color: C.forestDark },
})


// ─── Shared page header & footer ─────────────────────────────────────────────
function PageHeader({ title }: { title: string }) {
  return (
    <View style={s.pageHeader}>
      <Text style={s.pageHeaderTitle}>{title}</Text>
      <Text style={s.pageHeaderBrand}>SARAU LUXURY · COMPANY PROFILE 2025</Text>
    </View>
  )
}

function PageFooter({ page }: { page: number }) {
  return (
    <View style={s.pageFooter}>
      <Text style={s.pageFooterText}>© 2025 Sarau Luxury. Confidential.</Text>
      <Text style={s.pageNum}>{page} / 5</Text>
    </View>
  )
}

// ─── Feature row helper ───────────────────────────────────────────────────────
function Feature({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 }}>
      <Text style={s.pkgBullet}>✦</Text>
      <Text style={s.pkgFeature}>{text}</Text>
    </View>
  )
}


// ─── COVER PAGE ───────────────────────────────────────────────────────────────
function CoverPage() {
  return (
    <Page size="A4" style={s.cover}>
      <View style={s.coverAccentBar} />
      <View style={s.coverDot} />
      <View style={s.coverDot2} />
      <View style={s.coverInner}>
        <Text style={s.coverEyebrow}>COMPANY PROFILE</Text>
        <Text style={s.coverTitle}>Sarau{'\n'}Luxury</Text>
        <Text style={s.coverSubtitle}>Where Teams Grow Together</Text>
        <View style={s.coverDivider} />
        <Text style={s.coverDesc}>
          Sarau Luxury adalah mitra event organizer profesional untuk perusahaan
          terkemuka Indonesia. Kami menghadirkan pengalaman outing, outbound training,
          company gathering, dan team building yang berkesan sejak 2018.
        </Text>

        {/* Stats */}
        <View style={s.coverStats}>
          {[
            { num: '100+', label: 'Event\nSukses' },
            { num: '53+',  label: 'Klien\nKorporat' },
            { num: '19+',  label: 'Industri\nDilayani' },
            { num: '20+',  label: 'Destinasi\nPilihan' },
          ].map(({ num, label }) => (
            <View key={num} style={s.coverStatBox}>
              <Text style={s.coverStatNum}>{num}</Text>
              <Text style={s.coverStatLabel}>{label}</Text>
            </View>
          ))}
        </View>

        <View style={s.coverFooter}>
          <Text style={s.coverFooterText}>
            sarau-luxury.com  ·  sarauluxury@gmail.com  ·  +62 857-1178-6561
          </Text>
        </View>
      </View>
    </Page>
  )
}


// ─── PAGE 2: ABOUT ────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <Page size="A4" style={s.page}>
      <PageHeader title="TENTANG KAMI" />
      <View style={s.pageInner}>
        <Text style={s.sectionTag}>ABOUT US</Text>
        <Text style={s.sectionTitle}>Mengenal Sarau Luxury</Text>
        <View style={s.sectionLine} />
        <Text style={s.sectionDesc}>
          Berdiri sejak 2018, Sarau Luxury lahir dari keyakinan bahwa setiap tim
          yang solid dimulai dari pengalaman bersama yang bermakna. Kami hadir
          sebagai mitra terpercaya perusahaan-perusahaan terkemuka Indonesia dalam
          merancang event yang tak hanya menghibur, tetapi juga membangun koneksi
          dan semangat tim yang berkelanjutan.
        </Text>

        {/* Stats grid */}
        <View style={s.statGrid}>
          {[
            { num: '8+',   label: 'Tahun\nPengalaman' },
            { num: '100+', label: 'Event\nSukses' },
            { num: '53+',  label: 'Klien\nKorporat' },
            { num: '5.0★', label: 'Rating\nGoogle' },
          ].map(({ num, label }) => (
            <View key={num} style={s.statBox}>
              <Text style={s.statNum}>{num}</Text>
              <Text style={s.statLabel}>{label}</Text>
            </View>
          ))}
        </View>

        {/* Keunggulan */}
        <Text style={[s.sectionTag, { marginBottom: 12 }]}>KEUNGGULAN KAMI</Text>
        <View style={s.row}>
          {[
            { title: 'Konsep Custom',      desc: 'Setiap event dirancang khusus sesuai karakter dan kebutuhan perusahaan Anda.' },
            { title: '20+ Destinasi',      desc: 'Pilihan destinasi terbaik di Jawa, Bali, dan sekitarnya.' },
            { title: 'Vendor Terkurasi',   desc: 'Mitra vendor & venue terbaik yang telah tersertifikasi.' },
          ].map(({ title, desc }) => (
            <View key={title} style={[s.card, { flex: 1, marginRight: 8 }]}>
              <Text style={s.cardTitle}>{title}</Text>
              <Text style={s.cardDesc}>{desc}</Text>
            </View>
          ))}
        </View>
        <View style={s.row}>
          {[
            { title: 'On-Time & On-Budget', desc: 'Eksekusi tepat waktu dan sesuai anggaran yang disepakati.' },
            { title: 'Support 24/7',        desc: 'Tim kami siap melayani pertanyaan Anda kapan saja.' },
            { title: 'Berpengalaman',       desc: 'Dipercaya BCA, Toyota, Kalbe Farma, dan 50+ perusahaan lainnya.' },
          ].map(({ title, desc }) => (
            <View key={title} style={[s.card, { flex: 1, marginRight: 8 }]}>
              <Text style={s.cardTitle}>{title}</Text>
              <Text style={s.cardDesc}>{desc}</Text>
            </View>
          ))}
        </View>
      </View>
      <PageFooter page={2} />
    </Page>
  )
}


// ─── PAGE 3: SERVICES ─────────────────────────────────────────────────────────
const services = [
  { title: 'Corporate Outing',      desc: 'Program outing perusahaan dengan aktivitas outdoor yang menyenangkan dan mempererat hubungan antar tim.' },
  { title: 'Outbound Training',     desc: 'Sesi pelatihan berbasis pengalaman lapangan untuk meningkatkan kerjasama, komunikasi, dan kepemimpinan.' },
  { title: 'Team Building',         desc: 'Aktivitas terstruktur dirancang untuk memperkuat solidaritas tim dan meningkatkan produktivitas kerja.' },
  { title: 'Company Gathering',     desc: 'Event gathering skala besar yang menggabungkan entertainment, apresiasi karyawan, dan networking.' },
  { title: 'Family Gathering',      desc: 'Acara kebersamaan untuk karyawan dan keluarga dalam suasana hangat, penuh kegembiraan.' },
  { title: 'Incentive Trip',        desc: 'Program perjalanan eksklusif sebagai penghargaan atas pencapaian tim terbaik perusahaan Anda.' },
]

function ServicesPage() {
  return (
    <Page size="A4" style={s.page}>
      <PageHeader title="LAYANAN KAMI" />
      <View style={s.pageInner}>
        <Text style={s.sectionTag}>OUR SERVICES</Text>
        <Text style={s.sectionTitle}>6 Layanan Unggulan</Text>
        <View style={s.sectionLine} />
        <Text style={s.sectionDesc}>
          Kami menawarkan solusi event korporat yang komprehensif — mulai dari outing
          santai hingga outbound training intensif, semua dirancang untuk hasil nyata bagi tim Anda.
        </Text>

        <View style={s.row}>
          <View style={{ flex: 1, marginRight: 6 }}>
            {services.slice(0, 3).map(({ title, desc }) => (
              <View key={title} style={s.card}>
                <View style={s.cardBadge}><Text style={s.cardBadgeText}>✦ LAYANAN</Text></View>
                <Text style={s.cardTitle}>{title}</Text>
                <Text style={s.cardDesc}>{desc}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            {services.slice(3).map(({ title, desc }) => (
              <View key={title} style={s.card}>
                <View style={s.cardBadge}><Text style={s.cardBadgeText}>✦ LAYANAN</Text></View>
                <Text style={s.cardTitle}>{title}</Text>
                <Text style={s.cardDesc}>{desc}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ backgroundColor: C.forest, borderRadius: 10, padding: 18, marginTop: 8 }}>
          <Text style={{ fontSize: 11, color: C.white, fontFamily: 'Helvetica-Bold', marginBottom: 6 }}>
            Minimal Peserta
          </Text>
          <Text style={{ fontSize: 10, color: C.leaf, lineHeight: 1.7 }}>
            Sarau Luxury melayani event dengan minimum 20 peserta.
            Kapasitas maksimal tidak terbatas — kami siap menangani gathering ratusan hingga ribuan peserta.
          </Text>
        </View>
      </View>
      <PageFooter page={3} />
    </Page>
  )
}


// ─── PAGE 4: PACKAGES ─────────────────────────────────────────────────────────
function PackagesPage() {
  return (
    <Page size="A4" style={s.page}>
      <PageHeader title="PAKET & HARGA" />
      <View style={s.pageInner}>
        <Text style={s.sectionTag}>PACKAGES</Text>
        <Text style={s.sectionTitle}>Paket Gathering Korporat</Text>
        <View style={s.sectionLine} />
        <Text style={s.sectionDesc}>
          Tiga pilihan paket gathering yang dapat disesuaikan dengan kebutuhan dan
          anggaran perusahaan Anda. Harga sudah termasuk semua fasilitas yang tercantum.
        </Text>

        {/* Silver */}
        <View style={s.pkgCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <View>
              <Text style={s.pkgName}>Gathering Silver</Text>
              <Text style={s.pkgPriceSub}>Paket Dasar</Text>
            </View>
            <View>
              <Text style={s.pkgPrice}>Rp 525.000</Text>
              <Text style={[s.pkgPriceSub, { textAlign: 'right' }]}>/pax</Text>
            </View>
          </View>
          <Feature text="Penginapan 2D1N di villa/resort terpilih" />
          <Feature text="3x Makan (malam, pagi, siang) + 2x Coffee Break" />
          <Feature text="Fun Game & Ice Breaker (dipandu fasilitator)" />
          <Feature text="Dokumentasi foto & video" />
        </View>

        {/* Gold */}
        <View style={s.pkgCardPrime}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
            <View>
              <View style={{ backgroundColor: C.sun, borderRadius: 4, paddingHorizontal: 8, paddingVertical: 2, alignSelf: 'flex-start', marginBottom: 6 }}>
                <Text style={{ fontSize: 8, color: C.white, fontFamily: 'Helvetica-Bold' }}>★ TERPOPULER</Text>
              </View>
              <Text style={s.pkgName}>Gathering Gold</Text>
              <Text style={s.pkgPriceSub}>Paket Unggulan</Text>
            </View>
            <View>
              <Text style={s.pkgPrice}>Rp 675.000</Text>
              <Text style={[s.pkgPriceSub, { textAlign: 'right' }]}>/pax</Text>
            </View>
          </View>
          <Feature text="Semua benefit paket Silver" />
          <Feature text="Rafting 11 km ATAU Paintball" />
          <Feature text="Fun Game dengan fasilitator berpengalaman" />
          <Feature text="Dokumentasi foto & video profesional" />
        </View>

        {/* Platinum */}
        <View style={s.pkgCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <View>
              <Text style={s.pkgName}>Gathering Platinum</Text>
              <Text style={s.pkgPriceSub}>Paket Lengkap</Text>
            </View>
            <View>
              <Text style={s.pkgPrice}>Rp 925.000</Text>
              <Text style={[s.pkgPriceSub, { textAlign: 'right' }]}>/pax</Text>
            </View>
          </View>
          <Feature text="Semua benefit paket Gold" />
          <Feature text="Sesi Team Building profesional (half-day)" />
          <Feature text="Bus PP (pulang pergi) dari titik kumpul" />
          <Feature text="Dokumentasi cinematic + highlight reel" />
        </View>

        <Text style={{ fontSize: 9, color: C.gray, marginTop: 4 }}>
          * Harga dapat berubah sesuai destinasi & jumlah peserta. Hubungi kami untuk penawaran khusus korporat.
        </Text>
      </View>
      <PageFooter page={4} />
    </Page>
  )
}


// ─── PAGE 5: CLIENTS & CONTACT ────────────────────────────────────────────────
const industries = [
  'Perbankan & Keuangan', 'Otomotif', 'Farmasi & Kesehatan',
  'Teknologi & IT', 'FMCG & Retail', 'Asuransi',
  'Manufaktur', 'Properti & Konstruksi', 'Telekomunikasi',
  'Pendidikan', 'Logistik & Transportasi', 'Media & Kreatif',
  'Energi & Pertambangan', 'Konsultan', 'Pemerintahan',
  'Perkebunan & Agribisnis', 'E-Commerce', 'Hospitality',
  'Healthcare', 'Jasa Profesional',
]

function ContactPage() {
  return (
    <Page size="A4" style={s.page}>
      <PageHeader title="KLIEN & KONTAK" />
      <View style={s.pageInner}>

        {/* Clients */}
        <Text style={s.sectionTag}>KLIEN KAMI</Text>
        <Text style={s.sectionTitle}>19+ Industri Telah Mempercayai Kami</Text>
        <View style={s.sectionLine} />
        <Text style={[s.sectionDesc, { marginBottom: 12 }]}>
          Dipercaya oleh perusahaan-perusahaan terkemuka termasuk BCA, Toyota,
          Kalbe Farma, Pos Indonesia, dan 49+ perusahaan lainnya.
        </Text>

        <View style={s.tagWrap}>
          {industries.map((ind) => (
            <View key={ind} style={s.tag}>
              <Text style={s.tagText}>{ind}</Text>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={{ height: 1, backgroundColor: C.border, marginVertical: 20 }} />

        {/* Contact */}
        <Text style={s.sectionTag}>HUBUNGI KAMI</Text>
        <Text style={[s.sectionTitle, { marginBottom: 6 }]}>Siap Membantu Anda</Text>
        <View style={s.sectionLine} />

        {[
          { label: 'Email',      value: 'sarauluxury@gmail.com', isLink: false },
          { label: 'WhatsApp',   value: '+62 857-1178-6561  |  +62 858-1062-9838', isLink: false },
          { label: 'Website',    value: 'https://sarau-luxury.com', isLink: true },
          { label: 'Instagram',  value: '@sarauluxury', isLink: false },
          { label: 'Jam Kerja',  value: 'Senin – Sabtu, 08.00 – 20.00 WIB', isLink: false },
          { label: 'Alamat',     value: 'Binong Permai Blok R-10/14, Curug, Banten', isLink: false },
        ].map(({ label, value, isLink }) => (
          <View key={label} style={s.contactRow}>
            <Text style={s.contactLabel}>{label}</Text>
            {isLink
              ? <Link src={value} style={s.contactLink}>{value}</Link>
              : <Text style={s.contactValue}>{value}</Text>
            }
          </View>
        ))}

        {/* CTA box */}
        <View style={{ backgroundColor: C.forestDark, borderRadius: 10, padding: 20, marginTop: 12 }}>
          <Text style={{ fontSize: 13, color: C.sun, fontFamily: 'Helvetica-Bold', marginBottom: 8 }}>
            Siap Mulai Event Impian Perusahaan Anda?
          </Text>
          <Text style={{ fontSize: 10, color: '#B7D5C5', lineHeight: 1.7, marginBottom: 12 }}>
            Konsultasikan kebutuhan event perusahaan Anda secara gratis.
            Tim kami akan merespons dalam 15 menit (jam kerja).
          </Text>
          <Text style={{ fontSize: 10, color: C.white, fontFamily: 'Helvetica-Bold' }}>
            → Chat WhatsApp: +62 857-1178-6561
          </Text>
        </View>
      </View>
      <PageFooter page={5} />
    </Page>
  )
}

// ─── MAIN DOCUMENT ────────────────────────────────────────────────────────────
export function CompanyProfileDocument() {
  return (
    <Document
      title="Sarau Luxury – Company Profile 2025"
      author="Sarau Luxury"
      subject="Company Profile Event Organizer"
      keywords="sarau luxury, event organizer, outing, outbound, team building, gathering"
      creator="sarau-luxury.com"
    >
      <CoverPage />
      <AboutPage />
      <ServicesPage />
      <PackagesPage />
      <ContactPage />
    </Document>
  )
}
