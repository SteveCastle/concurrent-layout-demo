const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader', 'source-map-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/static',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './static'
  }
};
