/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f0abfc",
          "secondary": "#5eead4",
          "accent": "#fde047",
          "neutral": "#211e2a",
          "base-100": "#312e81",
          "info": "#a5f3fc",
          "success": "#a7f3d0",
          "warning": "#fde68a",
          "error": "#fecaca",
        },
      },
    ],
  },
  
  plugins: [require('daisyui')],
}

