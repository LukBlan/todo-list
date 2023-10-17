const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",

  optimization: {
    minimize: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-[contenthash].js'
  },

  entry: {
    main: './src/index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }

    }),
    new MiniCssExtractPlugin({filename: "[name]-[contenthash].css"}),
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin(),
  ],

  module: {
    rules: [
      {test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"],},
    ],
  },
}