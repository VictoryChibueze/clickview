import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";
// import Upcoming from "./src/js/upcoming";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        upcoming: resolve(__dirname, "src/upcoming/index.html"),
      },
    },
  },
});
