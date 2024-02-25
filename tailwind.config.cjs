/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      serif: ['High Tower text', 'Charter', 'Sitka Text', 'Cambria', 'serif'],
      sans: ['Work Sans', 'sans-serif'],
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
        b: '#1C88D0'
      },
      backgroundImage: {
        'birch-tree': "url('/images/birch-tree.jpg')",
        'featured-psalm': "url('/images/covers/psalm-90.jpg')"
      }
    },
  },
  plugins: [],
};

module.exports = config;
