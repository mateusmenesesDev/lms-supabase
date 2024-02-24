import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "sunset", "nord"],
  },
  plugins: [require("daisyui")],
} satisfies Config;

export default config;
