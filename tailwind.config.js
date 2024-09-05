export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nacelle: ['nacelle', 'sans-serif'],
        nacellesemi: ['nacelle-semi', 'sans-serif'],
        signature: ['signature', 'sans-serif']
      },
      keyframes: {
        modalFadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}