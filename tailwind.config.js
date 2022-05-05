const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  extend: {
      colors: {
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        primary:'#2178ad',
      }
    },
  plugins: [require("@tailwindcss/typography")],
}
