import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      // This assumes that you have a `src` folder at the root of your project
      "@": "/src"
    }
  },
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "react-lib-components",
      fileName: format => `react-lib-components.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    }
  }
});
