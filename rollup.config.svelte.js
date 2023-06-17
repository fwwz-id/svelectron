import { defineConfig } from "rollup";
import sveltePreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import postcss from "rollup-plugin-postcss";
import nodePolyfill from "rollup-plugin-polyfill-node";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

import "dotenv/config";

const isProd = process.env.NODE_ENV === "production";

module.exports = defineConfig({
  input: "src/app/main.ts",
  output: {
    format: "iife",
    file: "dist/renderer.js",
    name: "app",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: true,
      }),
      emitCss: false,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ["svelte"],
    }),
    commonjs(),
    typescript(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      include: ["./src/app/**/*.css"],
    }),
    json(),
    nodePolyfill(),
    isProd &&
      terser({
        maxWorkers: 4,
      }),
    !isProd && livereload("dist"),
  ],
});
