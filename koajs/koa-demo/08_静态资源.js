const Koa = require('koa');
const staticServer = require('koa-static');

const app = new Koa();

app.use(staticServer('./build'));

app.listen(9000, () => {
  console.log('server');
});
