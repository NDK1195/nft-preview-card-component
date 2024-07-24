/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'very-dark-blue-line': 'hsl(215, 32%, 27%)',
        background: 'hsla(178, 100%, 50%, 0.5)',
      },
      boxShadow: {
        custom: '0px 25px 50px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
