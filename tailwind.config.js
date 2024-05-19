/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Primary: '#4A90E2',
      Secondary: '#50E3C2',
      Accent: '#95c0f2',
      Background: '#d7d8d9',
      Text: "#4A4A4A",
    },
    /* colors: {
      primary: '#B48572',
      navColor: '#815441',
      searchColor: '#DEC9B0',
      cardColor: '#EDC89C',
    }, */

    extend: {
      maxHeight: {
        '100': '30rem',
      },
      width: {
        '100': '30rem',
      }
    },
   
  },
  plugins: [],
}

