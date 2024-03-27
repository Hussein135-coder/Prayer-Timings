/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-400": "repeat(auto-fill, minmax(400px, 1fr))",
        "auto-300": "repeat(auto-fill, minmax(300px, 1fr))",
        "auto-200": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
