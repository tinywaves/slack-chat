const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
        test: /\.css$/, // 正则表达式
        // 简写
        // loader: 'css-loader'
        use: [
          // 若不需要 loader 的其他参数配置则可以简写为 'css-loader'
          // 'css-loader'
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]_[hash:6].[ext]'
      //     }
      //   }
      // },
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/i,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]_[hash:6].[ext]',
      //       limit: 100 * 1024
      //     }
      //   }
      // }
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/i,
      //   type: 'asset/resource',
      // }
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name]-[hash:6][ext]'
      //   }
      // }
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[hash:6][ext]'
        }
      },
      // {
      //   test: /\.m?js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       // plugins: [
      //       //   '@babel/plugin-transform-arrow-functions',
      //       //   '@babel/plugin-transform-block-scoping'
      //       // ]
      //       preset: [
      //         '@babel/preset-env'
      //       ]
      //     }
      //   }
      // }
      {
        test: /\.m?js$/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpackTest'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
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
    })
  ]
}