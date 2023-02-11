import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import shiki from "markdown-it-shiki";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import { slugify } from "transliteration";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperComponent: "post",
      markdownItSetup(md) {
        md.use(shiki, {
          theme: { light: "vitesse-light", dark: "vitesse-dark" },
        });
        md.use(anchor, {
          level: 2,
          slugify: slugify,
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: "#",
        });
        md.use(toc, {
          level: 2,
          slugify: slugify,
          containerClass: "j-toc",
          listClass: "j-toc-list",
          itemClass: "j-toc-item",
          linkClass: "j-toc-link",
          listType: "ul",
          // format: (x, htmlencode) => {
          // return "<div>ad</div>";
          // return `<j-doc-toc-link hash="${slugify(htmlencode(x))}">${htmlencode(x)}</j-doc-toc-link>`;
          // },
        });
      },
    }),
  ],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style.scss";',
      },
    },
  },
});
