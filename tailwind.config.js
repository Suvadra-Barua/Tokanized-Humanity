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
        primary:'#34d399',
        secondary:'#059669'
      }
    },
 },
  plugins: [require("@tailwindcss/typography")],
}
