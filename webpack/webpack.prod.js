const path = require("path");
const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractWebpackPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const CompressionPlugin = require("compression-webpack-plugin");

const PATHS = {
  build: path.join(__dirname, "../dist"),
  html: path.join(__dirname, "../src/html")
};

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
        test: /\.html$/,
        include: PATHS.html,
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
        test: /\.(gif|png|jpe?g|svg)(\?[a-z0-9=.]+)?$/i,
        include: PATHS.html,
        use: [
          {
            loader: "file-loader"
          },
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
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/,
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 240000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({
        test: "[name].[hash].js",
        cache: true,
        parallel: 4,
        sourceMap: true,
        extractComments: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false
        }
      })
    ]
  },
  output: {
    path: PATHS.build,
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  }
};
