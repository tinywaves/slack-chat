const Koa = require('koa');

const usersRouter = require('./routers/users');

const app = new Koa();

app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(9000, () => {
  console.log('server');
});
