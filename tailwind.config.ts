// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx,mdx}',
    './src/pages/**/*.{ts,tsx,js,jsx,mdx}', // opsional
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 47.4% 11.2%)',
        card: 'hsl(0 0% 100%)',
        primary: '#002766ff',
        'primary-foreground': '#ffffff',
        accent: 'hsl(210 40% 96.1%)',
        muted: 'hsl(210 40% 96.1%)',
        'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
      },
    },
  },
  plugins: [],
} satisfies Config