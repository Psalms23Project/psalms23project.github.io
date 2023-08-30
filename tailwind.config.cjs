/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      charter: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif'],
      hightower: ['High Tower text', 'Charter', 'Sitka Text', 'Cambria', 'serif'],
      karla: ['Karla', 'sans-serif'],
    },
    extend: {
      colors: {
        navyblue: "#273348",
        navybluedark: "#1B2332",
        violet: {
          100: "#EEEEF7",
          200: "#E3E3F2",
          300: "#BCBCCD",
        }
      },
      backgroundImage: {
        'birch-tree': "url('/images/birch-tree.jpg')",
      }
    },
  },
  plugins: [],
};

module.exports = config;
