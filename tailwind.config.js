/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'style-primary': '#B87333',
      },
    },
  },

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: [
      {
        styledecorlight: {
          primary: "#B87333",
          secondary: "#D5C5A1",
          accent: "#F2EAD3",
          neutral: "#E6E2D3",
          "base-100": "#FAF7F0",
          info: "#A3A3A3",
          success: "#4CAF50",
          warning: "#F4A261",
          error: "#E63946",
        },
      },
      {
        styledecorsdark: {
          primary: "#8B4513",
          secondary: "#D2B48C",
          accent: "#A47551",
          neutral: "#4B2E2B",
          "base-100": "#2C1A1A",
          info: "#CFCFCF",
          success: "#7DD87D",
          warning: "#FFB347",
          error: "#FF6B6B",
        },
      },
    ],
    darkTheme: "styledecorsdark",
  },
};
