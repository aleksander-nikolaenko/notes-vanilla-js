/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // class="font-roboto"
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
    },
  },
  plugins: [],
};
