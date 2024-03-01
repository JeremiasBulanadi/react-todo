/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ash: '#826682',
        dark: '#121212', 
        plurble: {
          500: '#443D59',
          900: '#292732'
        },
        purple: '#7A79C2',
        mint: '#15F5BA',
        bleach: '#F0F3FF',
        accent: '#3C3842',
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    }
  },
  plugins: [],
}

