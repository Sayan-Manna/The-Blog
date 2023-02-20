/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // colors: { light: "#ffe5d9", darkmode: "#161b33" },
    extend: {
      backgroundImage: {
        site: "url('../public/pexels.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
