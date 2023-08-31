/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(20%)"},
          "50%": {transform: "translateX(-20%)"}
        }
      },
      hover:{
        line_hover:"green"
      
      }
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      
    },
  },
  plugins: [],
}