import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx,astro}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
      Fira: ["Fira Mono", "monospace"],
      Poetsen: ["Poetsen One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        wtsecondary: "#087e8b",
        wtprimary: "#fffff",
        ltwtsecondary: "#087e8b1c",

        // dark mode
        secondary: "#00ffee",
        darkary: "#292f36",
        ltseondary: "#00ffee23",
        primary: "#ffffff",
      },
      boxShadow: {
        small: "0 0 5px  var(--main-color)",
        medium: "0 0 15px var(--main-color)",
        wtsmall: "0 0 5px #8AAAE5",
        wtmedium: "0 0 15px #8AAAE5",
        "3xl": "0 0 25px var(--main-color)",
        "4xl":
          "0 0 10px var(--main-color), 0 0 20px var(--main-color),0 0 50px var(--main-color)",
        "5xl": "0 0 25px  #8AAAE5",
        "6xl": "0 0 10px #8AAAE5, 0 0 20px #8AAAE5,0 0 50px #8AAAE5",
      },
    },
  },
  plugins: [],
};
export default config;
