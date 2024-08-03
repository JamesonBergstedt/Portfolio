/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        lightblue: "var(--lightblue)",
        blue_text: "var(--blue_text)",
        red: "var(--red)",
        lightred: "var(--lightred)",
        red_text: "var(--red_text)",
        yellow: "var(--yellow)",
        lightyellow: "var(--lightyellow)",
        yellow_text: "var(--yellow_text)",
        green: "var(--green)",
        lightgreen: "var(--lightgreen)",
        green_text: "var(--green_text)",
      },
      fontSize: {
        header_lg: "clamp(0.75rem, 2vw, 4rem)",
        header_sm: "clamp(0.40rem, 1vw, 1.25rem)",
        nav: "clamp(0.5rem, 0.75vw, 1.25rem)",
        typewriter: "clamp(1.75rem, 2.5vw, 6rem)",
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
