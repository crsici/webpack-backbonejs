var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.less',
    './src/main'
    // ,'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js',
      path: __dirname + "/build"
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
       { test: /\.html$/, loader: 'html' },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
       new CopyWebpackPlugin([
           { from: 'static' }
       ])
   ]
};
