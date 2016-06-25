module.exports = {
  WEBPACK: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    devtool: 'source-map'
  }
};
