const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const Config = require('webpack-chain')
const bundleAnalyzer = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')

const { pathHelper } = require('../../script/util/util')
const { isWindows } = require('../../script/util/wins')
const terserOptions = require('./terserOptions')

const Service = require('./service')

const folder = pathHelper()
const { distFolder, srcFolder } = folder
const projectOptions = new Service().init()
const inlineLimit = 4096

const webpackChainFns = []
const webpackRawConfigFns = []

const findExisting = (context, files) => {
	for (const file of files) {
		if (fs.existsSync(path.join(context, file))) {
			return file
		}
	}
}

const resolve = dir => path.join(process.cwd(), './', dir)

const cloneRuleNames = (to, from) => {
	if (!to || !from) {
		return
	}
	from.forEach((r, i) => {
		if (to[i]) {
			Object.defineProperty(to[i], '__ruleNames', {
				value: r.__ruleNames
			})
			cloneRuleNames(to[i].oneOf, r.oneOf)
		}
	})
}

const resolveChainableWebpackConfig = () => {
	// apply webpack configs from project config file
	if (projectOptions.chainWebpack) {
		webpackChainFns.push(projectOptions.chainWebpack)
	}
	const chainableConfig = new Config()
	// apply chains
	webpackChainFns.forEach(fn => fn(chainableConfig))
	return chainableConfig
}

const resolveWebpackConfig = (chainableConfig = resolveChainableWebpackConfig()) => {
	// get raw config
	let config = chainableConfig.toConfig()
	const original = config
	if (projectOptions.configureWebpack) {
		webpackRawConfigFns.push(projectOptions.configureWebpack)
	}
	// apply raw config fns
	webpackRawConfigFns.forEach((fn) => {
		if (typeof fn === 'function') {
			// function with optional return value
			const res = fn(config)
			if (res) config = merge(config, res)
		} else if (fn) {
			// merge literal values
			config = merge(config, fn)
		}
	})

	// #2206 If config is merged by merge-webpack, it discards the __ruleNames
	// information injected by webpack-chain. Restore the info so that
	// vue inspect works properly.
	if (config !== original) {
		cloneRuleNames(
			config.module && config.module.rules,
			original.module && original.module.rules
		)
	}

	// console.log('config', Config.toString(config))

	return config
}

const genTranspileDepRegex = (transpileDependencies) => {
	const deps = transpileDependencies.map((dep) => {
		let depResult
		if (typeof dep === 'string') {
			const depPath = path.join('node_modules', dep, '/')
			depResult = isWindows
				? depPath.replace(/\\/g, '\\\\') // double escape for windows style path
				: depPath
		}
		if (dep instanceof RegExp) {
			depResult = dep.source
		}
		return depResult
	})
	return deps.length ? new RegExp(deps.join('|')) : null
}

module.exports = (options) => {
	const {
		API_ENV, sourcemapModuleName, NODE_ENV, CITY_ENV, port, analyzer
	} = options
	const isProd = NODE_ENV === 'production'
	const buildDir = `${distFolder + API_ENV}/${options.moduleName}`
	const entryJs = `${srcFolder}page/${options.moduleName}/index.js`
	const entryHtmlTempl = `${srcFolder}page/${options.moduleName}/index.html`
	const transpileDepRegex = genTranspileDepRegex(projectOptions.transpileDependencies)

	// base js html
	webpackChainFns.push((config) => {
		config.entry('index').clear()

		if (isProd) {
			config
				.entry('index')
				.add(entryJs)
				.end()
		} else {
			config
				.entry('index')
				.add(`webpack-dev-server/client?http://localhost:${port}/`)
				.add('webpack/hot/only-dev-server')
				.add('vue-hot-loader')
				.add(entryJs)
				.end()
		}

		config
			.mode(isProd ? 'production' : 'development')
			.output.path(projectOptions.outputDir ? projectOptions.outputDir : buildDir)
			// eslint-disable-next-line no-nested-ternary
			.filename(projectOptions.filenameHashing ? (isProd ? '[name].[contenthash].js' : '[name].[hash].js') : '[name].js')
			.publicPath(projectOptions.publicPath)
			.hashDigestLength(8)

		config.resolve.extensions
			.merge(['.js', '.vue', '.scss', '.json', '.config'])
			.end()
			.modules.add('node_modules')
			.add(resolve('node_modules'))
			.end()
			.alias.set('@', srcFolder)
			.set('vue$', 'vue/dist/vue.esm.js')

		config.resolveLoader.modules.add('node_modules').add(resolve('node_modules'))
		config.module.noParse(/^(vue|vue-router|vuex|vuex-router-sync)$/)

		config.module
			.rule('vue')
			.test(/\.vue$/)
			.use('vue-loader')
			.loader('vue-loader')

		config.module
			.rule('js')
			.test(/\.m?jsx?$/)
			.exclude.add((filepath) => {
				// always transpile js in vue files
				if (/\.vue\.jsx?$/.test(filepath)) {
					return false
				}
				// check if this is something the user explicitly wants to transpile
				if (transpileDepRegex && transpileDepRegex.test(filepath)) {
					return false
				}
				// Don't transpile node_modules
				return /node_modules/.test(filepath)
			})
			.end()
			.include.add(resolve('src'))
			.add(resolve('test'))
			// .add(resolve('node_modules/webpack-dev-server/client'))
			.end()
			.use('babel')
			.loader('babel-loader')
			.end()

		config.module
			.rule('html')
			.test(/\.html$/)
			.use('html-loader')
			.loader('html-loader')
			.options({
				minimize: isProd
			})

		config.module
			.rule('img')
			.test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
			.use('url-loader')
			.loader('url-loader')
			.options({
				limit: inlineLimit, // 表示小于 4kb 的图片转为 base64
				outputPath: 'asset', // 输出图片文件夹
				name: 'img/[name].[hash:8].[ext]'
			})

		// do not base64-inline SVGs.
		// https://github.com/facebookincubator/create-react-app/pull/1180
		config.module
			.rule('svg')
			.test(/\.(svg)(\?.*)?$/)
			.use('file-loader')
			.loader('file-loader')
			.options({
				limit: inlineLimit, // 表示小于 4kb 的图片转为 base64
				outputPath: 'asset', // 输出图片文件夹
				name: 'img/[name].[hash:8].[ext]'
			})

		config.module
			.rule('media')
			.test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
			.use('url-loader')
			.loader('url-loader')
			.options({
				limit: inlineLimit, // 表示小于 4kb 的图片转为 base64
				outputPath: 'asset', // 输出图片文件夹
				name: 'media/[name].[hash:8].[ext]'
			})

		config.module
			.rule('font')
			.test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
			.use('url-loader')
			.loader('url-loader')
			.options({
				limit: inlineLimit, // 表示小于 4kb 的图片转为 base64
				outputPath: 'asset', // 输出图片文件夹
				name: 'font/[name].[hash:8].[ext]'
			})

		config.module
			.rule('pug')
			.test(/\.pug$/)
			.use('pug-plain-loader')
			.loader('pug-plain-loader')
			.end()

		config.node.merge({
			// prevent webpack from injecting useless setImmediate polyfill because Vue
			// source contains it (although only uses it if it's native).
			setImmediate: false,
			// process is injected via DefinePlugin, although some 3rd party
			// libraries may require a mock to work properly (#934)
			process: 'mock',
			// prevent webpack from injecting mocks to Node native modules
			// that does not make sense for the client
			dgram: 'empty',
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
			child_process: 'empty'
		})

		// 创建一个在编译时可以配置的全局常量
		config.plugin('define').use(require('webpack/lib/DefinePlugin'), [
			{
				'process.env': {
					NODE_ENV: JSON.stringify(NODE_ENV),
					API_ENV: JSON.stringify(API_ENV),
					CITY_ENV: JSON.stringify(CITY_ENV)
				}
			}
		])

		config.plugin('html').use(require('html-webpack-plugin'), [
			{
				template: entryHtmlTempl,
				filename: projectOptions.indexPath,
				minify: {
					collapseWhitespace: isProd
				},
				options: projectOptions.pluginOptions
			}
		])

		config.plugin('extract-css').use(require('mini-css-extract-plugin'), [
			{
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: projectOptions.filenameHashing ? '[name].[contenthash].css' : '[name].css',
				chunkFilename: projectOptions.filenameHashing ? '[id].[contenthash].css' : '[id].css'
			}
		])

		// 上下文替换插件 减小 moment 包体积
		config
			.plugin('moment')
			.use(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/))

		// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
		if (projectOptions.productionSourceMap || !isProd) {
			config.plugin('scourcemap').use(
				new webpack.SourceMapDevToolPlugin({
					exclude: ['vendors', 'manifest'],
					filename: `../../../../sourcemap/${sourcemapModuleName}/[name].[hash].js.map`,
					append: false
				})
			)
		}

		if (!isProd) {
			config.plugin('hmr').use(require('webpack/lib/HotModuleReplacementPlugin'))

			// https://github.com/webpack/webpack/issues/6642
			config.output.globalObject('this')

			// config
			// 	.plugin('progress')
			// 	.use(require('webpack/lib/ProgressPlugin'))
		}

		if (isProd) {
			config.optimization.splitChunks({
				// chunks: 'all',
				cacheGroups: {
					vendors: {
						name: 'chunk-vendors',
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						chunks: 'initial'
					},
					common: {
						name: 'chunk-common',
						minChunks: 2,
						priority: -20,
						chunks: 'initial',
						reuseExistingChunk: true
					}
				}
			})
		}

		if (isProd) {
			config.optimization.minimizer('terser')
				.use(TerserPlugin, [terserOptions(options)])
		}

		// 包大小分析
		if (analyzer) {
			config.plugin('analyz').use(new bundleAnalyzer.BundleAnalyzerPlugin())
		}

		config.merge({
			devServer: projectOptions.devServer
		})
	})

	// css
	webpackChainFns.push((webpackConfig) => {
		const getAssetPath = require('../../script/util/getAssetPath')
		const isProd = process.env.NODE_ENV === 'production'

		const {
			modules = false, extract = isProd, sourceMap = false, loaderOptions = {}
		} =	projectOptions.css || {}

		const shouldExtract = extract !== false
		const filename = getAssetPath(
			projectOptions,
			`css/[name]${projectOptions.filenameHashing ? '.[contenthash:8]' : ''}.css`
		)
		const extractOptions = Object.assign(
			{
				filename,
				chunkFilename: filename
			},
			extract && typeof extract === 'object' ? extract : {}
		)

		// use relative publicPath in extracted CSS based on extract location
		// in lib mode, CSS is extracted to dist root.
		const cssPublicPath = process.env.VUE_CLI_BUILD_TARGET === 'lib'
			? './'
			: '../'.repeat(
				/* eslint-disable no-useless-escape */
				extractOptions.filename.replace(/^\.[\/\\]/, '').split(/[\/\\]/g).length - 1
			)

		// check if the project has a valid postcss config
		// if it doesn't, don't use postcss-loader for direct style imports
		// because otherwise it would throw error when attempting to load postcss config
		const hasPostCSSConfig = !!(
			loaderOptions.postcss
			|| findExisting(resolve('.'), [
				'.postcssrc',
				'.postcssrc.js',
				'postcss.config.js',
				'.postcssrc.yaml',
				'.postcssrc.json'
			])
		)

		// if building for production but not extracting CSS, we need to minimize
		// the embbeded inline CSS as they will not be going through the optimizing
		// plugin.
		const needInlineMinification = isProd && !shouldExtract

		const cssnanoOptions = {
			preset: [
				'default',
				{
					mergeLonghand: false,
					cssDeclarationSorter: false
				}
			]
		}
		if (projectOptions.productionSourceMap && sourceMap) {
			cssnanoOptions.map = { inline: false }
		}

		function createCSSRule(lang, test, loader, options) {
			const baseRule = webpackConfig.module.rule(lang).test(test)

			// rules for <style lang="module">
			const vueModulesRule = baseRule.oneOf('vue-modules').resourceQuery(/module/)
			applyLoaders(vueModulesRule, true)

			// rules for <style>
			const vueNormalRule = baseRule.oneOf('vue').resourceQuery(/\?vue/)
			applyLoaders(vueNormalRule, false)

			// rules for *.module.* files
			const extModulesRule = baseRule.oneOf('normal-modules').test(/\.module\.\w+$/)
			applyLoaders(extModulesRule, true)

			// rules for normal CSS imports
			const normalRule = baseRule.oneOf('normal')
			applyLoaders(normalRule, modules)

			function applyLoaders(rule, modules) {
				if (shouldExtract) {
					rule.use('extract-css-loader')
						.loader(require('mini-css-extract-plugin').loader)
						.options({
							publicPath: cssPublicPath
						})
				} else {
					rule.use('vue-style-loader')
						.loader('vue-style-loader')
						.options({
							sourceMap
						})
				}

				const cssLoaderOptions = Object.assign(
					{
						sourceMap,
						importLoaders:
							1 // stylePostLoader injected by vue-loader
							+ (hasPostCSSConfig ? 1 : 0)
							+ (needInlineMinification ? 1 : 0)
					},
					loaderOptions.css
				)

				if (modules) {
					const { localIdentName = '[name]_[local]_[hash:base64:5]' } = loaderOptions.css || {}
					Object.assign(cssLoaderOptions, {
						modules,
						localIdentName
					})
				}

				rule.use('css-loader')
					.loader('css-loader')
					.options(cssLoaderOptions)

				if (needInlineMinification) {
					rule.use('cssnano')
						.loader('postcss-loader')
						.options({
							sourceMap,
							plugins: [require('cssnano')(cssnanoOptions)]
						})
				}

				if (hasPostCSSConfig) {
					rule.use('postcss-loader')
						.loader('postcss-loader')
						.options(Object.assign({ sourceMap }, loaderOptions.postcss))
				}

				if (loader) {
					rule.use(loader)
						.loader(loader)
						.options(Object.assign({ sourceMap }, options))
				}
			}
		}

		createCSSRule('css', /\.css$/)
		createCSSRule('postcss', /\.p(ost)?css$/)
		createCSSRule('scss', /\.scss$/, 'sass-loader', loaderOptions.sass)
		createCSSRule(
			'sass',
			/\.sass$/,
			'sass-loader',
			Object.assign(
				{
					indentedSyntax: true
				},
				loaderOptions.sass
			)
		)
		createCSSRule('less', /\.less$/, 'less-loader', loaderOptions.less)
		createCSSRule(
			'stylus',
			/\.styl(us)?$/,
			'stylus-loader',
			Object.assign(
				{
					preferPathResolver: 'webpack'
				},
				loaderOptions.stylus
			)
		)

		// inject CSS extraction plugin
		if (shouldExtract) {
			webpackConfig
				.plugin('extract-css')
				.use(require('mini-css-extract-plugin'), [extractOptions])

			// minify extracted CSS
			if (isProd) {
				webpackConfig
					.plugin('optimize-css')
					.use(require('@intervolga/optimize-cssnano-plugin'), [
						{
							sourceMap: projectOptions.productionSourceMap && sourceMap,
							cssnanoOptions
						}
					])
			}
		}
	})

	return resolveWebpackConfig()
}
