const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const EVENT = process.env.npm_lifecycle_event;
const PROD = EVENT.includes('prod');
const DEV = EVENT.includes('dev');

const clientConfig = (function webpackConfig() {
    const config = Object.assign({});
    config.entry = "./src/js/index.js";
    /*config.output = {
        path: path.resolve(__dirname, PROD ? './dist/prod' : './dist/dev'),
        filename: "main.js",
        publicPath: 'dist/'
    };
    config.mode = PROD ? 'production' : 'development';*/
    config.module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            minimize: PROD ? true: false,
                            url: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles SASS to CSS
                    }
                ]
            }
        ]
    }
    config.plugins = [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        })
    ]

    config.plugins.push(
        new HtmlWebPackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    )
    config.plugins.push(
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                },
            ])
    )
    config.plugins.push(
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    )
        
    return config;
});

module.exports = clientConfig;