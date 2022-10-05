import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
const process = require("process");
const { resolve } = require("path");

export default defineConfig({
  plugins: [liveReload(__dirname + "/**/*.php")],
  root: "",
  base: process.env.NODE_ENV === "development" ? "/" : "/dist/",
  build: {
    outDir: resolve(__dirname, "./dist"),
    emptyOutDir: true,

    manifest: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/js/app.js"),
      },
    },
  },
  server: {
    cors: true,
    origin: "http://127.0.0.1:" + 3000,
    strictPort: true,
    port: 3000,
  },
});
