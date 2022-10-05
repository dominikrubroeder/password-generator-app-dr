/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-gray-900': 'hsl(248, 15%, 11%)',
        'app-gray-800': 'hsl(248, 10%, 15%)',
        'app-gray-500': 'hsl(251, 9%, 53%)',
        'app-gray-200': 'hsl(252, 11%, 91%)',
        'app-blue': 'hsl(248, 15%, 11%)',
        'app-green': 'hsl(127, 100%, 82%)',
        'app-red': 'hsl(0, 91%, 63%)',
        'app-orange': 'hsl(13, 95%, 66%)',
        'app-yellow': 'hsl(42, 91%, 68%)',
      },
      keyframes: {
        width: {
          '0%': {
            width: '0%',
            transform: 'translateY(0)',
          },
          '20%': {
            width: '2%',
            transform: 'translateY(0)',
          },
          '75%': {
            width: '100%',
            transform: 'translateY(0)',
          },
          '100%': {
            width: '100%',
            transform: 'translateY(100%)',
          },
        },
        height: {
          '0%': {
            height: '0%',
          },
          '25%': {
            height: '25%',
          },
          '50%': {
            height: '50%',
          },
          '75%': {
            height: '100%',
          },
          '100%': {
            height: '100%',
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
        fadeUp: {
          '0%': {
            transform: 'translateY(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
      },
      animation: {
        width: 'width .8s ease-out forwards',
        height: 'height .4s ease-in-out forwards',
        fadeUp: 'fadeUp .2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
