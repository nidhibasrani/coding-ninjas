/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "400% 50%" },
        },
      },
      backgroundImage: {
        "gradient-multi":
          "linear-gradient(105deg, #75b469, #efce74, #fb833f, #fecc4f, #fb11e0, #fe732b, #0149ff, #01a3ff, #3e85fe, #883eec, #75b469)",

        "footer-gradient":
          "linear-gradient(286deg, #262121 9.3%, #ae8975 331.33%), url('/assets/footerBg.webp')",
      },
      colors: {
        orange: "#F66C3B",
        black: "#141414",
        lightBg: "#fffbf5",
        grey: "#2D2D2D",
        ligthBlack: "#1F1F1F",
      },
      fontFamily: {
        mulish: ["Mulish"],
      },
    },
  },
  plugins: [],
};
