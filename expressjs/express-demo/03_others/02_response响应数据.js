const express = require('express');

const app = express();

app.get('/home', (req, res, next) => {
  // 设置响应码
  res.status(204);
  // 设置响应数据
  res.json({ name: 'tinyRipple' });
});

app.listen(8000, () => {
  console.log('response server');
});
