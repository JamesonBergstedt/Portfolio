/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#4285F4",
      lightblue: "#86A3D4",
      blue_text: "#F2F5FF",
      red: "#DB4437",
      lightred: "#E98383",
      red_text: "#F6CBCB",
      yellow: "#FDC82F",
      lightyellow: "#FFD96C",
      yellow_text: "#594C26",
      green: "#0F9D58",
      lightgreen: "#86AF9B",
      green_text: "#CFF6E4",
    },
    extend: {
      fontSize: {
        header_lg: "clamp(0.75rem, 2vw, 4rem)",
        header_sm: "clamp(0.75rem, 1vw, 1.25rem)",
        nav: "clamp(0.5rem, 0.75vw, 1.25rem)",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Serif", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        azeret: ["Azeret Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
