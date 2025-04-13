import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/app" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // optional: if you were using @ path alias
    },
  },
});
