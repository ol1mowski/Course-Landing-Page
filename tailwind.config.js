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
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        }
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      boxShadow: {
        headerBoxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
        cardBoxExcusesShadowHover: "0px 4px 30px 0px rgba(255, 0, 0, 0.25)",
        cardBoxBenefitsShadowHover: "0px 4px 30px 0px rgba(32,201,151, 0.55)",
        blueShadow: "0px 1px 5px 0px rgba(0, 122, 255, 0.25)",
        cardBoxTargetShadowHover: "0px 4px 30px 0px rgba(0, 122, 255, 0.25)",
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
