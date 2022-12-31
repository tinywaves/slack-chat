const Koa = require('koa');
const Router = require('koa-router');

const router = new Router({ prefix: '/users' });
router.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  ctx.response.body = 'params - query';
});

const app = new Koa();

app.use(router.routes());

app.listen(9000, () => {
  console.log('server');
});
