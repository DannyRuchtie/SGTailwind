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
        'SG-brand-indigo': '#4F46E5',
        'SG-text-primary': '#111827',
        'SG-text-muted': '#6B7280',
        'SG-bg-active': '#F3F4F6',
        'SG-stroke': '#E5E7EB',
        'SG-buttons-cta-primary': '#4F46E5',
        'SG-state-error': '#DC2626',
        'SG-state-warning': '#F59E0B',
        'SG-state-success': '#10B981',
      },
    },
  },
  plugins: [],
} 