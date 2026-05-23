/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B4BFF",
        dark: "#111827",
        background: "#F6F7FB",
        card: "#FFFFFF",
        accent: "#7C3AED",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(17, 24, 39, 0.08)",
        card: "0 8px 32px rgba(91, 75, 255, 0.12)",
      },
    },
  },
  plugins: [],
}
