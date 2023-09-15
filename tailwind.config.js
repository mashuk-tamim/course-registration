/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [],
}
=======
  plugins: [
    require('daisyui'),
  ],
}

>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449
