/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        khadi: '#E7D7B6',
        mustard: '#D8A84E',
      },
    },
  },
  plugins: [],
}