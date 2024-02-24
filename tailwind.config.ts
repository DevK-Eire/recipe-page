import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px', // Mobile
        lg: '1440px', // Desktop
      },
      colors: {
        nutmeg: 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        white: 'hsl(0, 0%, 100%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        eggshell: 'hsl(30, 54%, 90%)',
        'light-grey': 'hsl(30, 18%, 87%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        'young-serif': ['"Young Serif"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
    },
  },
  plugins: [],
};
export default config;
