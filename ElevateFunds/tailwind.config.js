/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0073B1", 
        light: {
          background: "#F3F6F8", 
          text: "#212121", 
          accent: "#2867B2",
          border: "#E1E9EE", 
        },
        dark: {
          background: "#0f172a", 
          text: "#EDEDED", 
          accent: "#0073B1", 
          border: "#333333", 
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
