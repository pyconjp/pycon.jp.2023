/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat_alterenates: ['var(--font-montserrat_alternates)'],
    },
    colors: {
      primary: {
        DEFAULT: '#90629D',
        50: '#EDF1F7',
        100: '#E9E0EB',
        200: '#D3C0D8',
        300: '#A682B0',
        400: '#A682B0',
        500: '#90629D',
        600: '#734F7D',
        700: '#3A273F',
        800: '#563B5E',
        900: '#1D141F',
      },
      secondary: {
        DEFAULT: '#4D70B2',
        50: '#EDF1F7',
        100: '#DBE2F0',
        200: '#B8C6E0',
        300: '#94A9D1',
        400: '#708DC2',
        500: '#4D70B2',
        600: '#3D5A8F',
        700: '#2E436B',
        800: '#1F2D47',
        900: '#0F1624',
      },
      tertiary: {
        DEFAULT: '#1ADFE5',
        50: '#E8FCFC',
        100: '#D1F9FA',
        200: '#A3F2F5',
        300: '#75ECF0',
        400: '#47E5EB',
        500: '#1ADFE5',
        600: '#14B2B8',
        700: '#0F868A',
        800: '#0A595C',
        900: '#052D2E',
      },
      'alt-white': {
        DEFAULT: '#FDFCEE',
      },
      'alt-black': {
        DEFAULT: '#111C3B',
      }
    },
  },
  plugins: [],
}

