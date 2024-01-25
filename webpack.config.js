const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/, // A regex that tells Webpack to use this rule for all .js files
        exclude: /node_modules/, // It's common to exclude the node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

// This module tells Webpack to use babel-loader for JavaScript files. This will allow Babel to transpile your JavaScript code 