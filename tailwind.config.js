/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  theme: {
    extend: {
      colors: {
        // Clean Notion-style base (white + near-black) with a colour accent system.
        paper: '#FFFFFF',
        'paper-2': '#F7F7F5',
        'paper-3': '#EFEFEC',
        ink: '#1F1F1D',
        'ink-2': '#5C5C58',
        'ink-3': '#9A9A95',
        line: '#E7E7E3',
        // Primary accent — confident blue for links, highlights, key CTAs.
        accent: '#2D5BE3',
        'accent-soft': '#6E8FF0',
        // Category accents (used on the bento + tags).
        pine: '#1F9D6B',
        ochre: '#E0922F'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        shell: '1080px',
        read: '680px'
      },
      boxShadow: {
        card: '0 1px 0 rgba(35,26,16,0.04), 0 18px 40px -28px rgba(35,26,16,0.45)',
        lift: '0 1px 0 rgba(35,26,16,0.04), 0 28px 60px -30px rgba(35,26,16,0.55)'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      keyframes: {
        wave: {
          '0%,60%,100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(16deg)' },
          '40%': { transform: 'rotate(-8deg)' }
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        wave: 'wave 2.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
