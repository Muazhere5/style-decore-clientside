/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f4ec",          // light creamy white
        chocolate: "#4b2e2b",      // dark chocolate
        brightChocolate: "#6f4e37", // medium chocolate for dark mode
        greyChocolate: "#8d6e63",   // greyish chocolate
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        lighttheme: {
          primary: "#6f4e37",
          secondary: "#8d6e63",
          accent: "#4b2e2b",
          neutral: "#f8f4ec",
          "base-100": "#ffffff",
          "base-200": "#faf7f2",
          "base-300": "#f2ebe4",
          "base-content": "#000",
        },
      },
      {
        darktheme: {
          primary: "#f8f4ec",
          secondary: "#d7ccc8",
          accent: "#f8f4ec",
          neutral: "#6f4e37",
          "base-100": "#4b2e2b",
          "base-200": "#3e2624",
          "base-300": "#2e1a19",
          "base-content": "#fff",
        },
      },
    ],
  },
}
