/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
      fontSize: {
        'fl': 'var(--font-large)',
        'fn': 'var(--font-normal)',
        'fs': 'var(--font-small)',
      },
    },
  },
  plugins: [],
}

