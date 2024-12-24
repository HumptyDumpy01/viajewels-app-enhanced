module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['var(--font-aboreto)'],
        alexBrush: ['var(--font-alex-brush)'],
        afacad: ['var(--font-afacad)']
      }
    },
    fontFamily: {
      sans: ['var(--font-afacad)', 'sans-serif'],
      serif: ['var(--font-afacad)', 'serif'],
      mono: ['var(--font-afacad)', 'monospace'],
      display: ['var(--font-afacad)'],
      body: ['var(--font-afacad)']
    }
  },
  plugins: []
};
