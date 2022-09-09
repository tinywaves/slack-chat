// project 提取配置

module.exports = {
	// 接口环境
	apiEnv: {
		// 生产环境
		API_BASE_URL_PROD: '',
		// 预发布环境
		API_BASE_URL_PRE: '',
		// STG1 开发联调环境
		API_BASE_URL_STG1: '',
		// STG2 测试环境
		API_BASE_URL_STG2: '',
		// 后端开发本地环境 需要与开发确认
		API_BASE_URL_LOCAL: '',
		// MOCK 地址，详情参照 yapi 文档
		API_BASE_URL_MOCK: ''
	}
	// 自定义发布地址
	// deployEnv: ''
};
