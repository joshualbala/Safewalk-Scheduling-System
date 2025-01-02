const { variants } = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  theme: {
    extend: {
      borderWidth: {
      '10': '10px',
      '12': '12px',
      '16': '16px'
    },
    lineHeight:{
      '14':'30px',
      '75':'75px',
      '100': '100px',

    },
    width:{
      '18':'70px'
    },
    height:{
      '18':'70px'
    },
    minWidth:{
      '550':'550px'
    },
    colors: {
      "neon-yellow": "#ccff00",
    },
    fontFamily: {
      "cool": ["Rubik Vinyl", "ui-sans-serif", "system-ui"]
    },
    screens:{
      "ph" : "840px"
    },
  },
  darkMode: "class",    
  
  },
  content: ["./src/**/*.{ts, tsx}"],
  plugins: [],
  variants:{
    extend:{
      backgroundColor: 'active',
    }
  }
}

