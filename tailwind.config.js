const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        red: {
          100: '#FAEBEB',
          200: '#F2CCCE',
          300: '#EAADB1',
          400: '#DB7076',
          500: '#CB333B',
          600: '#B72E35',
          700: '#7A1F23',
          800: '#5B171B',
          900: '#3D0F12',
        },
        'light-red': {
          100: '#FCECEA',
          200: '#F7CECC',
          300: '#F3B1AD',
          400: '#E9776F',
          500: '#E03C31',
          600: '#CA362C',
          700: '#86241D',
          800: '#651B16',
          900: '#43120F',
        },
        'dark-red': {
          100: '#F5EAEA',
          200: '#E7CACB',
          300: '#D8AAAC',
          400: '#BB6B6D',
          500: '#9E2B2F',
          600: '#8E272A',
          700: '#5F1A1C',
          800: '#471315',
          900: '#2F0D0E',
        },
        blue: {
          100: '#E9EDEF',
          200: '#C9D2D7',
          300: '#A8B7BE',
          400: '#66808E',
          500: '#254A5D',
          600: '#214354',
          700: '#162C38',
          800: '#11212A',
          900: '#0B161C',
        },
        'light-blue': {
          100: '#F2F4F6',
          200: '#DFE4E9',
          300: '#CBD4DC',
          400: '#A5B3C1',
          500: '#7E93A7',
          600: '#718496',
          700: '#4C5864',
          800: '#39424B',
          900: '#262C32',
        },
        'dark-blue': {
          100: '#E6EBED',
          200: '#BFCCD2',
          300: '#99ADB6',
          400: '#4D7080',
          500: '#003349',
          600: '#002E42',
          700: '#001F2C',
          800: '#001721',
          900: '#000F16',
        },
        main: {
          info: '#36B2E8',
          success: '#5BC88D',
          warning: '#FA9334',
          error: '#C84E4B',
        },
      },
      boxShadow: {
        xs: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        sm: '0px 1px 8px 0px rgba(0, 0, 0, 0.15)',
        primary: '0px 2px 12px 0px rgba(0, 0, 0, 0.15)',
        md: '0px 3px 16px 0px rgba(0, 0, 0, 0.15)',
        lg: '0px 4px 24px 0px rgba(0, 0, 0, 0.15)',
        xl: '0px 8px 32px 0px rgba(0, 0, 0, 0.15)',
        '2xl': '0px 12px 40px 0px rgba(0, 0, 0, 0.15)',
        '3xl': '0px 16px 48px 0px rgba(0, 0, 0, 0.15)',
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.w-05': {
          width: '4px',
        },
        '.w-11-5': {
          width: '2.875rem',
        },
        '.h-11-5': {
          height: '2.875rem',
        },
        '.w-15': {
          width: '3.875rem',
        },
        '.h-15': {
          height: '3.875rem',
        },
        '.w-72': {
          width: '18rem',
        },
        '.w-80': {
          width: '20rem',
        },
        '.min-h-10': {
          minHeight: '2.5rem',
        },
        '.max-h-56': {
          maxHeight: '14rem',
        },
        '.averta-extra-thin': {
          fontFamily: 'AvertaStdPE-Extrathin',
        },
        '.averta-thin': {
          fontFamily: 'AvertaStdPE-Thin',
        },
        '.averta-light': {
          fontFamily: 'AvertaStdPE-Light',
        },
        '.averta-regular': {
          fontFamily: 'AvertaStdPE-Regular',
        },
        '.averta-semi-bold': {
          fontFamily: 'AvertaStdPE-Semibold',
        },
        '.averta-bold': {
          fontFamily: 'AvertaStdPE-Bold',
        },
        '.averta-black': {
          fontFamily: 'AvertaStdPE-Black',
        },
        '.transition-left': {
          transition: 'left 0.05s ease-in-out',
        },
        '.left-50': {
          left: '50%',
        },
        '.left-4': {
          left: '0.25rem',
        },
        '.gradient-red-45': {
          background: 'linear-gradient(25.7deg, #9E2B2F 34.6%, #CB333B 74.11%, #E03C31 100%)',
        },
        '.bg-inherit': {
          'background-color': 'inherit',
        },
        '.pseudo-content': {
          content: "''",
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
