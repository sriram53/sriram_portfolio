/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Authentic Batman Color Scheme
        'batman-black': '#080808',      // Vampire Black (Dark Mode Primary)
        'batman-taupe': '#AE8875',      // Light Taupe (Dark Mode Secondary)
        'batman-grey': '#515155',       // Davy's Grey (Light Mode Primary)
        'batman-light-grey': '#7F8086', // Gray (Light Mode Secondary)
        'batman-gold': '#ffd700',       // Classic Batman Gold accent
      },
      animation: {
        'gradient': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blink': 'blink 1s linear infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bat-flip': 'batFlip 0.6s ease-in-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700' },
          '100%': { boxShadow: '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'slideIn': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'batFlip': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
  },
  plugins: [],
};