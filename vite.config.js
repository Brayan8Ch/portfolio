// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // ¡CORRECCIÓN! Para dominio personalizado, la base es la raíz (/)
  base: '/', 
  plugins: [tailwindcss()],
});