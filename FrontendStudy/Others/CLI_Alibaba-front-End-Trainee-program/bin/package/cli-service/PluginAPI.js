const path = require('path')


class PluginAPI {
	/**
     *
     * @param {string} id -  Id of the plugin.
     * @param {Service} service - A smt-cli-service instance.
     */
	constructor(id, service) {
		this.id = id
		this.service = service
	}

	/**
     * Current working directory.
     */
	getCwd() {
		return this.service.context
	}

	/**
     * Resolve path for a project.
     *
     * @param {string} _path - Relative path from project root
     * @return {string} The resolved absolute path.
     */
	resolve(_path) {
		return path.resolve(this.service.context, _path)
	}

	/**
     * Register a function that will receive a chainable webpack config
     * the function is lazy and won't be called until `resolveWebpackConfig` is
     * called
     *
     * @param {function} fn
     */
	chainWebpack(fn) {
		this.service.webpackChainFns.push(fn)
	}

	/**
     * Register
     * - a webpack configuration object that will be merged into the config
     * OR
     * - a function that will receive the raw webpack config.
     *   the function can either mutate the config directly or return an object
     *   that will be merged into the config.
     *
     * @param {object | function} fn
     */
	configureWebpack(fn) {
		this.service.webpackRawConfigFns.push(fn)
	}

	/**
     * Register a dev serve config function. It will receive the express `app`
     * instance of the dev server.
     *
     * @param {function} fn
     */
	configureDevServer(fn) {
		this.service.devServerConfigFns.push(fn)
	}


	/**
     * Resolve the final raw webpack config, that will be passed to webpack.
     *
     * @param {ChainableWebpackConfig} [chainableConfig]
     * @return {object} Raw webpack config.
     */
	resolveWebpackConfig(chainableConfig) {
		return this.service.resolveWebpackConfig(chainableConfig)
	}

	/**
     * Resolve an intermediate chainable webpack config instance, which can be
     * further tweaked before generating the final raw webpack config.
     * You can call this multiple times to generate different branches of the
     * base webpack config.
     * See https://github.com/mozilla-neutrino/webpack-chain
     *
     * @return {ChainableWebpackConfig}
     */
	resolveChainableWebpackConfig() {
		return this.service.resolveChainableWebpackConfig()
	}
}

module.exports = PluginAPI
