module.exports = {
  content: [
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        themeRed: "#E9311A",
        themeOrange: "#ED6335",
        themeLight: "#ECAE7D",
        themeWhite: "whitesmoke",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
