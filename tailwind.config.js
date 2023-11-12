/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'off-white': '#f7f8f8',
        'transparent-white': 'rgba(255, 255, 255, 0.08)',
        background: '#000212',
        'grey-dark': '#222326',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-conic-lightbar':
          'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
        'radial-faded':
          'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
      },

      // robbin cards
      width: {
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
    },
    animation: {
      bounce: 'bounce 3s infinite',
      // ping: '1s cubic-bezier(0, 0, 0.2, 1) infinite',
    },
    keyframes: {
      // ping: {
      //   '75%, 100%': {
      //     transform: 'scale(2)',
      //     opacity: '0',
      //   },
      // },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },

      // colors: {
      //   titanium: '#BEB8AE',
      // },
    },
  },
  plugins: [],
  darkMode: 'class',
};
