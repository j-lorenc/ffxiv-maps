const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'     
    },
    output: {
        filename: './static/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
            },
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"})
            },
            {
                test: /\.png?$/,
                use: "file-loader?name=/node_modules/leaflet/dist/images/[name].[ext]"
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?name=./static/fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader?name=./static/fonts/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin({
          
          filename: "static/css/index.css",
          allChunks: true
      }),
        
      new webpack.LoaderOptionsPlugin({
         options: {
             alias: {
                  './images/layers.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/layers.png'),
                  './images/layers-2x.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/layers-2x.png'),
                  './images/marker-icon.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-icon.png'),
                  './images/marker-icon-2x.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-icon-2x.png'),
                  './images/marker-shadow.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-shadow.png')
              }
         }                             
      
      }),
        
      new webpack.LoaderOptionsPlugin({
        // Options...
      }),
        
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      })
    ]
}
