/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  fontFamily: {
    sans: ["Public Sans", "sans"], // 'Public Sans' should match the font name you have available
  },
  theme: {
    colors: {
      white: "#ffffff",
      custom: "#25293C",
    },
  },

  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
