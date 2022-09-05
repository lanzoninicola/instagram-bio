/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#F3FFA7",
          700: "#A7C200",
        },
        green: {
          300: "#6EC6CA",
          400: "#149296",
        },
        pink: {
          300: "#D9C6DE",
          400: "#B89EC5",
          700: "#8474A1",
        },
        black: {
          400: "#0F162B",
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
          "radial-gradient(60.9% 70.9% at 52.97% 30.82%, rgba(31, 52, 35, 0) 37.14%, #149296 77.89%)",
        "service-image-overlay":
          "linear-gradient(180deg, rgba(206, 203, 91, 0) 42.48%, #F3FFA7 92.67%)",
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
