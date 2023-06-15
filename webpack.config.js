const path = require('path');

module.exports = {
  mode: 'production',
  entry: './embedable.tsx',
  devServer: {
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    filename: 'react-dom-navigator.js',
    library: 'ReactDomNavigator',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
