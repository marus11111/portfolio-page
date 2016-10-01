var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('./style.css');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: './bundles/',
        filename: 'js.js'
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
                test: /\.scss$/i,
                loader: extractCSS.extract(['css', 'sass'])
            },
            {
                test: /\.jpg$/i,
                loaders: ['file-loader', 'img']
            }
        ]
    },
    plugins: [extractCSS]
    
}