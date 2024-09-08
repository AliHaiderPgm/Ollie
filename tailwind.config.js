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
        'offWhite': {
          50: '#efefef33',
          900: '#efefef'
        },
      },
      width: {
        'xs': '400px'
      }
    },
  },
  plugins: [],
}

