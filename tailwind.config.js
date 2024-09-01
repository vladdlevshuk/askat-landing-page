const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#2C2C2C',
        'brandPrimary': '#2196F3',
        'neutralGrey': '#717171',
        'gray900': '#18191F',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

