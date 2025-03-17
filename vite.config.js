import { defineConfig } from "vite";
import sass from "sass"; // Dart Sass
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssUrl from "postcss-url";
import CleanCSS from "clean-css";
import fs from "fs/promises";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyLibrary",
      formats: ["es", "cjs", "umd"],
      fileName: format => `my-library.${format}.js`
    },
    rollupOptions: {
      external: ["react", "vue"] // Mark dependencies as external
    }
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]" // Custom CSS Module naming
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcssUrl({ url: "inline", maxSize: 10 }) // Inline small assets as Base64
      ]
    }
  },
  plugins: [
    {
      name: "vite-sass-postcss-style-inject",
      async transform(code, id) {
        if (!id.endsWith(".module.scss")) return null; // Only process SCSS modules

        try {
          // Read and compile SCSS to CSS using Dart Sass
          const compiledCss = sass.compile(id).css;

          // Process CSS with PostCSS (Autoprefixer + URL Transformations)
          const result = await postcss([
            autoprefixer(),
            postcssUrl({ url: "inline", maxSize: 10 }) // Convert small assets to Data URLs
          ]).process(compiledCss, { from: undefined });

          // Minify CSS
          const minifiedCSS = new CleanCSS().minify(result.css).styles;

          // Extract CSS module class mappings (if available)
          const classMap = result.messages[0]?.exportTokens || {};

          // Generate a JS module that injects styles dynamically & exports class names
          return `
            import styleInject from 'style-inject';
            const css = ${JSON.stringify(minifiedCSS)};
            styleInject(css);
            export default ${JSON.stringify(classMap)};
          `;
        } catch (error) {
          console.error(`Error processing SCSS file: ${id}`, error);
          throw error;
        }
      }
    }
  ]
});
