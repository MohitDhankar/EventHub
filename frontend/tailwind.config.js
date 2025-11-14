/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          600: "#7c3aed",
          700: "#6d28d9"
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          600: "#2563eb",
          700: "#1d4ed8"
        },
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      maxWidth: {
        '7xl': '80rem'
      }
    },
  },
  plugins: [],
};
