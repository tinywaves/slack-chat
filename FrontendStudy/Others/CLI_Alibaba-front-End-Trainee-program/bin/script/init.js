#!/usr/bin/env node

/**
 * @author
 * @description smt init [options] <city-name>
 */

const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const { spawn } = require('child_process')
const ora = require('ora')

const { error, done, info } = require('./util/logger')
const { isIncludeInArray } = require('./util/util')
const { npm } = require('./util/wins')

module.exports = function initNewCity(options) {
  const { projectType, name, LOG } = options
  let cityName = name

  // 模版类型list
  const typeList = ['web', 'admin', 'open-platform']

  checkCityName()

  function checkCityName() {
    const isABC = /^[a-z-]*$/
    const question = [
      {
        type: 'input',
        name: 'qName',
        message: '请输入新城市名 如:（changshu）',
        validate: type => {
          if (!type || !isABC.test(type)) {
            return '请输入城市拼音名'
          }
          return true
        }
      }
    ]

    if (!name || !isABC.test(name)) {
      error('请输入城市拼音名')
      // 询问
      inquirer.prompt(question).then(res => {
        cityName = res.qName
        initProject()
      })
    } else {
      initProject()
    }
  }

  // 初始化项目
  function initProject() {
    if (isIncludeInArray(typeList, projectType[0])) {
      getTemplate(projectType[0])
      // 每执行一次,删除该元素
      projectType.shift()
    } else {
      error(`请输入正确的模版类型 ${chalk.cyan(typeList)}`)
    }
  }

  function getTemplate(type) {
    const templatePath = path.resolve(__dirname, `../tpl/basic-smt-${type}`)
    const contentName = `${cityName.toLocaleLowerCase()}-smt-${type}`
    const projectPath = path.join('', `./${contentName}`)

    fs.mkdir(projectPath, {}, err => {
      if (err) {
        error(`${contentName} 文件夹已经存在`)
        error(`${err}`)
        return false
      }

      const spinner = ora(`获取 ${type} 模版工程中...`)
      spinner.start()

      // 复制模版工程代码到,新建的模块中
      fs.copy(templatePath, projectPath, error => {
        spinner.stop()
        if (error) {
          error(`${error}`)
          return false
        }
        done(`${cityName} 城市 ${type} 模版创建完成！`)
        installPackage(type)
        return true
      })
      return true
    })
  }

  function installPackage(type) {
    const contentName = `${cityName.toLocaleLowerCase()}-smt-${type}`
    const question = [
      {
        type: 'confirm',
        name: 'isInstallPackage',
        message: `是否立即安装 ${contentName} 项目依赖包？`
      }
    ]

    inquirer.prompt(question).then(response => {
      if (response.isInstallPackage) {
        const spinner = ora('📦 安装依赖中...')
        spinner.start()

        const command = spawn(npm, ['install'], { cwd: `./${cityName}-smt-${type}` })

        if (LOG) {
          command.stdout.on('data', data => {
            console.log(data.toString())
          })
          command.stderr.on('data', data => {
            console.log(`${data}`)
          })
        }

        command.on('close', code => {
          if (spinner) spinner.stop()
          if (code === 0) {
            done('安装成功')
            guidePrint(response.isInstallPackage)
          } else {
            error(`安装依赖失败：${code}`)
            info('请尝试手动重新安装')
          }
        })
      } else {
        guidePrint(response.isInstallPackage)
      }
    })
  }

  function guidePrint() {
    if (projectType && projectType.length > 0) {
      initProject()
    } else {
      info(`运行 web 项目示例：${chalk.cyan('smt start -m feature/welcome')}`)
      info(`运行 admin/open-platform 项目示例：${chalk.cyan('smt start')}`)
      done(chalk.green('enjoy coding!'))
    }
  }
}
