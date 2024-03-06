/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "blue-violet": {
          50: "#eff4fe",
          100: "#e2eafd",
          200: "#cbd7fa",
          300: "#abbdf6",
          400: "#8a9aef",
          500: "#6d79e7",
          600: "#585adb",
          700: "#4342c0",
          800: "#38399b",
          900: "#34367b",
          950: "#1e1e48",
        },
        "gulf-blue": {
          50: "#ebf6ff",
          100: "#d3eaff",
          200: "#b1daff",
          300: "#7cc6ff",
          400: "#3ea4ff",
          500: "#127cff",
          600: "#0057ff",
          700: "#003eff",
          800: "#0033cf",
          900: "#0632a2",
          950: "#081a51",
        },
      },
    },
  },
  plugins: [],
};
