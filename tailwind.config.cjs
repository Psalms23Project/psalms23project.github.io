/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      serif: ['EB Garamond', 'Georgia', 'serif'],
      secondary: ['iowan old style', 'iowan', 'iowan bt', 'palatino linotype', 'urw palladio l', 'P052', 'serif'], 
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        navyblue: "#273348",
        navybluedark: "#1B2332",
        violet: {
          100: "#EEEEF7",
          200: "#E3E3F2",
          300: "#BCBCCD",
        },
      },
      backgroundImage: {
        'birch-tree': "url('/images/birch-tree.jpg')",
        'featured-psalm': "url('/images/covers/psalm-16.jpg')",
        'about': "url('/images/covers/psalm-49.jpg')",
      }
    },
  },
  plugins: [],
};

module.exports = config;
