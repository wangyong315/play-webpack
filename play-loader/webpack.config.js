var path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin }= require("clean-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsX$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    // 在plugins使用插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devtool: 'source-map'
};