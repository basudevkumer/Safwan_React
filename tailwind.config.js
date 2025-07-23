/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00413D",
        secondary: "#E5745D",
        thirdcolor: "rgba(0, 65, 61, 0.7)",
        fourthcolor: "#ffffff",
      },
    },
    fontFamily: {
      vollkorn: ["Vollkorn", "serif"],
      jost: ["Jost", "sans-serif"],
    },
    maxWidth: {
      container: "1170px",
    },
  },
  plugins: [],
};
