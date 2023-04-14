/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '220px',
      // => @media (min-width: 320px)

      'md': '620px',
      // => @media (min-width: 820px)

      'lg': '1366px',
      // => @media (min-width: 1366px)

      'xl': '1920px',
      // => @media (min-width: 1920px)

      'xxl': '2400px',
      // => @media (min-width: 2560px)
    },
  },
  plugins: [],
};
