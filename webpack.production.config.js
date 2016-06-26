/**
 * Webpack configuration
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV_CONFIG = {
  WEBPACK: {
    preLoaders: [],
    devtool: 'eval'
  }
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    javascript: './app.js',
    html: './index.html'
  },

  module: {
    preLoaders: ENV_CONFIG.WEBPACK.preLoaders,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$|\.wav$|\.mp3$/,
        loader: 'file?name=assets/images/[name].[ext]'
      },
      {
        test: /\.woff$|\.ttf$|\.eot$/,
        loader: 'file?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  // fix errors regarding missing modules
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  },

  devtool: ENV_CONFIG.WEBPACK.devtool
};
