/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8E2B',
        secondary: '#2E77AE',
        tertiary: '#0D2137',
        quaternary: '#E0EAF5'
      }
    }
  },
  plugins: []
};
