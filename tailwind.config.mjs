/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vanta-red':     '#ff4655',
        'vanta-red-dim': '#cc3544',
        'vanta-bg':      '#08080e',
        'vanta-bg2':     '#0d0d16',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'blob':      'blob 20s ease-in-out infinite',
        'blob-alt':  'blob 26s ease-in-out 7s infinite',
        'blob-slow': 'blob 32s ease-in-out 14s infinite',
        'float':     'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':   'shimmer 3s linear infinite',
        'bar-fill':  'bar-fill 1.2s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(40px,-30px) scale(1.06)' },
          '66%':     { transform: 'translate(-28px,22px) scale(0.95)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'bar-fill': {
          from: { width: '0%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
