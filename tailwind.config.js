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
      '18':'70px',
      '50':"180px",
    },
    height:{
      '18':'70px'
    },
    minWidth:{
      '540':'540px'
    },
    colors: {
      "neon-yellow": "#ccff00",
    },
    fontFamily: {
      "cool": ["Rubik Vinyl", "ui-sans-serif", "system-ui"]
    },
    fontSize:{
      "rm": "0px"
    },
    screens:{
      '730':'730px',
      '1310':'1310px',
      '840':'840px'
    },
    spacing:{
      'f':'620px',
      'h':'510px',
      'l':'780px'
    }
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

