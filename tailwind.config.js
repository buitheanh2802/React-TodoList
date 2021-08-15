const glob = require('glob');

const entryFile = glob.sync('./src/**/*.jsx');

module.exports = {
  purge: entryFile,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode : 'jit'
}
