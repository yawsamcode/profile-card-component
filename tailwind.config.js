
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Kumbh': ['Kumbh Sans','sans-serif']
      }, 
      colors: {
        'Dark-cyan': 'hsl(185, 75%, 39%)',
        'Very-dark-blue': 'hsl(229, 23%, 23%)',
        'Dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'Dark-gray': 'hsl(0, 0%, 59%)'
      }, 
      backgroundImage: {
          "pattern-card": "url('./images/bg-pattern-card.svg')",
          "pattern-bottom": "url('./images/bg-pattern-bottom.svg')",
          "pattern-top": "url('./images/bg-pattern-top.svg')",
      }
    },
    screens: {
      '4xl': {'max': '2024px'},
      // => @media (max-width: 2024px) { ... }

      '3xl': {'max': '1791px'},
      // => @media (max-width: 1791px) { ... }
      
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      
    }
  },
  plugins: [],
}

