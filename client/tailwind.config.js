/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',   // emerald-500
          light:   '#6ee7b7',   // emerald-300
          dark:    '#064e3b',   // emerald-900
        },
        surface: {
          DEFAULT: '#0a1628',
          card:    '#0f1e33',
          deep:    '#050b14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow':   'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow':         'glow 3s ease-in-out infinite alternate',
        'float':        'float 6s ease-in-out infinite',
        'fade-in-up':   'fadeInUp 0.65s ease forwards',
        'border-glow':  'borderGlow 3s ease-in-out infinite',
        'fill-bar':     'fillBar 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
        'blink':        'blink 1s step-end infinite',
        'spin-slow':    'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%':   { boxShadow: '0 0 15px rgba(16,185,129,0.15)' },
          '100%': { boxShadow: '0 0 35px rgba(16,185,129,0.50)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.5' },
        },
        borderGlow: {
          '0%,100%': { borderColor: 'rgba(16,185,129,0.25)', boxShadow: '0 0 15px rgba(16,185,129,0.08)' },
          '50%':     { borderColor: 'rgba(16,185,129,0.55)', boxShadow: '0 0 28px rgba(16,185,129,0.20)' },
        },
        fillBar: {
          from: { width: '0' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        xs: '480px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
