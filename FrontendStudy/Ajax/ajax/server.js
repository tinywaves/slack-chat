// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// GET
app.get('/server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应体
  response.send('Hello Ajax GET');
});
// POST
app.post('/server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应体
  response.send('Hello Ajax POST');
});
// ALL
app.all('/server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  // 设置响应体
  response.send('Hello Ajax ALL');
});
// 返回对象数据
app.all('/json-server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  // 设置对象数据
  const data = {
    name: 'zdh'
  };
  // 对对象数据进行转换
  let str = JSON.stringify(data);
  // 设置响应体
  response.send(str);
});
// IE 缓存问题
app.get('/ie', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应体
  response.send('Hello IE');
});
// 延时响应
app.get('/delay', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  setTimeout(() => {
    // 设置响应体
    response.send('延时响应');
  }, 3000);
});


// 4. 监听端口
app.listen(8000, () => {
  console.log('8000端口监听中...');
});