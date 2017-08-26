var path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
   output: {
    path: path.join(__dirname, "dist"),
    filename: 'app.js',
    publicPath: '/'
    },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './dist'
  },

   // To be able resolve .jsx extension
   resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
    {
      include: /src/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
      presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },

  // for minification
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
 
  
  // devtool: "eval-source-map"
  devtool:"cheap-module-source-map"
  
}