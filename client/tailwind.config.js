module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    minHeight: {
      "60vh": "60vh",
    },
    extend: {
      text: {
        xs: { fontSize: "0.75rem", lineHeight: "1rem" },
      },
      boxShadow: {
        "3xl": "10px 0 30px -15px rgba(0, 0, 0, 0.3)",
      },
      font: {
        Lato: "Lato",
        Montserrat: "Montserrat",
      },
      width: {
        120: "30rem",
        longFull: "150rem",
      },
      height: {
        120: "30rem",
        150: "48rem",
        staticFull: "100rem",
        longFull: "150rem",
      },
      inset: {
        120: "30rem",
      },
      animation: {
        blink: "blink 2s infinite",
        fadein: "fadein 1s linear forwards",
        rotate: "rotate 1s infinite linear",
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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
      },
      duration: {
        "3s": { "transition-duration": "3000ms" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
