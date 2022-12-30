const express = require('express');

const app = express();

// path匹配中间件
app.use('/home', (req, res, next) => {
  console.log('home01');
  next();
  res.end('home middleware');
});

app.use('/home', (req, res, next) => {
  console.log('home02');
});

app.listen(8000, () => {
  console.log('普通中间件服务器');
});
