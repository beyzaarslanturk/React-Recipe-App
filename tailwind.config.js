/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(254 226 226)',
        'secondary': '#ef4444',
        'dark': 'rgb(100 116 139)',
        'light': '#f1f5f9',
      }
    },
  },
  plugins: [],
}

