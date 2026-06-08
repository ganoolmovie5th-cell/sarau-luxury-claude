import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

const postMeta: Record<string, { emoji: string; title: string; category: string }> = {
  'cara-mengatasi-konflik-tim-dengan-team-building': { emoji: '🤝', title: 'Cara Mengatasi Konflik Tim dengan Team Building',     category: 'Insight' },
  'checklist-persiapan-outing-perusahaan':           { emoji: '✅', title: 'Checklist Lengkap Persiapan Outing Perusahaan',         category: 'Panduan' },
  'perbedaan-family-gathering-company-gathering':    { emoji: '🏠', title: 'Family Gathering vs Company Gathering',                  category: 'Tips' },
  'destinasi-wisata-outbound-sekitar-banten':        { emoji: '🏞️', title: '7 Destinasi Outbound Terbaik di Banten & Jabar',       category: 'Destinasi' },
  'tips-agar-peserta-antusias-selama-outbound':      { emoji: '🔥', title: '8 Tips Agar Peserta Antusias Selama Outbound',          category: 'Tips' },
  'manfaat-paintball-untuk-teamwork':                { emoji: '🎯', title: '6 Manfaat Paintball untuk Teamwork',                    category: 'Insight' },
  'cara-memilih-eo-yang-tepat':                      { emoji: '🔍', title: 'Cara Memilih Event Organizer yang Tepat',                category: 'Panduan' },
  'cara-membuat-konsep-gathering-unik':          { emoji: '💡', title: 'Cara Membuat Konsep Gathering Perusahaan yang Unik',    category: 'Panduan' },
  'tips-hemat-budget-outing-perusahaan':         { emoji: '💰', title: 'Tips Hemat Budget Outing Perusahaan',                    category: 'Tips' },
  'aktivitas-outbound-terbaik-untuk-leadership': { emoji: '🦁', title: 'Aktivitas Outbound Terbaik untuk Melatih Leadership',    category: 'Insight' },
  'panduan-rafting-untuk-corporate':             { emoji: '🚣', title: 'Panduan Lengkap Rafting untuk Acara Corporate',          category: 'Panduan' },
  '10-ide-team-building-kreatif':          { emoji: '🎯', title: '10 Ide Team Building Kreatif yang Wajib Dicoba',         category: 'Tips' },
  'destinasi-outing-terbaik-jawa-bali':    { emoji: '🗺️', title: 'Destinasi Outing Terbaik di Jawa & Bali',               category: 'Destinasi' },
  'perbedaan-outing-outbound':             { emoji: '🤔', title: 'Outing vs Outbound: Apa Bedanya?',                       category: 'Tips' },
  'venue-team-building-bandung':           { emoji: '📍', title: '15 Venue Team Building Terbaik di Bandung',               category: 'Destinasi' },
  'tips-sukses-family-gathering':          { emoji: '👨‍👩‍👧‍👦', title: 'Tips Sukses Family Gathering Ratusan Peserta',      category: 'Panduan' },
  'manfaat-outbound-untuk-produktivitas':  { emoji: '📈', title: 'Bagaimana Outbound Meningkatkan Produktivitas Tim',       category: 'Insight' },
}

const categoryColors: Record<string, string> = {
  Tips:      '#F8B400',
  Destinasi: '#4ade80',
  Panduan:   '#60a5fa',
  Insight:   '#f472b6',
}

type Props = { params: { slug: string } }

export default function BlogOGImage({ params }: Props) {
  const meta     = postMeta[params.slug]
  const emoji    = meta?.emoji    ?? '📝'
  const title    = meta?.title    ?? 'Artikel Blog Sarau Luxury'
  const category = meta?.category ?? 'Blog'
  const catColor = categoryColors[category] ?? '#95D5B2'

  return new ImageResponse(
    (
      <div style={{
        width: '1200px', height: '630px',
        display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 60%, #1b4332 100%)',
        fontFamily: 'serif', position: 'relative', overflow: 'hidden',
      }}>
        {/* Top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
          background: `linear-gradient(90deg, ${catColor}, #2d6a4f, ${catColor})`,
          display: 'flex',
        }} />

        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '450px', height: '450px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', display: 'flex',
        }} />

        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', padding: '60px 80px 55px',
        }}>
          {/* Top: brand */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(255,255,255,0.12)',
                border: '2px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px',
              }}>🌿</div>
              <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700' }}>Sarau Luxury</span>
            </div>
            {/* Category badge */}
            <div style={{
              padding: '8px 20px', borderRadius: '99px',
              background: `${catColor}25`,
              border: `1.5px solid ${catColor}60`,
              display: 'flex',
            }}>
              <span style={{ color: catColor, fontSize: '15px', fontWeight: '700' }}>{category}</span>
            </div>
          </div>

          {/* Center: emoji + title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '80px', lineHeight: '1' }}>{emoji}</div>
            <div style={{
              fontSize: '54px', fontWeight: '800', color: '#ffffff',
              lineHeight: '1.1', letterSpacing: '-1.5px',
              maxWidth: '900px', display: 'flex', flexDirection: 'column',
            }}>
              {title}
            </div>
          </div>

          {/* Bottom: author + site */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#2d6a4f',
                border: '2px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '16px', fontWeight: '700',
              }}>MD</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>Muhammad Dwi Muhaimin</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Sarau Luxury · Blog & Tips</span>
              </div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
              sarau-luxury.com
            </span>
          </div>
        </div>

        {/* Bottom accent */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px',
          background: `linear-gradient(90deg, #2d6a4f, ${catColor}, #2d6a4f)`,
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
