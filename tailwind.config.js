/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This adds the specific shades of gray and blue used in the Canvas preview
        '#0d1117': '#0d1117', // Main background
        '#161b22': '#161b22', // Sidebar background
        '#c9d1d9': '#c9d1d9', // Primary text color
        '#8b949e': '#8b949e', // Secondary text color (replace default gray-400)
        '#21262d': '#21262d', // Border color (replace default gray-700)
        '#1f6feb': '#1f6feb', // Active button blue (replace default blue-600)
      }
    },
  },
  plugins: [],
}