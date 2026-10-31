/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        briar: {
          green: '#194a33',
          'green-dark': '#0f2d1f',
          'green-light': '#246345',
          leaf: '#5ba238',
          'leaf-light': '#648935',
          gold: '#c5a880',
          'gold-dark': '#a3845b',
          cream: '#FAF7F2',
          'cream-dark': '#F0EBE1',
          charcoal: '#242220',
          muted: '#6b7280',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
          '2xl': '1380px',
        }
      }
    },
  },
  plugins: [],
};
