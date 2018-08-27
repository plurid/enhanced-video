const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


const miniCssExtract = new MiniCssExtractPlugin({
    filename: "../css/video-text-select.css",
    disable: process.env.NODE_ENV === "development"
});
const path = require('path');


module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './app.js',
    output: {
        filename: 'video-text-select.js',
        path: path.resolve(__dirname, 'video-text-select/js')
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        miniCssExtract
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            }
        ]
    }
};
