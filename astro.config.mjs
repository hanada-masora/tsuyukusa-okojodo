// @ts-check
import { defineConfig } from "astro/config";

const site =
  process.env.NODE_ENV === "production"
    ? "https://tsuyukusa-okojodo.pages.dev" // ← 本番URL
    : "http://localhost:4321";      // ← ローカル

export default defineConfig({
  site,

  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
