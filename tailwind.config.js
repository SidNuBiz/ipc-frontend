/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'sm': '0px',
        // => @media (min-width: 350px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1400px',
        // => @media (min-width: 1400px) { ... }
  
        'xl': '1920px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '2500px',
        // => @media (min-width: 1536px) { ... }
      }

    },
  },
  plugins: [],
}
