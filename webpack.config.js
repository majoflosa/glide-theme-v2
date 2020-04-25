const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
    entry: ['@babel/polyfill', './assets/src/js/index.js'],
    output: {
        path: path.resolve( __dirname, 'assets/dist'),
        filename: 'js/main.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    devtool: 'source-map',
    devServer: {
        publicPath: '/assets/dist/',
        contentBase: './', // './app/dist/js',
        watchContentBase: true,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { 
                test: /\.s(a|c)ss$/, 
                exclude: /node_modules/, 
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { hmr: env === 'development'} }, 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ] 
            },
        ],
    },
    plugins: [
        new SVGSpritemapPlugin('./assets/src/svg/*.svg', {
            output: {
                filename: 'svg/icons.svg',
            },
            sprite: {
                prefix: false,
                generate: {
                    title: false,
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new OptimizeCSSAssetsPlugin()
    ]
};
