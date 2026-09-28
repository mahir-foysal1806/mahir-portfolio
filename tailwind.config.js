/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c0e',
          900: '#0d0f12',
          850: '#111318',
          800: '#15181d',
          700: '#1c2027',
          600: '#282d36',
          500: '#3a4049',
        },
        bone: {
          100: '#f5f3ef',
          200: '#e9e6df',
          300: '#c9c6c0',
          400: '#9b9893',
        },
        brass: {
          300: '#e0c48c',
          400: '#c9a15a',
          500: '#b3894a',
          600: '#8c703e',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
