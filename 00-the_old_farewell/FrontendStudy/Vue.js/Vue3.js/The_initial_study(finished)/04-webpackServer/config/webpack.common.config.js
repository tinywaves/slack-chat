const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpackTest'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue', '.ts', '.wasm', '.mjs', '.json', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, '../src'),
      "vue": path.resolve(__dirname, '../src/vue')
    }
  }
}