/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f5f3ef',
          dark: '#ebe8e1',
        },
        surface: '#ffffff',
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#6b6b6b',
          light: '#9a9a9a',
        },
        border: {
          DEFAULT: '#d1d1d1',
          light: '#e2e0db',
        },
        accent: {
          blue: '#0a84ff',
          green: '#34c759',
          orange: '#ff9500',
          purple: '#af52de',
          red: '#ff3b30',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
};
