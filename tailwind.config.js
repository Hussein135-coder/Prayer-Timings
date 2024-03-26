/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-400": "repeat(auto-fill, minmax(400px, 1fr))",
        "auto-325s": "repeat(auto-fill, minmax(325px, 1fr))",
      },
    },
  },
  plugins: [],
};
