/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        vietnam: {
          red: '#da1a32',
          gold: '#ffd700',
          navy: '#1e293b',
          cream: '#fefce8',
        },
        executive: {
          // Deep, authoritative base colors
          charcoal: '#1a1a1a',      // Primary dark
          graphite: '#2d3748',      // Secondary dark  
          pewter: '#4a5568',        // Medium gray
          platinum: '#718096',      // Light gray
          
          // Sophisticated accent colors
          navy: '#1e3a8a',          // Professional blue
          emerald: '#047857',       // Success/growth green
          amber: '#b45309',         // Warning/attention
          crimson: '#991b1b',       // Critical/urgent
          
          // Neutral backgrounds
          cloud: '#f7fafc',         // Light background
          mist: '#edf2f7',          // Card backgrounds
          steel: '#e2e8f0',         // Borders/dividers
          
          // Legacy colors for transition
          dark: '#0f172a',
          medium: '#334155', 
          light: '#cbd5e1',
          accent: '#f1c40f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}