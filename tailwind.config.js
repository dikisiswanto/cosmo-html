module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['sans-serif'],
        body: ['sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
