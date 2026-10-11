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
        obsidian: {
          950: '#06070A',
          900: '#090A0F', // Primary Background: Deep Slate / Obsidian
          850: '#0E0F15',
          800: '#12131A', // Card Surfaces: Dark Charcoal
          700: '#1A1C24',
          600: '#1F202B', // Subtle Border Lines
        },
        accent: {
          DEFAULT: '#8B5CF6', // Refined Warm Violet Accent
          light: '#A78BFA',
          dark: '#7C3AED',
          muted: '#6D28D9',
        },
        slateText: {
          primary: '#F8FAFC', // Crisp Warm White
          body: '#94A3B8',    // Muted Ash
          muted: '#64748B',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'accent-soft': '0 4px 20px -4px rgba(139, 92, 246, 0.25)',
      }
    },
  },
  plugins: [],
}