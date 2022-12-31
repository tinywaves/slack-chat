const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({ prefix: '/login' });
const upload = multer();

app.use(bodyParser());
router.post('/', upload.any(), (ctx, next) => {
  console.log(ctx.request.body);
  console.log(ctx.req.body);
  ctx.response.body = 'bodyparser';
});
app.use(router.routes());

app.listen(9000, () => {
  console.log('server');
});
