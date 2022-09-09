#!/usr/bin/env node

const chalk = require('chalk')
const semver = require('semver')
const program = require('commander')
// const fs = require('fs')

const packageJson = require('../package')
// const { recordLibInfo, readJson } = require('./script/util/libVersion')
// const { pathHelper, isIncludeInArray, isCorrectContent } = require('./script/util/util')
// const { warnVersion, exitVersion } = require('../zeus.config')

console.log()
console.log(chalk.yellow('===== Z E U S - C L I ====='))
console.log()

// Node version forcibly exits
function checkNodeVersion(wantedVersion, id) {
  if (!semver.satisfies(process.version, wantedVersion)) {
    console.log(
      chalk.red(
        `You are using Node ${process.version}, but this version of ${id} requires Node ${wantedVersion}.\nPlease upgrade your Node version.\n`
      )
    )
    process.exit(1)
  }
}

checkNodeVersion(packageJson.engines.node, 'smt-cli')

// Node Version Information
if (semver.satisfies(process.version, '9.x')) {
  console.log(
    chalk.red(
      `You are using Node ${process.version}.\n` +
      'Node.js 9.x has already reached end-of-life and will not be supported in future major releases.\n' +
      "It's strongly recommended to use an active LTS version instead."
    )
  )
}

program.version(`${packageJson.version}\n`, '-v, --version').usage('<command> [options]')

const initNewCity = require('./script/init')
program
  .command('init <city-name>')
  .description(
    'generate a project from a city template quickly'
  )
  .option(
    '--log',
    'Output log when the project is installing package'
  )
  .option(
    '-t, --type [type-name]',
    'Add the specified type of template',
    ['web', 'admin', 'open-platform']
  )
  .action((name, dir) => {
    let projectType = []
    if (Array.isArray(dir.type)) {
      projectType = projectType.concat(dir.type)
    } else {
      projectType.push(dir.type)
    }
    const options = {
      name: name,
      projectType: projectType,
      LOG: dir.log
    }
    initNewCity(options)
  })

const startModule = require('./script/start')
program
  .command('start')
  .description(
    'serve a module in development mode with zero config'
  )
  .option(
    '-e, --env [env-type]',
    'Add the specified env-type for starting the project',
    'stg'
  )
  .option(
    '-c, --city [city-env]',
    'Add the specified city env for starting the project'
  )
  .option(
    '-m, --module <type-module-name>',
    'Add the specified type-module-name for starting the project'
  )
  .option(
    '-p, --port [port]',
    'Add the port for starting the project [port]'
  )
  .action(dir => {
    const options = {
      env: dir.env,
      module: dir.module,
      cityEnv: dir.city || '',
      port: dir.port
    }
    startModule(options)
  })

const buildModule = require('./script/build')
program
  .command('build')
  .description(
    'build one or more modules in production mode with zero config'
  )
  .option(
    '-e, --env <env-type>',
    'Add the specified env-type for building the project',
    'stg'
  )
  .option(
    '-c, --city [city-env]',
    'Add the specified city env for building the project'
  )
  .option(
    '-m, --module [type-module-name]',
    'Add the specified type-module-name for building the project or some modules'
  )
  .option(
    '--analyz',
    'Visualize size of webpack output files with an interactive zoomable treemap.'
  )
  .action(dir => {
    const options = {
      env: dir.env,
      module: dir.module,
      cityEnv: dir.city || '',
      analyz: dir.analyz || false
    }
    buildModule(options)
  })

  // add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`Run ${chalk.cyan('smt <command> --help')} for detailed usage of given command`)
  console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
