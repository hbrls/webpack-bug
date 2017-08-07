const path = require('path');
const webpack = require('webpack');
const { DllPlugin } = require('webpack');


module.exports = {
  entry: {
    core: [
      'react',
      'react-dom',
    ],
  },

  output: {
    filename: '[name].js',
    chunkFilename: 'chunk-[name].js',
    path: path.resolve(__dirname, 'example/dist'),
    library: '__[name]',
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new DllPlugin({
      path: path.resolve(__dirname, 'example/dist/[name]-manifest.json'),
      name: '__[name]',
    }),
  ],
};
