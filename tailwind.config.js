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
      },
      aspectRatio: {
        16: '16',
        9: '9',
        4: '4',
        3: '3',
        '1/2': '1/2',
        '1/3': '1/3',
        '2/3': '2/3',
        '1/4': '1/4',
        '3/4': '3/4'
      }
    }
  },
  plugins: []
};
