/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // app folder của expo-router
    "./components/**/*.{js,jsx,ts,tsx}", // nếu bạn có folder components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
