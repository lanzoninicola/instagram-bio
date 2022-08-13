/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#CECB5B",
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
      backgroundImage: {
        avatar: "url('/images/avatar-xl.png')",
        "avatar-round": "url('/images/avatar-round.png')",
        "avatar-overlay":
          "radial-gradient(60.9% 70.9% at 52.97% 30.82%, rgba(31, 52, 35, 0) 37.14%, #1F3423 77.89%)",
        "service-image-overlay":
          "linear-gradient(180deg, rgba(206, 203, 91, 0) 42.48%, #CECB5B 92.67%)",
      },
      width: {
        "absolute-m-2": "calc(100% - 2rem)",
      },
      height: {
        400: "400px",
        "50vh": "50vh",
        "33vh": "33vh",
      },
      "inset-y": {
        300: "300px",
      },
      animation: {
        cta1: "cta1 5s linear infinite",
      },
      keyframes: {
        cta1: {
          "0%": { backgroundColor: "#CECB5B" },
          "35%": { backgroundColor: "#98943F" },
          "75%": { backgroundColor: "#9A643D", color: "#EFEEE6" },
          "100%": { backgroundColor: "#CECB5B" },
        },
      },
    },
    plugins: [],
  },
};
