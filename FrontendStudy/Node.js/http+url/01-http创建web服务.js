/* // 引入 http 模块
var http = require('http');
// 创建 web 服务
// request 表示获取 URL 传过来的信息
// response 表示对浏览器响应的信息
http.createServer(function (request, response) {
  // 响应头
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // 打印信息
  response.end('Hello World');
}).listen(8081); // 端口 8081

console.log('Server running at http://127.0.0.1:8081/'); */

const http = require('http');
http.createServer((request, response) => {
  console.log(request.url); // 获取 URL
  response.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
  response.write('node.js');
  response.end(); // 结束响应
}).listen(3000);