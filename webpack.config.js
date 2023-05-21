const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    target: process.env.NODE_TARGET,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader',]
            },
            {
                test: /\.svg$/i,
                issuer: /\.js?$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    devServer: {
        port: process.env.PORT,
        hot: true,
        historyApiFallback: true
    },
    // optimization: {
    //     runtimeChunk: true,
    //   },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'dist/index.html',
            publicPath: '/',
        })
    ],

}