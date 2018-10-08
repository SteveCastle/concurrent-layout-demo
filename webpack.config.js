const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './vendor/react.development'),
      'react-dom': path.resolve(__dirname, './vendor/react-dom.development')
    }
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
