module.exports = {
    entry: './src/entry.js',
    output: {
        path: './bundles/',
        filename: 'js.js'
    },
    devServer: { 
        inline:true,
        contentBase: './bundles',
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
                test: /\.scss$/i,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jpg$/i,
                loaders: ['file-loader', 'img']
            }
        ]
    }
    
}