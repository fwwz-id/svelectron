import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

import "dotenv/config";

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  input: "src/electron/main.ts",
  output: {
    format: "cjs",
    file: "dist/electron.js",
  },
  external: ["electron", "electron-reload", "path"],
  plugins: [
    typescript(),
    isProd && terser({
      maxWorkers: 4,
    }),
  ],
});
