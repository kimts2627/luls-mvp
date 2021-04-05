module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "3xl": "10px 0 30px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
