/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'home-gradient': 'var(--home-gradient)',
      },
      maxWidth: {
        'design': '1440px',      // Design width
        'content': '1170px',     // Content grid width
        'container': '1200px',   // Container with some padding
      },
      screens: {
        'design': '1440px',      // Design breakpoint
      },
      spacing: {
        'design-padding': '135px', // (1440 - 1170) / 2 = 135px
      },
      gridTemplateColumns: {
        'design-12': 'repeat(12, 1fr)', // 12 column grid
        'design-16': 'repeat(16, 1fr)', // 16 column grid (if needed)
      },
    },
  },
  plugins: [],
}
