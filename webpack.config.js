var path = require("path");

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
 
  
  devtool: "eval-source-map"
  
}