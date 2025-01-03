/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      colors: {
        'orange': "#F66C3B",
        'black' : '#141414',
        'lightBg' : '#FFF6F3',
        'grey' : '#2D2D2D',
        'ligthBlack' : '#1F1F1F'
  
      },
      fontFamily : {
        'mulish' : ['Mulish']
      }
    },
  },
  plugins: [],
};
