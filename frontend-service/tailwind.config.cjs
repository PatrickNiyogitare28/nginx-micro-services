/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe0a",
        gray: {
          light: "#f5f5f5",
          border: "e3e2e1"
        }
      }
    },
  },
  plugins: [],
}