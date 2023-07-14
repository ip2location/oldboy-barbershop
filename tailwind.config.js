/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-title": "#d6a354",
      },
      fontFamily: {
        rex: ["Rex_Bold", "Arial", "sans-serif"],
        rex_inline: ["Rex_Inline", "Arial", "sans-serif"],
      },
      skew: {
        '15': '-15deg',
      }
    },
  },
  plugins: [],
};
