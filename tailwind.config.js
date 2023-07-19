/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2',
        'brand-green': '#17BF63',
        'header-bg': '#131313',
        'orange-title': '#d6a354',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontFamily: {
        rex: ['Rex-Bold', 'sans-serif'],
        rex_inline: ['Rex-Inline', 'Arial', 'sans-serif'],
      },
      skew: {
        15: '-15deg',
      },
    },
  },
  variants: {},
  plugins: [],
};
