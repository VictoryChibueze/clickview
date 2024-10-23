import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        upcoming: resolve(__dirname, "src/upcoming/index.html"),
        popular: resolve(__dirname, "src/popular/index.html"),
        topRated: resolve(__dirname, "src/topRated/index.html"),
      },
    },
  },
});
