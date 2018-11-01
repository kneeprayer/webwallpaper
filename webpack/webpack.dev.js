const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    contentBase: path.join(__dirname, "../src"),
    publicPath: "/",
    progress: true,
    inline: true,
    host: "localhost",
    port: 8080,
    hot: true,
    open: true,
    proxy: {
      "/": "/html/"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
