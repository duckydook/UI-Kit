const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#F4DCBB',
          200: '#F3D7B1',
          300: '#F2D3A8',
          400: '#F1CE9E',
          500: '#F0CA95',
          600: '#F0C58B',
          700: '#EFC182',
          800: '#EEBC78',
          900: '#ECB365',
        },
        blue: {
          100: '#325BEC',
          200: '#2D56E3',
          300: '#2950DB',
          400: '#244BD2',
          500: '#2045CA',
          600: '#1B40C1',
          700: '#173AB9',
          800: '#0E2FA8',
          900: '#092A9F',
        },
        'dark-blue': {
          100: '#28313E',
          200: '#242F3D',
          300: '#202D3B',
          400: '#1C2B3A',
          500: '#182938',
          600: '#142637',
          700: '#102435',
          800: '#0C2234',
          900: '#082032',
        },
        main: {
          info: '#325BEC',
          success: '#32A534',
          warning: '#ECB365',
          error: '#EF5656',
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
