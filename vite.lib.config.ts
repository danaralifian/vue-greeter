import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  build: {
    sourcemap: true, // Enable source map generation
    lib: {
      entry: "src/lib/main.ts",
      name: "Greeter",
      fileName: (format) => `greeter.${format}.js`, // Change this line
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
