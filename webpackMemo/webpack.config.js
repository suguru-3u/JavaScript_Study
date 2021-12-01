const path = require('path');
const { mainModule } = require('process');
const loader = require('sass-loader');
const outputPath = path.resolve(__dirname,'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:outputPath
    },
    module:{
        rules:[
            {
                test:/\.(sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|ico|)$/i,
                loader:'url-loader',
                options:{
                    limit:2048,
                    name:'./images/[name].[ext]'
                }
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
        ]
    },
    devServer:{
        static: {
            directory: outputPath
        }
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html',
                filename:'./index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename:'[name].[hash].css'
            }
        )
    ],
    performance: { 
        hints: false 
    },
    optimization:{
        minimizer:[
            new UglifyjsWebpackPlugin(
                {
                    uglifyOptions:{
                        compress:{
                            drop_console:true
                        }
                    }
                }    
            ),
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    }
}