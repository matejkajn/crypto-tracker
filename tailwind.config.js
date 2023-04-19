/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
        'font-family',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'segoe ui',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ]
      }
    },
  },
  plugins: [],
}

