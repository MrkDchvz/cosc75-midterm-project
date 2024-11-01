/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./css/**/*.{html,js}", "./index.html", "./script/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Megrim"', "sans-serif"],
        body: ['"Oxanium"', "serif"],
      },
    },
    //
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "coffee", "forest", "synthwave"],
  },
};
