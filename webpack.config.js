var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'/build')
  },
  module: {
    loaders:[
      { test : /\.(scss|css)$/, loader:'style-loader!css-loader!postcss-loader!sass-loader'},
      { test : /\.js(x)?$/,exclude: '/node_modules/', loader:'babel-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [autoprefixer, precss]
  },
  resolve:{
    extensions:['','.js','.jsx','.scss']
  }
}
