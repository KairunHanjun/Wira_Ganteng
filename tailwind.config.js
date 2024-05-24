/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    variants: {
     fontSize: ['responsive', 'hover', 'focus'],
    },
    theme: {
      screens: {
        xs: '240px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        fontFamily: {
          'Playfair': ['Playfair', 'sans-serif'],
          'Inter': ['Inter', 'sans-serif'],
          'ClickerScript': ['ClickerScript', 'sans-serif']
        }
      },
    },
    plugins: [],
  }