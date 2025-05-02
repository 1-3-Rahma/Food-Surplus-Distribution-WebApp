/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        brown: {
          600: '#8d5f3d', // You can adjust this hex color to get the exact shade of brown you want
        },
        semi:{
          500: '#AF8250'
        }
      },
    },
  },
  plugins: [],



};

