module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        code: ["var(--font-code)", "monospace"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
      // ... rest of your existing theme config
    }
  }
}