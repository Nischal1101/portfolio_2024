/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(3px)", opacity: "1" },
          "50%": { transform: "translateY(-3px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
