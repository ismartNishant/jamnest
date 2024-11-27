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
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        'upper-alpha': 'upper-alpha', // Uppercase letters (A, B, C)
        'lower-alpha': 'lower-alpha', // Lowercase letters (a, b, c)
      },
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
        },
        dark: {
          DEFAULT: "#111111",
          2: "#1d1d1f",
          3: "#4B5560",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        gray: {
          DEFAULT: "#EFF4FB",
          dark: "#111111",
          1: "#F9FAFB",
          2: "#F3F4F6",
          3: "#E5E7EB",
          4: "#D1D5DB",
          5: "#9CA3AF",
          6: "#6B7280",
          7: "#374151",
        },
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(), require('tailwindcss-animate')]
}
