/* eslint-disable no-undef */

function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");
  const newVars = Object.entries(allColors).reduce((vars, [key, val]) => {
    if (typeof val === "string") {
      vars[`--${key}`] = val;
    } else {
      Object.entries(val).forEach(([subKey, subVal]) => {
        vars[`--${key}-${subKey}`] = subVal;
      });
    }
    return vars;
  }, {});

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
    },
    keyframes: {
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
    },
  },
  plugins: [require("daisyui"), addVariablesForColors],
};
