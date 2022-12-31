const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const uploadRouter = new Router({ prefix: '/upload' });
const uploads = multer({ dest: './uploads' });

uploadRouter.post('/avatar', uploads.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = 'file success';
});

app.use(uploadRouter.routes());

app.listen(8001, () => {
  console.log('server');
});
