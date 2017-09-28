const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs-extra');
const extractCSS = new ExtractTextPlugin('style-css.[contenthash].css');
const extractSASS = new ExtractTextPlugin('style-sass.[contenthash].css');
const extractLESS = new ExtractTextPlugin('style-less.[contenthash].css');
module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'redux', 'react-redux', 'whatwg-fetch', 'react-hot-loader', 'antd'],
    app: path.join(__dirname, '/src/entry/index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: "js/[id].bundle.[chunkhash].js"
  },

  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src'),
        },
      {
        test: /\.scss$/,
        loader: extractSASS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        loader: extractLESS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },

      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=512&&name=image/css/[name].[ext]?[hash]'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { exclude: ['image', 'lib', 'plug'] }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),

    new webpack.HashedModuleIdsPlugin(),

    extractCSS,

    extractSASS,

    new HtmlWebpackPlugin({

      template: './src/template.html',
      inject: 'body'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

}
setTimeout(function () {
    copyPublicFolder();
},100)

function copyPublicFolder() {
    // fs.copySync('./src/plug', './dist/plug', {
    //     dereference: true,
    //
    // });

    try {
        fs.copySync('./src/plug', './dist/plug')
        console.log('111111111111.success!')
    } catch (err) {
        console.error(22222222222222,err)
    }
}