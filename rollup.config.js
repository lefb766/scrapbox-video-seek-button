import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "iife"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify({
      output: {
        // デフォルト設定では1行で出力され、Scrapboxに貼りつけるとページの動作が重くなる。
        // 1行に何文字収まるかは環境依存である。
        max_line_len: 80
      }
    })
  ]
};
