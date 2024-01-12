/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: " 'Roboto', sans-serif"
      },
      colors: {
        cutomGrayShade: '#888888',
        customBlue: '#2196f3'
      }
    },
  },
  plugins: [require("daisyui")],
}

