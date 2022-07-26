/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": '#9BFF00',
        "green-light": '#DBFD51',
        "black-al": '#1d1d1d'
      }
    },
  },
  plugins: [],
}
