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
        dark: '#0a0a0a',
        charcoal: '#222222',
        gray: '#333333',
        light: '#d5d5d5',
        bright: '#ffffff',
        blue: '#0077cc',
        orange: '#ff6600',
      },
    },
  },
  plugins: [],
}
export default config
