/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import svgr from "vite-plugin-svgr";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
      svgrOptions: { icon: true },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/app",
  },
  server: {
    port: 5170,
  },
  define: {
    "process.env.VITE_APP_BACKEND_BASE_URL": `"${process.env.VITE_APP_BACKEND_BASE_URL}"`,
  },
});
