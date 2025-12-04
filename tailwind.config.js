/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        gold: {
          50: '#FDF8F0',
          100: '#FAF3E0',
          200: '#F5E6C0',
          300: '#E8D4A0',
          400: '#D4B880',
          500: '#C19A60',
          600: '#A67C50',
          700: '#8B5E40',
          800: '#704030',
          900: '#552220',
        },
        beige: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#EBE7E0',
          300: '#D4CCC0',
          400: '#B8AFA0',
          500: '#9C9280',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

