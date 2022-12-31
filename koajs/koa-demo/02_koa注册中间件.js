// koa注册中间件使用use方法，但是koa不提供method方法注册中间件，如get/post···
// koa同时也不提供app.use('path', () => {})
// koa不提供连续注册中间件方式
const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'POST') {
      ctx.response.body = 'login success';
    }
  } else {
    ctx.response.body = 'other request';
  }
});

app.listen(8000, () => {
  console.log('server');
});
