/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boxdark: "#24303F",
        boxdark2: "#1A222C",
        strokedark: "#2E3A47",
        "meta-4": "#313D4A",
      },
      animation: {
        "gradient-xy": "gradient-xy 15s ease infinite",
        blob: "blob 25s infinite linear",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40vw, -20vh) scale(1.2)" },
          "66%": { transform: "translate(-20vw, 40vh) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
