/* eslint-disable global-require */
module.exports = {
	plugins: [
		require('autoprefixer')({
			overrideBrowserslist: ['iOS >= 7', 'Android >= 4']
		}),
		require('postcss-pxtorem')({
			rootValue: 16,
			propList: ['*', '!border*'],
			selectorBlackList: ['scui']
		})
	]
}
