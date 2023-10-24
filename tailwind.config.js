/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        pRed: 'hsl(1, 90%, 64%)',
        pBlue: 'hsl(219, 85%, 26%)',
        pWhite: 'hsl(0, 0%, 100%)',
        grayishBlue4: 'hsl(210, 60%, 98%)',
        grayishblue3:'hsl(211, 68%, 94%)',
        grayishblue2:'hsl(205, 33%, 90%)',
        Grayishblue:'hsl(219, 14%, 63%)',
       Darkgrayishblue: 'hsl(219, 12%, 42%)',
       Verydarkblue:' hsl(224, 21%, 14%)',
      }
    },
  },
  plugins: [],
}