module.exports = {
    entry: './src/client.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                teset: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css?$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'

            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};