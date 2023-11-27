import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#221f10',
          200: '#333333',
          300: '#444444',
        },
        light: '#f5d5d5',
        bright: '#ffffff',
        primary: '#0055aa',
        secondary: '#77825f', // #ff4400
      },
    },
  },
  plugins: [],
}
export default config
