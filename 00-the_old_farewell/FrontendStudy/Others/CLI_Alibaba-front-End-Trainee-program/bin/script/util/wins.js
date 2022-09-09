/**
 * @author yangnengkang
 * windows 兼容函数
 */

/**
 * 是否 windows 环境
 */
const isWindows = process.platform === 'win32'

/**
 * npm 兼容
 */
const npm = isWindows ? 'npm.cmd' : 'npm'

module.exports = {
  npm,
  isWindows
}
