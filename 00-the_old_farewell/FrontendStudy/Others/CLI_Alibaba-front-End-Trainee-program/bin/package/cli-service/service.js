const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const defaultsDeep = require('lodash.defaultsdeep')

const {
	warn, error
} = require('../../script/util/logger')
const { pathHelper } = require('../../script/util/util')
const { defaults, validate } = require('./options')

module.exports = class Service {
	constructor() {
		this.initialized = false
		this.webpackChainFns = []
		this.webpackRawConfigFns = []
		this.devServerConfigFns = []
	}

	init() {
		if (this.initialized) {
			return false
		}
		this.initialized = true
		// load user config
		const userOptions = this.loadUserOptions()
		this.projectOptions = defaultsDeep(userOptions, defaults())

		// apply webpack configs from project config file
		if (this.projectOptions.configureWebpack) {
			this.webpackRawConfigFns.push(this.projectOptions.configureWebpack)
		}

		if (this.projectOptions.chainWebpack) {
			this.webpackChainFns.push(this.projectOptions.chainWebpack)
		}

		return this.projectOptions
	}

	loadUserOptions() {
		// zeus.config.js
		let fileConfig
		let resolved
		let resolvedFrom

		const folder = pathHelper()

		const ZEUS_CLI_SERVICE_CONFIG_PATH = `${folder.projectRootFolder}/config/zeus.config.js`

		const configPath = (
			// TODO
			ZEUS_CLI_SERVICE_CONFIG_PATH
            || path.resolve(this.context, 'zeus.config.js')
		)

		if (fs.existsSync(configPath)) {
			try {
				fileConfig = require(configPath)
				if (!fileConfig || typeof fileConfig !== 'object') {
					error(
						`Error loading ${chalk.bold('zeus.config.js')}: should export an object.`
					)
					fileConfig = null
				}
			} catch (e) {
				error(`Error loading ${chalk.bold('zeus.config.js')}:`)
				throw e
			}
		}

		if (fileConfig) {
			resolved = fileConfig
			resolvedFrom = 'zeus.config.js'
		} else {
			resolved = this.inlineOptions || {}
			resolvedFrom = 'inline options'
		}

		// normalize some options
		ensureSlash(resolved, 'publicPath')
		if (typeof resolved.publicPath === 'string') {
			resolved.publicPath = resolved.publicPath.replace(/^\.\//, '')
		}

		removeSlash(resolved, 'outputDir')

		// deprecation warning
		// TODO remove in final release
		if (resolved.css && resolved.css.localIdentName) {
			warn(
				'css.localIdentName has been deprecated. '
          + 'All css-loader options (except "modules") are now supported via css.loaderOptions.css.'
			)
		}

		// validate options
		validate(resolved, (msg) => {
			error(
				`Invalid options in ${chalk.bold(resolvedFrom)}: ${msg}`
			)
		})

		return resolved
	}
}

function ensureSlash(config, key) {
	let val = config[key]
	if (typeof val === 'string') {
		if (!/^https?:/.test(val)) {
			val = val.replace(/^([^/.])/, '/$1')
		}
		config[key] = val.replace(/([^/])$/, '$1/')
	}
}

function removeSlash(config, key) {
	if (typeof config[key] === 'string') {
		config[key] = config[key].replace(/\/$/g, '')
	}
}
