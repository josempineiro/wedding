/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        12: "12px",
      },
      colors: {
        primary: {
          50: "#3b6de6",
          100: "#3762dc",
          200: "#3257d2",
          300: "#2e4cc8",
          400: "#2941be",
          500: "#2437b4",
          600: "#1f2caa",
          700: "#1a219f",
          800: "#151795",
          900: "#100c8b",
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
