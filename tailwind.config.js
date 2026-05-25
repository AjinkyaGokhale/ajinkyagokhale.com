/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: '#111611',
        'border-green': '#1f2e1f',
        'green-dim': '#2d6a2d',
        'green-mid': '#39a839',
        'green-bright': '#00ff88',
        'green-neon': '#39ff14',
        'text-primary': '#d4f0d4',
        'text-muted': '#5a7a5a',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        blink: 'blink 0.7s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

