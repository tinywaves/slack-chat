const fs = require('fs')
const moment = require('moment')

const { error } = require('./logger')
const { pathHelper } = require('./util')
const { gitData } = require('../../../zeus.config')

// cli package json 路径
const cliJsonPath = `${pathHelper().cliRootFolder}/package.json`
// tpl web
const webJsonPath = `${pathHelper().cliRootFolder}/${gitData.tpl.web.exportDir}/package.json`
// tpl admin
const adminJsonPath = `${pathHelper().cliRootFolder}/${gitData.tpl.admin.exportDir}/package.json`
// tpl open-platform
const openPlatformJsonPath = `${pathHelper().cliRootFolder}/${gitData.tpl.openPlatform.exportDir}/package.json`
// 输出文件地址
const exportPath = `${pathHelper().projectRootFolder}/.zeusrc.json`

/**
 * 读取文件
 * @param {文件路径} file
 */
function readJson(file) {
  let data = {}
  if (fs.existsSync(file)) {
    try {
      data = JSON.parse(fs.readFileSync(file, 'utf8'))
    } catch (e) {
      error(e.toString())
      return
    }
  }
  return data
}

/**
 * 数据写入文件
 * @param {文件路径} file
 * @param {写入的数据} data
 */
function writeJson(file, data) {
  try {
    fs.writeFileSync(file, data, 'utf8')
  } catch (e) {
    error(e.toString())
  }
}

// 记录创建项目时的库信息 .zeusrc.json
async function recordLibInfo(type) {
  const jsonList = []
  // 按需写入相应的信息
  switch (type) {
    case 'web':
      jsonList.push(cliJsonPath, webJsonPath)
      break
    case 'admin':
      jsonList.push(cliJsonPath, adminJsonPath)
      break
    case 'open-platform':
      jsonList.push(cliJsonPath, openPlatformJsonPath)
      break
    default:
      jsonList.push(cliJsonPath, webJsonPath, adminJsonPath, openPlatformJsonPath)
  }
  // 读取 .zeusrc.json 的信息
  const zeusInfo = {
    data: []
  }

  // 新增
  jsonList.forEach(item => {
    const itemInfo = readJson(item)
    zeusInfo.data.push({
      name: itemInfo.name,
      version: itemInfo.version,
      lastChange: Date.now(),
      lastChangeReadOnly: moment().format('YYYY-MM-DD HH:mm:ss')
    })
  })

  await writeJson(exportPath, JSON.stringify(zeusInfo, null, 2))
}

// 修改
async function changeLibInfo(type) {
  // 读取 .zeusrc.json 的信息
  const zeusInfo = readJson(exportPath)
  if (zeusInfo && zeusInfo.data) {
    let jsonList = {}

    // 按需写入相应的信息
    switch (type) {
      case 'web':
        jsonList = webJsonPath
        break
      case 'admin':
        jsonList = adminJsonPath
        break
      case 'open-platform':
        jsonList = openPlatformJsonPath
        break
      case 'cli':
        jsonList = cliJsonPath
        break
      default:
        jsonList = cliJsonPath
    }

    const itemInfo = readJson(jsonList)
    itemInfo.lastChange = Date.now()
    itemInfo.lastChangeReadOnly = moment().format('YYYY-MM-DD HH:mm:ss')
    zeusInfo.data.forEach(obj => {
      if (obj.name === itemInfo.name) {
        // eslint-disable-next-line guard-for-in
        for (const key in obj) {
          if (obj[key]) {
            obj[key] = itemInfo[key]
          }
        }
      }
    })
    await writeJson(exportPath, JSON.stringify(zeusInfo, null, 2))
  } else {
    recordLibInfo(type)
  }
}

module.exports = {
  recordLibInfo,
  changeLibInfo,
  readJson
}
