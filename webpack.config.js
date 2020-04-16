const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === "production";

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: ["./src/index.js", "./src/sass/style.scss"],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: "script.js" 
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                  },
                  {
                      test: /\.scss/,
                      use: [
                        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                      ]
                  },
                  {
                    test: /\.(png|ico|svg|jpe?g|gif)$/i,
                    use: [
                        {
                        loader: 'file-loader'
                        }
                    ]
                  },
                  {
                    test: /\.html$/,
                    loader: 'html-loader',
                  },
                  {
                    test: /\.mp3$/,
                    loader: 'file-loader'
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(), 
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new FaviconsWebpackPlugin({
                logo: './src/assets/favicon.ico',
                publicPath: './'
            }),
        ]
    }
    return config;
}