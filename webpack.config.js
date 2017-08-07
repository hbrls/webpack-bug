const path = require('path');
const { DllReferencePlugin } = require('webpack');


module.exports = {
  entry: {
    'bundle-loader': './src/bundle-loader/index',
  },

  output: {
    filename: '[name].js',
    chunkFilename: 'chunk-[name].js',
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: '/dist/',
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
    ]
  },

  plugins: [
    new DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, 'example/dist/core-manifest.json')),
    })
  ],
};

