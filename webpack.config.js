const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 8080;
const path = require("path")

module.exports = {
  mode: 'development',  
  resolve:{
modules:[
  path.resolve('./lib'),
  path.resolve('./node_modules')
]
  },
  entry: './lib/components/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.ejs',
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};