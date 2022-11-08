/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "url('assets/img/background.jpg')",
        "bg-Cod": "url('assets/img/bg-Cod.jpg')",
        "teamwork": "url('assets/img/teamwork.jpg')",
      },
      colors: {
        "primaryBlue": "#0247A7",
        "secondaryGreen": "#93CB7E",
        "primaryCinza": "#51504E",
        "secondaryCinza": "#0F0E0A",
      },
      fontFamily: {
        "play": ["Play", "sans-serif"],
      },
      

    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}