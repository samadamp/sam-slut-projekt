/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#B48572',
      navColor: '#815441',
      searchColor: '#DEC9B0',
      cardColor: '#EDC89C',
    },

    extend: {
      maxHeight: {
        '100': '30rem',
      }
    },
   
  },
  plugins: [],
}

