module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['var(--font-aboreto)'],
        alexBrush: ['var(--font-alex-brush)'],
        afacad: ['var(--font-afacad)'],
        agdasima: ['var(--font-agdasima)']
      }
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1280px'
      }
    },
    fontFamily: {
      sans: ['var(--font-afacad)', 'sans-serif'],
      serif: ['var(--font-afacad)', 'serif'],
      mono: ['var(--font-afacad)', 'monospace'],
      display: ['var(--font-afacad)'],
      body: ['var(--font-afacad)']
    },

    screens: {
      'bp-1210': '1210px',
      'bp-1124': '1124px',
      'bp-890': '890px',
      'sm': '640px',
      'sm-xl': '430px',
      'md': '768px',
      'lg': '1024px'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
};
