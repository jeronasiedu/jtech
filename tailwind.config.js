module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light_p: '#6b7280',
        dark_p: '#e5e7eb',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit,minmax(300px,1fr))',
      },
    },
  },
  plugins: [],
}
