/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-creepster)'],
        text: ['var(--font-roboto)'],
      },
    },
    backgroundImage: {
      home: "url('../public/images/home.png')",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
