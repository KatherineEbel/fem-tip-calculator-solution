module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Space Mono"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 46%)',
        'primary-lighter': 'hsla(172, 61%, 77%, 1)',
        'primary-dark': 'hsl(183, 100%, 15%)',
        'primary-medium-dark': 'hsl(186, 14%, 43%)',
        'primary-medium': 'hsl(183, 15%, 56%)',
        'primary-light': 'hsl(185, 41%, 84%)',
        'primary-extra-light': 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
        error: '#E17457'
      },
      opacity: {
        35: '.35',
      },
      outline: {
        primary: '1px solid hsl(172, 67%, 45%)',
        error: '1px solid #E17457',
      },
      maxWidth: {
        '4xl': '57.5rem',
      },
      screens: {
        mobile: '375px',
        desktop: '940px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
