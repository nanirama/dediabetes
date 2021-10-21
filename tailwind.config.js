const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.mdx'],
  theme: {
    inset: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        themePrimary2: '#BC0404',
        themeLighterAlt: '#fcf2f3',
        themeLighter: '#f3cdd0',
        themeLight: '#e9a5aa',
        themeTertiary: '#d35860',
        themeSecondary: '#be1c27',
        themeDarkAlt: '#a3050f',
        themeDark: '#8a040d',
        themeDarker: '#65030a',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#595858',
        neutralSecondary: '#373737',
        neutralPrimaryAlt: '#2f2f2f',
        neutralPrimary: '#000000',
        neutralDark: '#151515',
        black: '#0b0b0b',
        white: '#ffffff',
        themePrimary: '#5a5759',
        themeInfo: '#5a5c5f',
        themeSuccess: '#7c914f',
        themeWarning: '$f98117',
        themeDanger: '#f44336',
        themeLightAccent: '#E4AF88',
        themeLightShade: '#ECECE8',
        themeBrandColor: '#b70610',
        themeDarkAccent: '#d1aa75',
        themeDarkShade: '#646464',
        themeFontColor: '#5a5759',
        themeMainBg: '#ffffff',
      },
      fontFamily: {
        body: ['Raleway'],
        headings: ['Source Serif Pro'],
      },
      height: {
        xl: '350px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
       '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
       'blog': 'minmax(0, 1fr) 300px',
      },
      backgroundImage: theme => ({
        hero: "url('/src/assets/books.jpg')",
      }),
    },
  },
  variants: { display: ['responsive', 'group-hover', 'group-focus'] },
  plugins: [],
};
