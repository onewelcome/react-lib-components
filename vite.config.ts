import { defineConfig } from "vite";
import sass from "sass"; // Dart Sass
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssUrl from "postcss-url";
import CleanCSS from "clean-css";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyLibrary",
      formats: ["es", "cjs", "umd"],
      fileName: format => `my-library.${format}.js`
    },
    rollupOptions: {
      external: ["react", "vue"], // Avoid bundling dependencies
      // preserveModules: true, // Keeps module structure in dist
      // preserveModulesRoot: "src", // Keeps clean paths in dist
      output: {
        entryFileNames: "[name].[format].js",
        chunkFileNames: "[name].[format].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]" // Scoped class naming
    },
    postcss: {
      plugins: [
        autoprefixer()
        // postcssUrl({ url: "inline", maxSize: 10 }) // Inline small assets as Base64
      ]
    }
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      // outputDir: "dist/types", // ✅ Generates .d.ts files
      entryRoot: "src" // Ensures correct paths
      // skipDiagnostics: false, // Ensures type checking
      // logDiagnostics: true
    })
    //   {
    //     name: "vite-sass-postcss-style-inject",
    //     async transform(code, id) {
    //       if (!id.endsWith(".module.scss")) return null; // Only process SCSS modules

    //       try {
    //         // Compile SCSS to CSS using Dart Sass
    //         const compiledCss = sass.compile(id, { style: "expanded" }).css;

    //         // Process CSS with PostCSS (Autoprefixer + URL Transformations)
    //         const result = await postcss([
    //           autoprefixer(),
    //           postcssUrl({ url: "inline", maxSize: 10 }) // Convert small assets to Data URLs
    //         ]).process(compiledCss, { from: id });

    //         // Minify CSS for better performance
    //         const minifiedCSS = result.css; //xx new CleanCSS().minify(result.css).styles;

    //         // Inject the CSS into JavaScript and export transformed class names
    //         return `
    //           import styleInject from 'style-inject';
    //           const css = ${JSON.stringify(minifiedCSS)};
    //           styleInject(css);
    //           export default ${JSON.stringify(result.messages[0]?.exportTokens || {})};
    //         `;
    //       } catch (error) {
    //         console.error(`Error processing SCSS file: ${id}`, error);
    //         throw error;
    //       }
    //     }
    //   }
  ]
});
