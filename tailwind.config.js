module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: '#1E1E1E',
      yellow: '#FEF6E9'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
