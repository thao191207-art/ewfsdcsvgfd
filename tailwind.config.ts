import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          50: "rgba(255, 255, 255, 0.45)",
          100: "rgba(255, 255, 255, 0.65)",
          200: "rgba(255, 255, 255, 0.8)",
          card: "rgba(255, 255, 255, 0.55)",
          border: "rgba(255, 255, 255, 0.4)",
          glow: "rgba(168, 85, 247, 0.15)",
        },
        brand: {
          purple: "#8B5CF6",
          pink: "#EC4899",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          emerald: "#10B981",
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-pink': '0 0 25px -5px rgba(236, 72, 153, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
        '3xl': '36px',
      }
    },
  },
  plugins: [],
};
export default config;
