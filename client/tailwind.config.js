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
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
