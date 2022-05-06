const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme:{
    extend: {
      colors: {
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        primary:'#6366f1',
        secondary:'#4f46e5'
      },
      borderWidth: {
      DEFAULT: '1px',},
      borderColor:{
        DEFAULT: ' rgb(107 114 128 / 0.15)',
      }

    },
 },
  plugins: [
    require("@tailwindcss/typography")]
}
