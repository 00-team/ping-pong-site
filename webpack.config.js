const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: './src/App.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        sourceMapFilename: 'SourceMaps/[file].map',
        assetModuleFilename: 'static/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path => {
                                if (path.search('favicon.ico') !== -1)
                                    return 'favicon.ico'
                                else return 'static/[name].[ext]'
                            },
                        },
                    },
                ],
                // type: 'javascript/auto',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/static/template.html',
            favicon: './src/static/img/favicon.ico',
            inject: true,
            publicPath: '/',
            templateParameters: {
                SiteName: 'Ping Pong',
            },
        }),
    ],
    devServer: {
        compress: true,
        port: 8000,
        writeToDisk: true,
    },
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
    }

    return config
}
