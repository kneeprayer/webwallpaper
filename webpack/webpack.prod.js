const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  build: path.join(__dirname, "../dist")
};

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractWebpackPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.build, {
      root: process.cwd()
    }),
    new ExtractWebpackPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      filename: "index.html",
      inject: "body",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          mangle: true,
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_fnames: false,
          output: {
            comments: false // remove comments
          },
          compress: {
            unused: true,
            dead_code: true, // big one--strip code that will never execute
            warnings: false, // good for prod apps so users can't peek behind curtain
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            drop_console: true, // strips console statements
            sequences: true,
            booleans: true
          },
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};
