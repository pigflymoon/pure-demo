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
            }, {
                test:/\.css$/,
                include:/css/,
                loaders:'css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};