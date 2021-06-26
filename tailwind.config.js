module.exports = {
  mode: 'jit',
  purge: ['./build/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#40407e',
        secondary: '#d94148',
        tertiary: '#38a1f3',
      },
      fontFamily: {
        main: ['DM Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
