/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#9EFFA9',
        'darckblue': '#9EFFA9',
        'darkerblue':'#333146',
        'black': '#29252C'
      },
      fontFamily:{
        'protest': ["Protest Revolution", 'sans-serif'],
        'honk': ["Honk", 'system-ui'],
        'poppins': ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

