import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/lib/main.ts",
      name: "Greeter",
      fileName: (format) => `greeter.${format}.js`, // Change this line
      formats: ["umd", "es"],
    },
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
