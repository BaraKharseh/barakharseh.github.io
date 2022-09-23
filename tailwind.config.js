/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      animation: {
        fadeInOut: "fadeInOut 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: 0 },
          "25%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      boxShadow: {
        "xl-dark": "0 20px 25px -5px rgb(200 200 200 / 0.3)",
      },
      width: {
        "1/18": "5.56%",
      },
      fontSize: {
        "5vw": "5vw",
        "4vw": "4vw",
        "3vw": "3vw",
        "2vw": "2vw",
        "1.5vw": "1.5vw",
      },
      padding: {
        "10vh": "10vh",
        "10vw": "10vw",
        "5vw": "5vw",
      },
    },
  },
  plugins: [],
};
