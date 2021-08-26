const HTMLwebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
  mode: "none",
  entry: './src/script.js',
  output: {
    path:  __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
      rules: [
          {
              test:/\.css$/i,
              use: ['style-loader','css-loader']
          }
        ]
  },
  plugins: [
      new HTMLwebpackPlugin({
       template: './src/index.html'   
      })
    ]
}