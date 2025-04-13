import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  build: {
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
