const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",//path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    mode: 'development',
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
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    devServer: {
        port: 3030
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // externals: [
    //     {
    //         react: {
    //             root: 'React',
    //             commonjs2: 'react',
    //             commonjs: 'react',
    //             amd: 'react',
    //         },
    //     },
    //     {
    //         'react-router-dom': {
    //             root: 'ReactRouterDOM',
    //             commonjs2: 'react-router-dom',
    //             commonjs: 'react-router-dom',
    //             amd: 'react-router-dom',
    //         },
    //     },
    // ],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'dist/index.html'
        })
    ],

    // devServer: {
    //     static: path.resolve(__dirname, './dist'),
    //     hot: true,
    //     historyApiFallback: true
    // },
}