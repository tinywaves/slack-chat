const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  // 设置模式
  // 开发模式：development
  // 生产模式：production
  mode: 'development',
  // 设置 source-map，建立 js 文件映射
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.vue$/,
        use: { loader: 'vue-loader' }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpackTest'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}