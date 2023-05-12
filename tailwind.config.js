/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)"],
        default: ["var(--font-barlow)"],
        integra: ["var(--font-integra-regular)"],
        integraBold: ["var(--font-integra-bold)"],
        barlow: ["var(--font-barlow-condensed)"],
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        'hourrail-rouge-orange': '#AB1205',
        'hourrail-orange': '#ED4A3A',
        'hourrail-orange-light': '#E97451',
      },
      boxShadow: {
        'card-orange-rouge': '0 22px 0 -14px #AB1205',
        'card-title-orange-rouge': '0 19px 0 -14px #AB1205',
        'mood-orange-rouge': '0 11px 0 -6px #AB1205',
        'search-orange-rouge': '0 14px 0 -10px #AB1205',
        'hourrail-smooth': '0 0 4px 0 #AB1205',
        'hourrail-smooth-orange': '0 0 0 4px 0 #ED4A3A',
        'luko': '0 0 0 3px #D6E3FD',
      },
      dropShadow: {
        'title-orange-rouge': '-1px 1px 2px #AB1205',
        'orange-rouge-light': '0px 0px 1px #AB1205',
        'hourrail-smooth': '0 0 2px #AB1205',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(8deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(8deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(6.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving': 'wave 2s linear infinite',
      },
      backgroundImage: {
        'hero': "url('../public/image 3.jpg')",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss'),
  require("tailwind-scrollbar")],
};
