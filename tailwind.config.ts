import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: '1176px',
    },
    padding: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '64px',
    },
    gap: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '64px',
    },
    colors: {
      light: {
        primary: 'rgb(var(--color-light-primary))',
        secondary: 'rgb(var(--color-light-secondary))',
        background: 'rgb(var(--color-light-background))',
        text: 'rgb(var(--color-light-text))',
        neutral: {
          dark: 'rgb(var(--color-light-neutral-dark))',
          gray: 'rgb(var(--color-light-neutral-gray))',
          white: 'rgb(var(--color-light-neutral-white))',
        },
        link: 'rgb(var(--color-light-link))',
      },
    },
    borderRadius: {
      sm: '11px',
      md: '22px',
      lg: '44px',
    },
    fontSize: {
      'h1-mobile-lg': [
        '32px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h1-mobile-sm': [
        '23.61px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h2-mobile': [
        '22.13px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h3-mobile': [
        '20.74px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h4-mobile': [
        '19.44px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h5-mobile': [
        '18.22px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 400 },
      ],
      'h6-mobile': [
        '17.07px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 400 },
      ],
      'h1-desktop-lg': [
        '72px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h1-desktop-sm': [
        '47.8px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h2-desktop': [
        '39.81px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h3-desktop': [
        '33.18px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h4-desktop': [
        '27.65px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 700 },
      ],
      'h5-desktop': [
        '23.04px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 400 },
      ],
      'h6-desktop': [
        '19.2px',
        { lineHeight: '1.15em', letterSpacing: '-0.02em', fontWeight: 400 },
      ],
      button: [
        '16px',
        { lineHeight: '1.6em', letterSpacing: '-0.02em', fontWeight: 500 },
      ],
      p: ['16px', { lineHeight: '1.6em', fontWeight: 400 }],
      'small-lg': ['13.3px', { lineHeight: '1.6em', fontWeight: 400 }],
      'small-lg-bold': ['13.3px', { lineHeight: '1.6em', fontWeight: 700 }],
      'small-sm': ['11.1px', { lineHeight: '1.6em', fontWeight: 400 }],
      'small-sm-bold': ['11.1px', { lineHeight: '1.6em', fontWeight: 700 }],
    },
    extend: {
      borderWidth: {
        'line-width': '2.5px',
      },
      minWidth: {
        'line-width': '2.5px',
        'line-mobile': '32px',
        'line-desktop': '112px',
      },
      width: {
        'line-width': '2.5px',
        'line-mobile': '32px',
        'line-desktop': '112px',
      },
      maxWidth: {
        desktop: '1176px',
      },
      minHeight: {
        'line-width': '2.5px',
        'line-mobile': '32px',
        'line-desktop': '112px',
      },
      height: {
        'line-width': '2.5px',
        'line-mobile': '32px',
        'line-desktop': '112px',
      },
    },
  },
  plugins: [],
};
export default config;
