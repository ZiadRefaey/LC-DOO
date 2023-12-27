/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#333",
        tertiary: "#082C86",
        lightGray: "#888",
        lightOrange: "#fff3e2",
        darkOrange: "#FFA322",
        translucent: "rgba(203, 208, 221, 0.54)",
      },
      backgroundImage: {
        "custom-products": "url('/custom-products-bg.jpg')",
      },
      fontSize: {
        "lg-h1": "5.375rem",
        "lg-h2": "2.5rem",
        "lg-h3": "2rem",
        "lg-h4": "1.75rem",
        "md-h1": "3.625rem",
        "md-h2": "2.25rem",
        "md-h3": "1.75rem",
        "md-h4": "1.5rem",
        "sm-h1": "3rem",
        "sm-h2": "1.875rem",
        "sm-h3": "1.75rem",
        "sm-h4": "1.5rem",
        "body-lg": "1.125rem",
        "body-md": "1rem",
        "body-sm": "0.875rem",
      },
      blur: {
        oval: "110px",
      },
      gridColumn: {
        "span-1/2": "span 1 / span 2",
      },
    },
  },
  plugins: [],
};
