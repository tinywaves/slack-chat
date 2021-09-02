const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // 加载非 webpack 提供的资源
    static: './public',
    // 模块热替换
    hot: true,
    // host: '0.0.0.0',
    port: 8000,
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: 'http://localhost:8888',
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  }
})