/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rosa": "#683171",
        "roxo": "#553882",
        "ciano": "#4591a1",
        "cinza": "#4d4d4d"
      },
      fontFamily: {
        'poppins-regular': ['Poppins-regular', 'sans-serif'],
        'poppins-semibold': ['Poppins-semibold', 'sans-serif'],
        'poppins-extrabold': ['Poppins-extrabold', 'sans-serif']
      },
    },
  },
  plugins: [],
}

