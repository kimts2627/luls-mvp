// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
module.exports = {
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
        'nesting-rules': true
      },
    },
  },
};

// module.exports = {
//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'postcss-nesting',
//     'postcss-flexbugs-fixes',
//     [
//       'postcss-preset-env',
//       {
//         autoprefixer: {
//           flexbox: 'no-2009'
//         },
//         stage: 3,
//         features: {
//           'custom-properties': false,

//         }
//       }
//     ]
//   ]
// };
