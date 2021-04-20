module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    minHeight: {
      "60vh": "60vh",
    },
    extend: {
      boxShadow: {
        "3xl": "10px 0 30px -15px rgba(0, 0, 0, 0.3)",
      },
      font: {
        Lato: "Lato",
        Montserrat: "Montserrat",
      },
      width: {
        120: "30rem",
      },
      height: {
        120: "30rem",
        150: "48rem",
        staticFull: "100rem",
        longFull: "150rem",
      },
      animation: {
        blink: "blink 2s infinite",
        fadein: "fadein 1s linear forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.6" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
