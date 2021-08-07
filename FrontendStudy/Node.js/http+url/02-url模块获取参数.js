const url = require('url');
var api = 'http://zhengdh.top/?name=zdh&id=2001';
var object = url.parse(api, true).query;
console.log(`姓名：${object.name}，id：${object.id}`);