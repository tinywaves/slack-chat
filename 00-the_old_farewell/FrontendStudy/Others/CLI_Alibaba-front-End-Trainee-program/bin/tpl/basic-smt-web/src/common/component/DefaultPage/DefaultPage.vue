<template>
	<div class="default-page" v-show="show">
		<img v-bind:src="defaultList[defaultPageType].infoImage" alt="">
		<p>{{defaultList[defaultPageType].message}}</p>
	</div>
</template>

<script>
import './DefaultPage.scss'
import defaultNoContent from './img/no-content.png'
import defaultNoSearchResult from './img/no-search-result.png'
import defaultComingSoon from './img/coming-soon.png'
import defaultDelete from './img/delete.png'

export default {
	name: 'DefaultPage',
	props: {
		show: {
			default: true
		},
		defaultPageType: {
			default: 1
		}
	},
	data() {
		return {
			defaultList: [
				{
					type: 0,
					message: '更多功能，敬请期待',
					infoImage: defaultComingSoon
				}, {
					type: 1,
					message: '暂时没有内容哦',
					infoImage: defaultNoContent
				}, {
					type: 2,
					message: '未搜索到相关结果',
					infoImage: defaultNoSearchResult
				}, {
					type: 3,
					message: '抱歉，内容已删除',
					infoImage: defaultDelete
				}
			]
		}
	}
}
</script>
