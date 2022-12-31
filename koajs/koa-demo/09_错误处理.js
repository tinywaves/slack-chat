const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.app.emit('error', new Error('error message'), ctx);
});

app.on('error', (error, ctx) => {
  ctx.status = 401;
  ctx.body = error.message;
});

app.listen(9000, () => {
  console.log('server');
});
