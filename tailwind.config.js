const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: "0 25px 50px -12px rgba(0, 0, 0, 0.95)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",
      test:
        "10px 10px 12px 1px rgba(0, 0, 0, 0.35), inset 11px 5px 16px -1px rgba(255, 255, 255, 0.25)",
      shell:
        "inset -15px -10px 25px 6px rgba(163, 94, 150, 0.53), inset 10px 10px 21px 9px rgba(255, 255, 255, 0.46)",
      screen:
        "inset -5px 5px 25px -5px rgba(0, 0, 0, 0.80), inset 5px -5px 25px -5px rgba(0, 0, 0, 0.80)",
      none: "none",
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: colors.black,
      white: colors.white,
      purple: {
        medium: "#351D9C",
      },
      green: {
        medium: "#6ebd8f",
        dull: "#717253",
      },
      pink: {
        bright: "#F047CB",
      },
      yellow: {
        bright: "#FDFB43",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["serif"],
      mono: ['"vt323 regular"', "monospace"],
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        80: "80px",
        440: "440px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
