// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/', (request, response) => {
  // 设置响应体
  response.send('Hello Express');
})

// 4. 监听端口
app.listen(8000, () => {
  console.log('8000端口监听中...');
})