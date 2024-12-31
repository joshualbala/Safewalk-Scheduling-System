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
      '12': '100px',

    },
    colors: {
      "neon-yellow": "#ccff00",
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

