module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'black-gradient': `linear-gradient(to right, ${theme(
          'colors.black'
        )}, ${theme('colors.white')})`,
        'yellow-gradient': `linear-gradient(to right, #F6D365, #FDA085)`,
        'green-gradient': `linear-gradient(to right, #57CBAF, #2FA84F)`,
        'blue-gradient': `linear-gradient(to right, #9BAAFA, #367BF5)`,
        'teal-gradient': `linear-gradient(to right, #77A7BC, #1D8989)`,
        'maroon-gradient': `linear-gradient(to right, #80688E, #4F586A)`,
        'red-gradient': `linear-gradient(to right, #F4977B, #F95656)`,
        'orange-gradient': `linear-gradient(to right, #F4977B, #F9567E)`
      }),
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1440px'
      },
      colors: {
        brand: '#069697',
        yellow: '#F3AA18',
        green: '#2FA84F',
        orange: '#FA5D50',
        red: '#FA5050',
        blue: '#367BF5',
        teal: '#069697',
        'yellow-light': '#FCF3D7',
        'green-light': '#DCF7E3',
        'red-light': '#FEE4E2',
        'blue-light': '#E6EFFF',
        'teal-light': '#DAF5F2',
        dark: '#000000',
        'gray-1': '#3E4345',
        'gray-2': '#5E6366',
        'gray-3': '#919699',
        'gray-4': '#C6CACC',
        'gray-5': '#E3E5E6',
        'gray-6': '#F1F3F4',
        'gray-7': '#F7F9FA',
        white: '#FFFFFF'
      },
      boxShadow: {
        primary: '0px 4px 4px 4px rgba(236, 33, 38, 0.05)',
        secondary: '0px 2px 4px 4px rgba(236, 33, 38, 0.05)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-sherif'],
        sherif: ['Montserrat', 'serif'],
        mono: ['Menlo', 'monospace']
      },
      fontSize: {
        exs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px'
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeight: {
        none: 1,
        shorter: 1.25,
        short: 1.375,
        normal: 1.5,
        tall: 1.625,
        taller: 2
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        'tight-md': '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      }
    }
  }
};
