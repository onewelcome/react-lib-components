import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: false,
  build: {
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "react-lib-components",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react"],
      output: {
        entryFileNames: "[name].[format].js",
        chunkFileNames: "[name].[format].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]"
    },
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      entryRoot: "src"
    })
  ]
});
