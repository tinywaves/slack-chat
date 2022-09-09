import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('../page/Hello')

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
			meta: {
				title: '欢迎使用'
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面 title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

export default router
