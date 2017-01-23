var HtmlPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: './dist/',
    filename: '[name].[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    stats: 'errors-only'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
            },
      {
        test: /\.html$/,
        loader: 'html'
            },
      {
        test: /\.scss$/i,
        loaders: ['style', 'css', 'sass']
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
        new CopyWebpackPlugin([{
      'from': 'src/favicon',
      'to': 'favicon'
    }])
    ]
}
