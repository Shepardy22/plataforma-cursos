/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('assets/img/background.jpg')",
      },
      colors: {
        "primaryBlue": "#0247A7",
        "secondaryGreen": "#93CB7E",
      },
      

    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}