var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
          'webpack-hot-middleware/client', // 這多一個 hot reload 的 code entry
          './src/index'
          ],
          output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
          },
          plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()
          ],
          module: {
            loaders: [{
          test: /\.js$/,   // 針對 js 檔
          loaders: ['babel'],
          exclude: /node_modules/,   // 不要處理 3rd party 的 code
          include: path.join(__dirname, 'src')
        }, {
          test: /\.css$/,  // 針對 css 檔
          loaders: ['style', 'css'],
          exclude: /node_modules/   // 不要處理 3rd party 的 code
        }]
      }
    };
