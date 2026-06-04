import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt     = 'Sarau Luxury — Where Teams Grow Together'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 50%, #1b4332 100%)',
          fontFamily: 'serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative circles */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', top: '80px', right: '80px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'rgba(149,213,178,0.08)', display: 'flex',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #F8B400, #95D5B2, #F8B400)',
          display: 'flex',
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '60px 80px 55px',
        }}>
          {/* Top: Logo + brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {/* Logo circle */}
            <div style={{
              width: '64px', height: '64px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px',
            }}>
              🌿
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                color: '#ffffff', fontSize: '26px', fontWeight: '700',
                letterSpacing: '-0.5px', lineHeight: '1.1',
              }}>
                Sarau Luxury
              </span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', marginTop: '2px' }}>
                Event Organizer Profesional
              </span>
            </div>
          </div>

          {/* Center: Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px',
            }}>
              <div style={{
                width: '40px', height: '3px',
                background: '#F8B400', borderRadius: '99px', display: 'flex',
              }} />
              <span style={{
                color: '#95D5B2', fontSize: '16px', fontWeight: '600',
                letterSpacing: '2px', textTransform: 'uppercase',
              }}>
                Where Teams Grow Together
              </span>
            </div>

            <div style={{
              fontSize: '62px', fontWeight: '800',
              color: '#ffffff', lineHeight: '1.05',
              letterSpacing: '-2px',
              display: 'flex', flexDirection: 'column',
            }}>
              <span>Outing, Outbound</span>
              <span style={{ color: '#F8B400' }}>&amp; Gathering</span>
              <span>Terbaik untuk</span>
              <span>Perusahaan Anda</span>
            </div>
          </div>

          {/* Bottom: Services + stats */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            {/* Services pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', maxWidth: '700px' }}>
              {['🎉 Gathering', '⛺ Outing', '🏔️ Outbound', '🤝 Team Building', '❤️ Family Gathering'].map((s) => (
                <div key={s} style={{
                  padding: '8px 16px', borderRadius: '99px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '14px', fontWeight: '600',
                  display: 'flex',
                }}>
                  {s}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '24px' }}>
              {[
                { value: '41+', label: 'Klien' },
                { value: '8+',  label: 'Tahun' },
                { value: '5.0', label: 'Rating ⭐' },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}>
                  <span style={{
                    color: '#F8B400', fontSize: '28px', fontWeight: '800', lineHeight: '1',
                  }}>
                    {value}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', marginTop: '4px' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2d6a4f, #F8B400, #2d6a4f)',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
