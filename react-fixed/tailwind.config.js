export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#0a0e1a',
        bg2: '#111827',
        bg3: '#1a2235',
        accent: '#00e5ff',
        accent2: '#7c3aed',
      },
    },
  },
  plugins: [],
}
