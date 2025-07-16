import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/diegohdzg-portfolio",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@pages": resolve(__dirname, "./src/components/pages"),
      "@layout": resolve(__dirname, "./src/components/Layout"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
});

// tailwind.config.js
module.exports = {
  darkMode: 'media', // usa el sistema del SO (media query prefers-color-scheme)
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

