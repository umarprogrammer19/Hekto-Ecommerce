// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if you're using App Directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#1F5591',  // Example of a primary color
        secondary: '#FF6347', // Example of a secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font for the project
        // Add more if needed
      },
      spacing: {
        // Custom spacing if needed
        '128': '32rem', // Example for custom spacing
      },
    },
  },
  plugins: [],
}

export default config
