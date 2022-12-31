const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  // 状态码
  ctx.status = 400;
  ctx.response.body = {
    name: 'tinyRipple'
  };
});

app.listen(9000, () => {
  console.log('server');
});
