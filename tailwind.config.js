module.exports = {
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary:{
        'dark-blue-intro': 'hsl(217, 28%, 15%)',
        'dark-blue-main': ' hsl(218, 28%, 13%)',
        'dark-blue-footer': 'hsl(216, 53%, 9%)',
        'dark-blue-testimonials': ' hsl(219, 30%, 18%)',
        },
        accent:{
          'cyan': 'hsl(176, 68%, 64%)',
          'blue': ' hsl(198, 60%, 50%)',
          'light-red': ' hsl(0, 100%, 63%)',
        }
        
      },
      fontFamily:{
        body:['Open Sans', 'sans-serif'],
        cta:['Raleway', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}