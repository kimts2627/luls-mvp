// module.exports = {
//   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       boxShadow: {
//         "3xl": "10px 0 30px -15px rgba(0, 0, 0, 0.3)",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
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
        staticFull: "100rem",
      },
      animation: {
        blink: "blink 0.7s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
