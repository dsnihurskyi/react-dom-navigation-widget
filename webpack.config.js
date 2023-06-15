const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "." },
      ],
    }),
  ].filter((i) => i),
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
