// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: "babel-eslint"
	},
	env: {
		browser: true
	},
	globals: {
		scHybridBridge: true
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: ["plugin:vue/essential", "airbnb-base"],
	// required to lint *.vue files
	plugins: ["vue"],
	// add your custom rules here
	rules: {
		// Ensure imports point to a file/module that can be resolved
		"import/extensions": [2, { ignore: [".js", ".json"] }],
		"import/no-unresolved": 0,
		// disallow reassignment of function parameters
		// disallow parameter object manipulation except for specific exclusions
		"no-param-reassign": [
			"error",
			{
				props: true,
				ignorePropertyModificationsFor: [
					"state", // for vuex state
					"acc", // for reduce accumulators
					"e" // for e.returnvalue
				]
			}
		],
		// allow optionalDependencies
		"import/no-extraneous-dependencies": [
			"error",
			{
				optionalDependencies: ["test/unit/index.js"]
			}
		],
		// 禁用分号
		semi: [2, "never"],
		// 禁止尾随逗号
		"comma-dangle": [2, "never"],
		// 强制使用 tab 缩进
		indent: [2, "tab"],
		// 关闭禁用 tab
		"no-tabs": 0,
		// 单行最大长度 200 字符串
		"max-len": [2, { code: 200 }],
		"no-use-before-define": [2, { functions: false, classes: true }],
		// 关闭禁用 ++ 或 --
		"no-plusplus": [0],
		// 关闭使用字面量对象
		"object-shorthand": 0,
		// 关闭函数表达式必须有名字
		"func-names": 0
	}
};
