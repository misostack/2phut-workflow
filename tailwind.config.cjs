/** @type {import('tailwindcss').Config} */
const tailwindColors = require("tailwindcss/colors");
const colorSafeList = [];

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = [
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
];

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue;
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const pallette = tailwindColors[colorName];

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`);
        colorSafeList.push(`bg-${colorName}-${shade}`);
      }
    });
  }
}
module.exports = {
  safelist: colorSafeList,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...tailwindColors,
        primary: "#0f6360",
        grey: {
          500: "#d5d6d6",
        },
      },
      fontFamily: {
        body: ["'Inter', sans-serif"],
        heading: ["'Inter', sans-serif"],
      },
      textColor: {
        primary: "#0f6360",
      },
      backgroundColor: {
        primary: "#0f6360",
        cream: {
          500: "#f1f1f1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: 'base', // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
