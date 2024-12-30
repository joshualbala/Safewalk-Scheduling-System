const { variants } = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  theme: {
    extend: {},
    theme: {
      extend:{
        borderWidth: {
          '10': '10px',
          '12': '12px',
          '16': '16px'
        }
      }
      
  
    }
  },
  content: ["./src/**/*.{ts, tsx}"],
  plugins: [],
  variants:{
    extend:{
      backgroundColor: 'active',
    }
  }
}

