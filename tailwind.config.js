/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./css/**/*.{html,js}", "./index.html", "./script/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#0d0f05",
        background: "#fafbf4",
        primary: "#49cd43",
        secondary: "#84eb80",
        accent: "55f34e",
        textdark: "#f8faf0",
        backgrounddark: "#100c14",
        primarydark: "#e698b7",
        secondarydark: "#8a1541",
        accentdark: "#ee1769",
      },
      fontFamily: {
        logo: ['"Megrim"', "sans-serif"],
        body: ['"Oxanium"', "serif"],
      },
    },
    //
  },
  plugins: [],
};
