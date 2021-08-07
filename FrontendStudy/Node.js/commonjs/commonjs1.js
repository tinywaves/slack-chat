var http = require('http');
const tools = require('./module/tools');
console.log(tools);
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  var api = tools.urlFormat('archives');
  response.end(api);
}).listen(3000);