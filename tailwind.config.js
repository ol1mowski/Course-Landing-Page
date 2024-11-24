/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.98)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
      boxShadow: {
        headerBoxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
        cardBoxExcusesShadowHover: "0px 4px 30px 0px rgba(255, 0, 0, 0.25)",
        cardBoxBenefitsShadowHover: "0px 4px 30px 0px rgba(32,201,151, 0.55)",
      },
      colors: {
        primary: "#007ACC",
      },
      transitionDelay: {
        700: "700ms",
      },
    },
  },
  plugins: [],
};
