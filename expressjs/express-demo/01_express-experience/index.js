const express = require('express');

const app = express();

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('hello, get express');
});

app.post('/', (req, res, next) => {
  res.end('hello, post express');
});

app.listen(8000, () => {
  console.log('express-experience-success');
});
