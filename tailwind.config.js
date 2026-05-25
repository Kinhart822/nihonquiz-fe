/** @type {import('tailwindcss').Config} - Config updated */

import forms from '@tailwindcss/forms';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comic Neue"', 'sans-serif'],
        display: ['"Baloo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
  ],
}
