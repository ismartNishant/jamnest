import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF2883',
          50:  '#FFE0EC',
          100: '#FFB3D0',
          200: '#FF80B3',
          300: '#FF4D96',
          400: '#FF337D',
          500: '#FF2883',
          600: '#D1236F',
          700: '#A31C5A',
          800: '#751646',
          900: '#471031'
        },
        secondary: {
          DEFAULT: '#4C24C1',
          50:  '#E4E0F9',
          100: '#C7BFF2',
          200: '#A499EA',
          300: '#806FE1',
          400: '#654DD9',
          500: '#4C24C1',
          600: '#421EA8',
          700: '#36188A',
          800: '#29126B',
          900: '#07011c'
        },
        customGreen: {
          DEFAULT: '#87E64B',
          50:  '#F2FBE4',
          100: '#DBF4B5',
          200: '#C3ED87',
          300: '#A8E55C',
          400: '#94DB3E',
          500: '#87E64B',
          600: '#6CC03D',
          700: '#559A31',
          800: '#3E7325',
          900: '#284D18'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(), require('tailwindcss-animate')]
}
