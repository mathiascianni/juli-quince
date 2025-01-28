/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "tab": "100px",
        "desk": "280px",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}