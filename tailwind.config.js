/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Inter']
        }
      },
    },
    plugins: [],
  }