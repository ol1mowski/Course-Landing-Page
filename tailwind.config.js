/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-in': 'slideIn 0.7s ease-out'
      },
      boxShadow: {
        headerBoxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
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
