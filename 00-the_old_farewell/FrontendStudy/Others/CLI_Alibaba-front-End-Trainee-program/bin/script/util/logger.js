const chalk = require('chalk')
const readline = require('readline')

// 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。
const padStart = require('string.prototype.padstart')

// 处理换行
const format = (label, msg) =>
  msg
    .split('\n')
    .map((line, i) => (i === 0 ? `${label} ${line}` : padStart(line, chalk.reset(label).length)))
    .join('\n')

const chalkTag = msg => chalk.bgBlackBright.white.dim(` ${msg} `)

exports.log = (msg = '', tag = null) => {
  if (tag) {
    console.log(format(chalkTag(tag), msg))
  } else {
    console.log(msg)
  }
}

exports.info = (msg, tag = null) => {
  console.log(format(`${chalk.bgCyan.black(' INFO ')}${tag ? chalkTag(tag) : ''}`, chalk.cyan(` ♫ ${msg}`)))
}

exports.done = (msg, tag = null) => {
  console.log(format(`${chalk.bgGreen.black(' DONE ')}${tag ? chalkTag(tag) : ''}`, ` ✔ ${msg}`))
}

exports.warn = (msg, tag = null) => {
  console.warn(format(`${chalk.bgYellow.black(' WARN ')}${tag ? chalkTag(tag) : ''}`, chalk.yellow(` ❣ ${msg}`)))
}

exports.error = (msg, tag = null) => {
  console.error(format(`${chalk.bgRed(' ERROR')}${tag ? chalkTag(tag) : ''}`, chalk.red(` ✘ ${msg}`)))
  if (msg instanceof Error) {
    console.error(msg.stack)
  }
}

exports.clearConsole = title => {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
    if (title) {
      console.log(title)
    }
  }
}
