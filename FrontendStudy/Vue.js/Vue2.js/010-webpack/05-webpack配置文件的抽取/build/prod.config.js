const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = WebpackMerge(baseConfig, {
  plugins: [
    new UglifyJsPlugin()
  ]
})