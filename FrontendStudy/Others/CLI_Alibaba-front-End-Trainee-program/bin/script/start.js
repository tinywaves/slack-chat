/**
 * @author
 * @description npm start [options]
 */

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')
const openurl = require('openurl')
const { spawn } = require('child_process')

const { npm } = require('./util/wins')
const webpackConf = require('../package/cli-service/webpack.config')
const {
  isCorrectContent,
  isInstallPackage,
  pathHelper,
  isIncludeInArray,
  getIP,
  loadProjectConfig,
  writeFileFromString
} = require('./util/util')
const { error, done, info, warn } = require('./util/logger')

module.exports = function startModule(options) {
  const folder = pathHelper()

  // get port
  const Service = require('../package/cli-service/service')
  const projectOptions = new Service().init()
  const port = options.port || projectOptions.devServer.port || 3100

  // 接口环境
  process.env.API_ENV = options.env

  // node环境
  process.env.NODE_ENV = 'development'

  // 城市变量
  process.env.CITY_ENV = null
  const { cityEnv = '' } = options
  if (cityEnv) {
    process.env.CITY_ENV = cityEnv
  }

  // 调试环境可选值
  const envType = ['dev', 'stg', 'stg2', 'stg3', 'prod', 'pre', 'mock', 'local']

  // 获取frameType
  let frameName = ''
  const config = loadProjectConfig()
  if (config && config.frameType) {
    frameName = config.frameType
  }

  // 项目目录类型
  const contentType = folder.projectRootFolder.split('/').pop().split('-').pop()

  // 获取模块名称
  let moduleName = {}

  // 校验是否为项目目录
  if (isCorrectContent()) {
    // 校验是否安装package依赖
    isInstallPackage().then(res => {
      if (res) {
        if (isIncludeInArray(envType, process.env.API_ENV)) {
          checkArgvs()
        } else {
          error('仅支持指定的接口环境变量')
        }
      }
    })
  }

  function checkArgvs() {
    moduleName = options.module
    if (frameName) {
      if (frameName === 'vue') {
        if (!moduleName) {
          error('web 项目下需输入 type-module-name')
          info('示例：smt start -m feature/welcome')
          return
        }
        startWeb()
      } else if (frameName === 'react') {
        if (moduleName) {
          error('admin 项目下无需输入 type-module-name')
          info('示例：smt start')
          return
        }
        startAdmin()
      } else if (frameName === 'vue-cli') {
        startOpenPlatform()
      } else {
        error('当前文件夹非项目规范目录，请先切换到项目目录')
        return
      }
    } else if (contentType === 'web') {
      if (!moduleName) {
        error('web 项目下需输入 type-module-name')
        info('示例：smt start -m feature/welcome')
        return
      }
      startWeb()
    } else if (contentType === 'admin') {
      if (moduleName) {
        error('admin 项目下无需输入 type-module-name')
        info('示例：smt start')
        return
      }
      startAdmin()
    } else if (frameName === 'vue-cli') {
      startOpenPlatform()
    } else {
      error('当前文件夹非项目规范目录，请先切换到项目目录')
      return
    }
    info(`接口环境：${chalk.cyan(process.env.API_ENV)}`)
    let pageModule = {}
    if (frameName === 'vue' || moduleName) {
      pageModule = moduleName
    } else if (frameName === 'react') {
      pageModule = 'admin'
    } else if (frameName === 'vue-cli') {
      pageModule = 'open-platform'
    } else {
      pageModule = '其他'
    }
    info(`页面模块：${chalk.cyan(pageModule)}`)
    if (cityEnv) {
      info(`城市环境变量：${chalk.cyan(cityEnv)}`)
    }
  }

  function startWeb() {
    // get IP
    const IPV4 = getIP()
    const { NODE_ENV, API_ENV, CITY_ENV } = process.env

    const moduleConfig = {
      moduleName,
      API_ENV,
      NODE_ENV,
      CITY_ENV,
      port
    }

    const config = webpackConf(moduleConfig)
    const compiler = webpack(config)
    const server = new WebpackDevServer(compiler, {
      hot: true,
      inline: true,
      contentBase: config.output.path,
      overlay: true,
      stats: 'errors-only',
      port,
      noInfo: true,
      ...config.devServer
    })

    info('启动调试服务器...')

    server.listen(port, '0.0.0.0', err => {
      if (err) {
        error(err.toString())
      }
      done('调试服务器已启动：')
      info(
        `- Local: http://localhost:${port}/ (copied to clipboard)
         - Network: http://${IPV4}:${port}/`
      )
      setTimeout(() => {
        openurl.open(`http://${IPV4}:${port}/`)
      }, 200)
    })
  }

  function startAdmin() {
    const opt = {
      PORT: port
    }
    writeFileFromString(folder.envFile, opt)

    const command = spawn(npm, ['start', options.env])
    command.stdout.on('data', data => {
      info(data)
    })

    command.stderr.on('data', data => {
      warn(data)
    })

    command.on('close', code => {
      if (code === 0) {
        done('服务启动成功！')
      } else {
        error(`服务启动失败：${code}`)
        info('请尝试重新启动！')
      }
    })
  }

  function startOpenPlatform() {
    const opt = {
      PORT: port,
      VUE_APP_API_ENV: options.env,
      VUE_APP_CITY_ENV: process.env.CITY_ENV
    }
    writeFileFromString(folder.envFile, opt)

    const command = spawn(npm, ['start'])
    command.stdout.on('data', data => {
      info(data)
    })

    command.stderr.on('data', data => {
      warn(`${data}`)
    })

    command.on('close', code => {
      if (code === 0) {
        done('服务启动成功！')
      } else {
        error(`服务启动失败：${code}`)
        info('请尝试重新启动！')
      }
    })
  }
}
