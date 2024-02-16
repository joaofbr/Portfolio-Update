/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{html,js}', './components/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      plugins: [],
    }
  }
};