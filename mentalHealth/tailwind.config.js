/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./tailwind.config.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#9fbfb7',  /*HEX codes need to be either RGB or RRGGBB */
        'light-green': '#B2D6CD',
        'dark-blue': '#7A87B8',
        'cream': '#EADADE',
        'light-purple': '#C8BAD3',
        'dark-purple': '#A695B7',
      },
    },
  },
  plugins: [],
}