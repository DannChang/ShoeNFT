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
      gray: '#646462',
      white: '#E5E5E5',
      yellow: '#FEF6E9',
      purple: '#6851FF',
    },
    extend: {
      screens: {
        '3xl': '1600px', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
