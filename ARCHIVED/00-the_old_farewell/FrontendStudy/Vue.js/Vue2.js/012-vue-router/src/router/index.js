// 配置路由相关信息

// 导入 vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
// import home from '../components/home.vue';
// import about from '../components/about.vue';
// import user from '../components/user.vue';
// 路由懒加载
const home = () => import('../components/home.vue')
const homeNews = () => import('../components/homeNews.vue')
const homeMessages = () => import('../components/homeMessage.vue')
const about = () => import('../components/about.vue')
const user = () => import('../components/user.vue')
const profile = () => import('../components/profile.vue')


// 1. 通过 Vue.use 安装路由插件
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 2. 创建 vue-router 路由对象
const routes = [{
    path: '',
    redirect: '/home',
    component: home
  },
  {
    path: '/home',
    component: home,
    // 路由嵌套
    children: [{
        path: '',
        redirect: 'news',
        component: homeNews
      },
      {
        path: 'news',
        component: homeNews
      },
      {
        path: 'messages',
        component: homeMessages
      }
    ],
    meta: {
      title: 'HOME'
    }
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: 'ABOUT'
    }
  },
  {
    path: '/user/:userId',
    component: user,
    meta: {
      title: 'USER'
    }
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      title: 'PROFILE'
    }
  }
];

const router = new VueRouter({
  // 配置和组件和路由之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

// 前置守卫
// 全局导航守卫，监听路由跳转
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  // console.log('beforeEach');
  next();
});
// 后置钩子
router.afterEach((to, from) => {
  // console.log('afterEach');
});

// 3. 将 router 对象传入到 vue 实例中
export default router;
