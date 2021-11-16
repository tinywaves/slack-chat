/**
 * @author
 * @description smt-cli build [options]
 */

const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const fs = require('fs')
const webpack = require('webpack')
const moment = require('moment')
const { join } = require('path')
const { spawn, exec } = require('child_process')

const webpackConfig = require('../package/cli-service/webpack.config')
const {
  pathHelper,
  isIncludeInArray,
  isCorrectContent,
  isInstallPackage,
  copyDir,
  loadProjectConfig,
  writeFileFromString
} = require('./util/util')
const { error, info, done, warn, log } = require('./util/logger')
const { npm } = require('./util/wins')

module.exports = function buildModule(options) {
  const folder = pathHelper()
  const { distFolder, featureSrcFolder, activitySrcFolder, sourcemapFolder, projectRootFolder } = folder

  // 项目目录类型 web admin
  const contentType = folder.projectRootFolder.split('/').pop().split('-').pop()
  // 获取 frameType
  let frameName = ''
  const config = loadProjectConfig()
  if (config && config.frameType) {
    frameName = config.frameType
  }

  // 发布环境
  const envType = ['dev', 'stg', 'stg2', 'stg3', 'pre', 'prod', 'mock', 'local']

  // 接口环境变量
  process.env.API_ENV = {}

  // node 环境变量
  process.env.NODE_ENV = 'production'

  // 要编译的页面模块
  let pageModules = []

  // 是否分析 bundle 大小
  let analyzer = options.analyz

  // 允许 remove dist, 解决同时有 feature，activity 两个模版时，会删除两遍 dist
  let allowRemove = true

  // 城市变量
  process.env.CITY_ENV = null
  const { cityEnv = '' } = options
  if (cityEnv) {
    process.env.CITY_ENV = cityEnv
  }

  checkContent()

  // 检查目录及依赖安装
  function checkContent() {
    if (isCorrectContent()) {
      isInstallPackage().then(res => {
        if (res) {
          checkArgvs()
        }
      })
    }
  }

  function checkArgvs() {
    if (isIncludeInArray(envType, options.env)) {
      process.env.API_ENV = options.env
    } else {
      error(`请输入约定的接口环境变量 ${envType}`)
      return
    }

    if (frameName) {
      if (frameName === 'vue') {
        if (options.module) {
          pageModules.push(options.module)
          eslintCheck()
        } else if (!options.module && analyzer) {
          error('请输入需要分析包的模块名')
          info('示例：smt-cli build -m feature/welcome --analyz')
          analyzer = false
        } else {
          pageModules = getAllModules()
          eslintCheck()
        }
      } else if (frameName === 'react') {
        if (options.module) {
          // admin 项目无需 module name 参数
          error('admin 项目下无需输入 type-module-name')
          info('示例：smt-cli build')
          return
        }
        eslintCheck()
      } else if (frameName === 'vue-cli') {
        eslintCheck()
      } else {
        error('当前文件夹非项目规范目录，请先切换到项目目录')
      }
    } else if (contentType === 'web') {
      if (options.module) {
        pageModules.push(options.module)
        eslintCheck()
      } else if (!options.module && analyzer) {
        error('请输入需要分析包的模块名')
        info('示例：smt-cli build -m feature/welcome --analyz')
        analyzer = false
      } else {
        pageModules = getAllModules()
        eslintCheck()
      }
    } else if (contentType === 'admin') {
      if (options.module) {
        // admin 项目无需 module name 参数
        error('admin 项目下无需输入 type-module-name')
        info('示例：smt-cli build')
        return
      }
      eslintCheck()
    } else if (frameName === 'vue-cli') {
      eslintCheck()
    } else {
      error('当前文件夹非项目规范目录，请先切换到项目目录')
    }
  }

  // build 前 ESLint 扫描
  function eslintCheck() {
    info('代码扫描中...')

    try {
      exec('npm run lint -- --rule "no-alert: 2"', (err, stdout, stderr) => {
        info('本次扫描结果：')
        if (err) {
          error('扫描未通过')
          error(`扫描日志: ${stdout}`)
          warn(`stderr: ${stderr}`)
          warn('请修复 error 和 warning 级错误后，重新构建')
          process.exit()
        } else {
          warn(`扫描日志: ${stdout}`)
          done('扫描通过')
          if (frameName) {
            if (frameName === 'vue') {
              buildWeb()
            } else if (frameName === 'react') {
              buildAdmin()
            } else if (frameName === 'vue-cli') {
              buildOpenPlatform()
            } else {
              error('请检查 frameName 配置')
            }
          } else if (contentType === 'web') {
            buildWeb()
          } else if (contentType === 'admin') {
            buildAdmin()
          } else if (frameName === 'vue-cli') {
            buildOpenPlatform()
          } else {
            error('请检查 frameName 配置')
          }
        }
      })
    } catch (ex) {
      error(`代码扫描失败：${ex}`)
    }
  }

  function buildWeb() {
    info(`构建环境: ${options.env}`)
    if (cityEnv) {
      info(`城市环境变量: ${process.env.CITY_ENV}`)
    }
    info(`构建范围: ${pageModules.length === 0 ? '所有模块' : pageModules.join(', ')}`)

    if (allowRemove) {
      rm(distFolder, err => {
        // 删除打包目录出错
        if (err) {
          error(err.toString())
        } else {
          allowRemove = false
          compileModule(pageModules, () => {
            copyPublicFile()
            done('项目构建完成!')
            info('如需本地验证请运行：smt check')
          })
        }
      })
    }
  }

  function buildAdmin() {
    rm(sourcemapFolder, err => {
      if (err) throw err // 删除 sourcemap 目录出错
    })
    info(`构建环境: ${options.env}`)
    if (cityEnv) {
      info(`城市环境变量: ${process.env.CITY_ENV}`)
    }
    const command = spawn(npm, ['run', 'build', options.env])
    command.stdout.on('data', data => {
      log(data.toString())
    })

    command.stderr.on('data', data => {
      warn(`${data}`)
    })

    command.on('close', code => {
      if (code === 0) {
        done('项目构建完成!')
        info('如需本地验证请运行：smt check')
      } else {
        error(`项目构建失败：${code}`)
        info('请尝试重新构建')
      }
    })
  }

  function buildOpenPlatform() {
    info(`构建环境: ${options.env}`)
    if (cityEnv) {
      info(`城市环境变量: ${process.env.CITY_ENV}`)
    }

    const opt = {
      VUE_APP_API_ENV: options.env,
      VUE_APP_CITY_ENV: process.env.CITY_ENV
    }
    writeFileFromString(folder.envFile, opt)

    const command = spawn(npm, ['run', 'build'])
    command.stdout.on('data', data => {
      log(data.toString())
    })

    command.stderr.on('data', data => {
      warn(`${data}`)
    })

    command.on('close', code => {
      if (code === 0) {
        done('项目构建完成!')
        info('如需本地验证请运行：smt check')
      } else {
        error(`项目构建失败：${code}`)
        info('请尝试重新构建')
      }
    })
  }

  function getAllModules() {
    // 不指定模块页面，默认编译所有页面
    const isDirectory = source => fs.lstatSync(source).isDirectory()
    const getDirectories = source =>
      fs
        .readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory)
        .map(path => path.replace(source, ''))

    if (pageModules.length === 0) {
      const featureModules = getDirectories(featureSrcFolder).map(name => `feature/${name}`)
      let activityModules = []
      const activityYearFolders = getDirectories(activitySrcFolder).map(name => activitySrcFolder + name)

      if (activityYearFolders) {
        activityYearFolders.forEach(yearFolder => {
          const acModules = getDirectories(yearFolder)
            .map(name => join(yearFolder, name))
            .filter(isDirectory)
            .map(folderPath => folderPath.substring(folderPath.lastIndexOf('/activity/') + 1))
          activityModules = activityModules.concat(acModules)
        })
      }
      pageModules = featureModules.concat(activityModules)
    }
    return pageModules
  }

  // 静态资源目录，webpack 不进行编译
  function copyPublicFile() {
    const publicPath = join(projectRootFolder, '/public')
    const distPath = join(`${distFolder}${process.env.API_ENV}`, '/public')
    // 判断 public 是否存在
    if (fs.existsSync(publicPath)) {
      copyDir(publicPath, distPath, err => {
        error(`public 静态资源目录拷贝失败, err: ${err}`)
      })
    }
  }

  function compileModule(pageModule, cb) {
    const { API_ENV, NODE_ENV, CITY_ENV } = process.env
    const moduleName = pageModule.pop()

    const spinner = ora(chalk.green(`拼命编译[${moduleName}]中...`))
    spinner.start()

    const targetFolder = join(distFolder, API_ENV, '/', moduleName)

    // 用于 sourcemap 生成
    const sourcemapModuleName = `${API_ENV}/${moduleName}` || 'all'

    rm(targetFolder, err => {
      // 删除打包目录出错
      if (err) throw err
      // 调用 webpack 打包脚本，开始打包
      webpack(
        webpackConfig({
          moduleName,
          API_ENV,
          NODE_ENV,
          CITY_ENV,
          sourcemapModuleName,
          analyzer
        }),
        (e, stats) => {
          spinner.stop()
          // webpack 打包出错
          if (e) {
            error(`webpack 打包失败：${stats.errorDetails}`)
          }

          // 输出打包相关信息
          // https://webpack.docschina.org/configuration/stats/
          log(
            stats.toString({
              colors: true,
              children: false,
              chunks: false,
              modules: false
            })
          )

          // 记录打包hash，日期，做版本对比用
          const metaData = {
            hash: stats.hash,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
          }
          const metaDataFilePath = `${join(distFolder, API_ENV, '/', moduleName, '/')}meta.txt`

          fs.writeFile(metaDataFilePath, JSON.stringify(metaData, null, 2), 'utf-8', e => {
            if (e) {
              error(`写入 meta.txt 失败 ${e.toString()}`)
              process.exit(0)
            }
          })

          done(`编译完成：/dist/${API_ENV}/${moduleName}`)

          if (pageModule.length > 0) {
            setTimeout(() => {
              compileModule(pageModule, cb)
            }, 100)
          } else {
            cb()
          }
        }
      )
    })
  }
}
