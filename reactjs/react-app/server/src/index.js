const Koa = require('koa');

const app = new Koa();

app.listen(10000, () => {
  console.log('server...');
});

app.use((ctx) => {
  ctx.body = {
    name: 'tinyRipple'
  };
});
