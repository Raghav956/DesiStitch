/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        mustard: '#d4b06a',

        cream: '#faf7f2',

        softBlack: '#111111',
      },

      maxWidth: {

        site: '1500px',
      },

      borderRadius: {

        luxury: '40px',
      },

      boxShadow: {

        luxury:
          '0 10px 40px rgba(0,0,0,0.08)',
      }
    },
  },

  plugins: [],
}