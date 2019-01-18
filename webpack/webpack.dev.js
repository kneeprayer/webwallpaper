const path = require("path");
const webpack = require("webpack");
const postcssPresetEnv = require("postcss-preset-env");
const DEV_SERVER_PORT = 9000;

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
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv({ stage: 0 })]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "eslint-loader"
        }
      },
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    contentBase: path.join(__dirname, "../src"),
    publicPath: "/",
    progress: true,
    inline: true,
    host: "localhost",
    port: DEV_SERVER_PORT,
    hot: true,
    open: true
  },
  resolve: {
    extensions: [".js", ".json", ".png", ".gif"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
