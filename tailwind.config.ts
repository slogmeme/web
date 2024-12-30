import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero': "url('/assets/images/hero/background.png')",
        'grass-gradient': 'linear-gradient(323.47deg, #6BC341 23.09%, #2C9330 82.92%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
