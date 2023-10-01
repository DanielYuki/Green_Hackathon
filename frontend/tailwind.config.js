/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "terciary-color": "var(--terciary-color)"
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

