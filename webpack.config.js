// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'example/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app'],
    extensions: ['', '.js', '.jsx']
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: './example/index.html',
  //   })
  // ]
}