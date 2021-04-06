module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'cly-grey': "#959fac",
      'cly-purple':"#633cb4",
      'cly-black': "#3c2e57",
      'cly-purple-light': "#b6a6d3",
      "cly-white": "#fff",
      "cly-green": "#4dce9d"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
