const Router = require('koa-router');

const router = new Router({ prefix: '/users' });

router.get('/', (ctx, next) => {
  ctx.response.body = 'user get request';
});

router.post('/', (ctx, next) => {
  ctx.response.body = 'user post request';
});

module.exports = router;
