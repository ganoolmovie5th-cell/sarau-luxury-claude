/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:    { DEFAULT: '#2D6A4F', light: '#40916C', dark: '#1B4332', muted: '#52B788' },
        earth:     { DEFAULT: '#8B5E3C', light: '#A47551', dark: '#6B4226', muted: '#C9956C' },
        cream:     { DEFAULT: '#F5F0E8', warm: '#EDE0C8', dark: '#D4C5A9' },
        sun:       { DEFAULT: '#F4A261', light: '#FFBC80', dark: '#E07D3C' },
        leaf:      { DEFAULT: '#95D5B2', dark: '#74C69D' },
        moss:      { DEFAULT: '#4A7C59' },
        sand:      { DEFAULT: '#E9C46A' },
        bark:      { DEFAULT: '#3D2B1F' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        accent:  ['var(--font-accent)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/images/noise.svg')",
        'leaf-pattern': "url('/images/leaf-pattern.svg')",
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
        'pulse-soft':    'pulse-soft 4s ease-in-out infinite',
        'marquee':       'marquee 25s linear infinite',
        'marquee2':      'marquee2 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.7' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'forest': '0 20px 60px rgba(45, 106, 79, 0.25)',
        'earth':  '0 20px 60px rgba(139, 94, 60, 0.25)',
        'glow':   '0 0 40px rgba(95, 213, 178, 0.3)',
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
}
