/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'offWhite': '#F5F5F5',
      },
      width: {
        'xs': '400px'
      }
    },
  },
  plugins: [],
}

