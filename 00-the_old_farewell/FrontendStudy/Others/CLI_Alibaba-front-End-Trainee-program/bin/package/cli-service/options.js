// webpack options
const { createSchema, validate } = require('../../script/util/validate')

const schema = createSchema(joi => joi.object({
	baseUrl: joi.string().allow(''),
	publicPath: joi.string().allow(''),
	outputDir: joi.string().allow(''),
	assetsDir: joi.string().allow(''),
	indexPath: joi.string(),
	filenameHashing: joi.boolean(),
	transpileDependencies: joi.array(),
	sourceMap: joi.boolean(),
	devServer: joi.object(),

	// webpack
	chainWebpack: joi.func(),
	configureWebpack: joi.alternatives().try(joi.object(), joi.func()),

	// 3rd party plugin options
	pluginOptions: joi.object()
}))

exports.validate = (options, cb) => {
	validate(options, schema, cb)
}

exports.defaults = () => ({
	// project deployment base
	publicPath: './',

	// where to output built files
	outputDir: '',

	// TODO
	// where to put static assets (js/css/img/font/...)
	assetsDir: '',

	// filename for index.html (relative to outputDir)
	indexPath: 'index.html',

	// whether filename will contain hash part
	filenameHashing: true,

	// deps to transpile
	transpileDependencies: [
		/* string or regex */
	],

	// sourceMap for build?
	sourceMap: false,

	devServer: {},

	pluginOptions: {}
})
