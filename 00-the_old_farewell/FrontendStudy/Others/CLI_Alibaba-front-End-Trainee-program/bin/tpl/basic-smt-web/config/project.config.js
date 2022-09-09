// project 提取配置

module.exports = {
	// 接口环境
	apiEnv: {
		// 生产环境
		API_BASE_URL_PROD: '//smt-app.pingan.com.cn/smtapp',
		// 预发布环境
		API_BASE_URL_PRE: '//smt-app.pingan.com.cn/smtapp',
		// STG1 开发联调环境
		API_BASE_URL_STG1: '//smt-stg1.yun.city.pingan.com/api',
		// STG2 测试环境
		API_BASE_URL_STG2: '//basesmt-caas.yun.city.pingan.com/api',
		// 后端开发本地环境 需要与开发确认
		API_BASE_URL_LOCAL: '//10.118.142.80:8199/api/platform',
		// MOCK 地址，详情参照 yapi 文档
		API_BASE_URL_MOCK: '//30.23.12.175:3000/mock/39'
	}
	// 自定义发布地址
	// deployEnv: ''
}
