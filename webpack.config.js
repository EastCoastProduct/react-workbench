var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    main:  './src/index.jsx'
  },
  output: {
    path: 'public/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets:['react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.BUILD_DEV || 'http://localhost:3000/')
    })
  ]
};
