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
        "link-decoration-hover": "#707070",
        "link-hover-dark": "#bababa",
        "link-hover-light": "#707070",
      },
    },
  },
};
