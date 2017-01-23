var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var clean = require('postcss-clean');
var HtmlPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: './dist/',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
            },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
            },
      {
        test: /\.html$/,
        loader: 'html'
            },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?name=./pics/[name].[ext]', 'img']
            }
        ]
  },
  plugins: [
        new HtmlPlugin({
      template: './src/index.html'
    }),
        new ExtractTextPlugin('style.[contenthash].css'),
        new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
        new CopyWebpackPlugin([{
      'from': 'src/favicon',
      'to': 'favicon'
    }]),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
  postcss: [
        clean(), 
        autoprefixer({
      add: true,
      browsers: ['last 5 versions']
    })
  ]
}