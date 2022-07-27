/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#FFCA28",
          700: "#98943F",
        },
        green: {
          400: "#1F3423",
        },
        brown: {
          400: "#291D09",
        },
        orange: {
          400: "#CDA684",
          700: "#9A643D",
        },
        black: {
          400: "#1B1B1B",
          700: "#000000",
        },
      },
      fontFamily: {
        body: ["Ropa Sans", "sans-serif"],
        titles: ["Montserrat", "serif"],
        accent: ["Special Elite", "sans-serif"],
      },
    },
    plugins: [],
  },
};
