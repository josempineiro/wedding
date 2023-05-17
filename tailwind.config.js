/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#6b89ff",
          100: "#5b7af5",
          200: "#4c6bea",
          300: "#3c5ccf",
          400: "#324aae",
          500: "#2a3a8d",
          600: "#24306f",
          700: "#1d2651",
          800: "#161c33",
          900: "#0f1215",
        },
        secondary: {
          50: "#ff6b6b",
          100: "#f55b5b",
          200: "#ea4c4c",
          300: "#cf3c3c",
          400: "#ae3232",
          500: "#8d2a2a",
          600: "#6f2424",
          700: "#511d1d",
          800: "#331616",
          900: "#150f0f",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
