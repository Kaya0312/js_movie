const path = require('path');

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

    // エントリーポイントの設定
    entry: path.resolve(__dirname, "./src/scripts/index.js"),
    // 出力の設定
    output: {
      // 出力先のパス（絶対パスを指定する必要がある）
      path: path.resolve(__dirname, 'dist'),
      // 出力するファイル名
      filename: 'bundle.js',
    },
    module: {
      rules: [
        // Sassファイルの読み込みとコンパイル
        {
          test: /\.scss/, // 対象となるファイルの拡張子
          use: [
            // linkタグに出力する機能
            "style-loader",
            // CSSをバンドルするための機能
            {
              loader: "css-loader",
              options: {
                // オプションでCSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,              
                importLoaders: 2
              }
            },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              plugins: [
                // Autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: enabledSourceMap }
          }
        ]
      },
    ]
  }
};