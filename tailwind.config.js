/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'marinha':'url(./src/marinha.jpg'},
        'profile':'url(./src/profilepic.jpeg)',
    },
  },
  plugins: [],
}

