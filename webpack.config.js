const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
        sourceMapFilename: 'SourceMaps/[file].map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|ico|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/static/template.html',
            inject: true,
            favicon: './src/static/img/favicon.ico',
            publicPath: '/',
            templateParameters: {
                SiteName: 'Ping Pong'
            }
        }),
    ],
    // devtool: 'source-map',
    devServer: {
        port: 8000
    },
};