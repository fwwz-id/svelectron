const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,svelte}"],
  theme: {
    extend: {
      colors: {
        mirage: "#101924",
        "royal-blue": "#6545EC",
        cranberry: "#D957A4",
        "picton-blue": {
          light: "#51A2E2",
          darken: "#2E90ED",
        },
        martinique: "#33324D",
        conifer: "#94D847",
        "glossy-white": "#ffffffc2"
      },
      fontFamily: {
        sans: ["Inter Tight", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
