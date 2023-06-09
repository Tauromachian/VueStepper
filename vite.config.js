import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",

    include: ["**/*.test.js"],
    globals: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-simple-stepper",
      fileName: (format) => `vue-simple-stepper.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
