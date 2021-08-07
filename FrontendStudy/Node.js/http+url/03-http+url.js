const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  // 获取 http://127.0.0.1:3000/?name=zdh&id=2001 传输的 name 和 id
  response.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
  if (request.url != '/favicon.ico') {
    console.log(url.parse(request.url).query);
  }
  response.end(''); // 结束响应
}).listen(3000);