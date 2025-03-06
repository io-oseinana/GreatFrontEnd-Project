/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '1xl': '0px 4px 6px -2px rgb(0 0 0 / 0.05), 0px 10px 15px -3px rgb(0 0 0 / 0.10)',
        'icon': '0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)',
      }
    },
  },
  plugins: [],
}