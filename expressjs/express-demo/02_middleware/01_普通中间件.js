const express = require('express');

const app = express();

// 注册中间件
app.use((req, res, next) => {
  console.log('普通中间件01');
  next();
});

app.use((req, res, next) => {
  console.log('普通中间件02');
  next();
});

app.use((req, res, next) => {
  console.log('普通中间件03');
  res.end('hello middleware');
});

app.listen(8000, () => {
  console.log('普通中间件服务器');
});
