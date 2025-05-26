
/* Pinegrow generated Design Panel Begin */

const pg_colors = {Yellow: {'50': '#fff8eb',
'100': '#fff0ca',
'200': '#ffe8a7',
'300': '#ffdf81',
'400': '#ffd655',
'500': '#ffcd00',
'600': '#e9bc00',
'700': '#d4ab00',
'800': '#bf9a00',
'900': '#ab8900',
'950': '#977900',
},
offblack: {'50': '#ebebeb',
'100': '#bababa',
'200': '#8b8b8b',
'300': '#606060',
'400': '#373737',
'500': '#121212',
'600': '#111111',
'700': '#0f0f0f',
'800': '#0e0e0e',
'900': '#0c0c0c',
'950': '#0b0b0b',
},
}

const pg_fonts = {sans: ["'Work Sans', sans-serif",
],
}   

const pg_backgrounds = {}    
             
                
    /* Pinegrow generated Design Panel End */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_pginfo/**/*.{html,js,css}", "./*.{html,js,css}"],
  theme: {
    extend: {
      colors: pg_colors, //<-- Use the pg_colors for colors. First entered as commented
      fontFamily: pg_fonts, //<-- Use the pg_fonts for fonts. First entered as commented
    },
  },
  plugins: [],
}

