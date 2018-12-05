const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, "../src/js/app.js"),
  html: path.join(__dirname, "../src/html"),
  output: path.join(__dirname, "../dist"),
  template: path.join(__dirname, "../src/html/index.html")
};

const commonConfig = {
  entry: ["babel-polyfill", PATHS.app],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: "url-loader?limit=10000&mimetype=application/font-woff"
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: "file-loader"
      // },
      {
        test: /\.(gif|png|jpe?g|svg)(\?[a-z0-9=.]+)?$/i,
        exclude: /(node_modules)/,
        include: PATHS.html,
        use: [
          {
            loader: "file-loader"
          },
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
          // {
          //   loader: "img-loader"
          // }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.template,
      filename: "index.html"
    }),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    })
  ]
};

if (MODE === "build") {
  module.exports = merge(commonConfig, prodConfig);
} else if (MODE === "start") {
  module.exports = merge(commonConfig, devConfig);
}
