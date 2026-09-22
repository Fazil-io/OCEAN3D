/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#031926',
        },
        abyss: {
          900: '#070d18',
          950: '#030711',
        },
        scientific: {
          blue: '#00f0ff',
          teal: '#00e5a3',
          amber: '#ffb300',
          rose: '#ff3366',
        }
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Times New Roman"', 'Times', 'Tinos', 'Georgia', 'Cambria', 'serif'],
        mono: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
