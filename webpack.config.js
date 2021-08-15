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
                test: /\.(ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static',
                        },
                    },
                ],
                type: 'javascript/auto',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/static/template.html',
            inject: true,
            favicon: './src/static/img/favicon.ico',
            publicPath: '/',
            templateParameters: {
                SiteName: 'Ping Pong',
            },
        }),
    ],
    devServer: {
        compress: true,
        port: 8000,
    },
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
    }

    return config
}
