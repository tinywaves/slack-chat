/**
 * @author yangnengkang
 * @description common methods
 */

const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')
const inquirer = require('inquirer')
const wifi = require('wifi-control')

const { error, warn } = require('./logger')

const { intranetSSIDList } = require('../../../zeus.config')

/**
 * @description 判断某个元素是否在数组中
 * @param { 数组集 } array
 * @param { 某个元素 } item
 */
function isIncludeInArray(array, item) {
  if (Array.isArray(array)) {
    return array.includes(item)
  }
  return false
}

/**
 * @description 判读是否在项目目录下
 */
function isCorrectContent(silence = false) {
  const frameList = ['vue', 'react', 'vue-cli']
  // 获取当前文件夹名称
  const currentContent = process.cwd().split('/').pop()
  const hasFlag = currentContent.indexOf('-smt-') === -1
  const config = loadProjectConfig()
  // frameType 约定项目运行框架，不对目录名称规则做校验
  if (config && config.frameType) {
    if (isIncludeInArray(frameList, config.frameType)) {
      return true
    }
    if (!silence) {
      error(`当前 frameType 参数仅支持 ${frameList}`)
    }
    return false
  }
  // forceUse 强制在项目目录下运行 Zeus，仅不校验 -smt-
  // 校验项目名称尾缀 web、admin
  if (config && config.forceUse) {
    if (!silence) {
      warn('forceUse 参数即将被废弃，请使用 frameType 代替')
    }
    return true
  }
  // 如 project.config.js 中无 forceUse && frame，则按照原有规则校验
  if (hasFlag) {
    if (!silence) {
      error('当前文件夹非项目规范目录，请先切换到项目目录')
      return false
    }
  }
  return true
}

/**
 * @description 判断当前目录下是否包含 node_modules 文件夹
 */
function isInstallPackage() {
  const modulePath = `${process.cwd()}/node_modules`
  const exit = new Promise(resolve => {
    fs.access(modulePath, fs.constants.F_OK, err => {
      if (err) {
        error('当前项目未安装 package 依赖，请先安装')
        return
      }
      resolve(true)
    })
  })
  return exit
}

/**
 * @description start build 相关路径
 */
function pathHelper() {
  const projectRootFolder = path.resolve(process.cwd(), './')
  const cliRootFolder = path.resolve(__dirname, '../../../')
  const Folder = {
    contentType: projectRootFolder.split('/').pop().split('-').pop(),
    cliRootFolder: cliRootFolder,
    projectRootFolder: projectRootFolder,
    distFolder: path.join(projectRootFolder, '/dist/'),
    sourcemapFolder: path.join(projectRootFolder, '/sourcemap/'),
    srcFolder: path.join(projectRootFolder, '/src/'),
    featureSrcFolder: path.join(projectRootFolder, '/src/page/feature/'),
    activitySrcFolder: path.join(projectRootFolder, '/src/page/activity/'),
    envFile: path.join(projectRootFolder, '.env')
  }
  return Folder
}

/**
 * @description 获取本机 IP
 */
function getIP() {
  let IPv4
  const interfaces = os.networkInterfaces()
  /* eslint-disable guard-for-in */
  for (const devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        IPv4 = alias.address
        return IPv4
      }
    }
  }
  return IPv4
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist, callback = () => {}) {
  fs.access(dist, err => {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist)
    }
    _copy(null, src, dist)
  })

  function _copy(err, src, dist) {
    if (err) {
      callback(err)
    } else {
      fs.readdir(src, (err, paths) => {
        if (err) {
          callback(err)
        } else {
          paths.forEach(dirname => {
            const _src = path.join(src, '/', dirname)
            const _dist = path.join(dist, '/', dirname)
            fs.stat(_src, (err, stat) => {
              if (err) {
                callback(err)
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src))
                }
                if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            })
          })
        }
      })
    }
  }
}

/**
 * 检查网络 是否内网 || ip 检查
 */
function isIntranetNetwork() {
  wifi.init({
    debug: false
  })

  const wifiResult = wifi.getIfaceState()

  if (wifiResult && wifiResult.ssid) {
    return isIncludeInArray(intranetSSIDList, wifiResult.ssid)
  }
  return false
}

/**
 * 切换内网提示
 */
async function intranetNetworkConfirm() {
  if (isIntranetNetwork()) {
    return true
  }
  const userConfirm = await inquirer.prompt({
    type: 'confirm',
    name: 'qUserConfirm',
    message: '当前操作需要内网环境，请确认网络是否通畅？',
    default: true
  })

  if (userConfirm.qUserConfirm) {
    return true
  }
  process.exit()
}

/**
 * 切换外网提示
 */
async function extranetNetworkConfirm() {
  if (!isIntranetNetwork()) {
    return true
  }
  const userConfirm = await inquirer.prompt({
    type: 'confirm',
    name: 'qUserConfirm',
    message: '当前操作需要外网环境，请确认网络是否通畅？',
    default: true
  })

  if (userConfirm.qUserConfirm) {
    return true
  }
  process.exit()
}

// 解析文件夹
function resolve(paths) {
  return path.resolve(__dirname, paths)
}

// 加载 project.config.js
function loadProjectConfig() {
  let config = {}
  const folder = pathHelper()
  const { projectRootFolder } = folder
  const projectConfig = path.join(`${projectRootFolder}/config/project.config.js`)
  if (fs.existsSync(projectConfig)) {
    try {
      config = require(projectConfig)
      if (!config || typeof config !== 'object') {
        error(`loading ${chalk.bold('project.config.js')}: should export an object.`)
        config = null
        return false
      }
      return config
    } catch (e) {
      error(`loading ${chalk.bold('project.config.js')}`)
    }
  }
}

/**
 * 转化对象为字符串
 * @param {Oject} o
 * @param {String} EOF 间隔结束符, 默认值: '\n'
 */
function convertObjectToString(o, EOF = '\n') {
  const keyArray = Object.keys(o)
  // 对象转换字符
  const resArray = keyArray.map(item => `${item}=${o[item]}`)
  return resArray.join(EOF)
}

function writeFileFromString(file, str, success) {
  // 写入文件
  fs.writeFileSync(file, convertObjectToString(str), err => {
    if (err) return error(err)
    if (success) success(file, str)
    return true
  })
}

module.exports = {
  isIncludeInArray,
  isCorrectContent,
  isInstallPackage,
  pathHelper,
  getIP,
  copyDir,
  isIntranetNetwork,
  intranetNetworkConfirm,
  extranetNetworkConfirm,
  resolve,
  loadProjectConfig,
  writeFileFromString
}
