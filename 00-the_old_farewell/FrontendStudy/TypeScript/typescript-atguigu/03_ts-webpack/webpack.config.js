const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包后文件的输出位置
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 输出文件名
    filename: 'bundle.js',
    // 设置环境
    environment: {
      // 设置webpack是否使用箭头函数
      arrowFunction: false
    }
  },
  // 指定webpack使用到的modules
  module: {
    // 指定加载规则
    rules: [
      {
        // 指定规则生效的文件,表示所有以ts结尾的文件
        test: /\.ts$/,
        // 使用ts-loader处理ts文件
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 指定浏览器版本
                    targets: {
                      chrome: '58',
                      ie: '11'
                    },
                    // 指定corejs版本
                    corejs: '3',
                    // 使用corejs的方式,usage表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ],
        // 指定编译需要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  // 指定webpack使用到的plugins
  plugins: [
    new htmlWebpackPlugin({
      // 指定HTML文件的title
      title: 'tinyRipple'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    // 引入js和ts文件时可以省略后缀名
    extensions: ['.ts', '.js']
  }
};
