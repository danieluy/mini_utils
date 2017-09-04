const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    DSMiniUtils: path.join(__dirname, '/src/ds-mini-utils.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build/'),
    library: 'DSMiniUtils',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js?$/,
        include: [
          path.join(__dirname, "/src/"),
        ],
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}