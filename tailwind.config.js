/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        default: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: "#161616",
        "text-dark": "#EDEDED",
        "text-alt-dark": "#7E7E7E",
        "text-light": "#161616",
        "text-alt-light": "#858585",
        "link-decoration-hover": "#707070",
        "link-hover-dark": "#bababa",
        "link-hover-light": "#707070",
      },
    },
  },
};
