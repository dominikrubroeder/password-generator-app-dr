/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-gray-900': 'hsl(248, 10%, 15%)',
        'app-gray-500': 'hsl(251, 9%, 53%)',
        'app-gray-200': 'hsl(252, 11%, 91%)',
        'app-blue': 'hsl(248, 15%, 11%)',
        'app-green': 'hsl(127, 100%, 82%)',
        'app-red': 'hsl(0, 91%, 63%)',
        'app-orange': 'hsl(13, 95%, 66%)',
        'app-yellow': 'hsl(42, 91%, 68%)',
      },
    },
  },
  plugins: [],
};
