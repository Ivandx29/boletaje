/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

