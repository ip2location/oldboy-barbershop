/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2',
        'brand-green': '#17BF63',
        'header-bg': '#131313',
        'orange-title': '#d6a354',
        'gold-title': '#BFA15C',
        'btn-blue': '#56afe1',
        'orange-bg': '#896322',
        'opacity-tan': '#333',
        'orange-light': '#d29c4e;',
        reddish: '#af212e',
        'footer-grey': '#aeaeae',
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
        button_font: ['Open Sans', 'Arial', 'sans-serif'],
      },
      skew: {
        15: '-15deg',
      },
      boxShadow: {
        btn: '0 3px 10px rgba(84,220,179,.5)',
      },
      width: {
        180: '180px',
      },
      minWidth: {
        180: '180px',
      },
      maxWidth: {
        180: '180px',
        1800: '1800px',
      },
      bgImage: {
        gradient24: 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(.37,0,.8,.77) infinite',
      },
      flexBasis: {
        'footer-basis': "calc(100% - 320px)",
      },
      width: {
        'stageImageWidth': "calc(100% + 40px)",
      },
      backgroundSize: {
        '150': '150px',
      },
      screens: {
        sm: '360px',
      },
    },
  },
  variants: {},
  plugins: [],
};
