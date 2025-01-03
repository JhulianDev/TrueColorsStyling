/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'greenIntense': {
          100: '#01a29a',
          200: '#2fb5ad',
          300: '#49c8c0',
          400: '#60dcd3'
        },
        'greenMedium': {
          100: '#87d1d2',
          200: '#9ae5e6',
          300: '#aef9fa',
          400: '#dcffff'
        },
        'greenLight': {
          100: '#cceceb',
          200: '#d3f3f2',
          300: '#d9f9f8',
          400: '#e2fffe'
        },
        'brownIntense': {
          100: '#8d6c63',
          200: '#a6847a',
          300: '#bf9c92',
          400: '#d9b5ab'
        },
        'brownMedium': {
          100: '#f3e6dd',
          200: '#faede4',
          300: '#fff4ec',
          400: '#fffbf8'
        },
        'brownLight': {
          100: '#f8f2f2',
          200: '#fff9f9',
        },
        'grayIntense': {
          100: '#303030',
          200: '#3f3f3f',
          300: '#4f4f4f',
          400: '#606060'
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
    screens: {
      desktop: { max: '1535px' }, // Desktops estándar y superiores
      laptop: { max: '1280px' },  // Laptops y grandes tablets horizontales
      tablet: { max: '1024px' },  // Tablets estándar en vertical
      largeMobile: { max: '768px' }, // Móviles grandes o tablets pequeñas
      mobile: { max: '425px' },   // Smartphones estándar en vertical
    },
  },
  plugins: [],
}