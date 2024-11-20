/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        headerBoxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        primary: "#007ACC",
      },
      transitionDelay: {
        700: "700ms",
      }
    },
  },
  plugins: [],
};
