/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c084fc",
        
"secondary": "#5eead4",
        
"accent": "#fde047",
        
"neutral": "#121c21",
        
"base-100": "#1e1b4b",
        
"info": "#a5f3fc",
        
"success": "#a7f3d0",
        
"warning": "#fef08a",
        
"error": "#fecaca",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

