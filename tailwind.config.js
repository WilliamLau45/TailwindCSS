/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        lightBlue: 'hsl(180, 100%, 50%)',
        purple: 'hsl(265, 100%, 60%)',
        lightPurple: 'hsl(265, 50%, 60%)',
        brightYellow: 'hsl(63, 100%, 50%)',
      }
    },
  },
  plugins: [],
}

