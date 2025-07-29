/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aftl: {
          background: '#FAF9F6',
          heading: '#1A1A2E',
          body: '#333333',
          subtext: '#6B6B6B',
          neon: '#1A1A1A',
          neonHover: '#121212',
          accent: '#1E2B47',
        },
        'base': '#FAF9F6',
        'base-secondary': '#FAF9F6',
        'light-mist': '#F2F2F2',
        'primary-accent': '#1A1A1A',
        'primary-accent-hover': '#121212',
        'secondary-accent': '#1A1A1A',
        'secondary-accent-graphite': '#121212',
        'primary-text': '#1A1A2E',
        'secondary-text': '#333333',
        'border-soft': '#E5E5E5',
        'border-soft-alt': '#D9D9D9',
        'platrr-orange': '#FF7715',
        'cream': '#FAF9F6',
        'footer-link': '#FFD700',
      },
      boxShadow: {
        'cta': '0 0 12px #00FFFF',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
