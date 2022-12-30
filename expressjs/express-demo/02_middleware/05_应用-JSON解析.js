const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', data => {
//       const parseData = JSON.parse(data.toString());

//       req.body = parseData;
//     });

//     req.on('end', () => {
//       res.end('parse success');
//       next();
//     });
//   } else {
//     next();
//   }
// });
app.use(express.json()); // raw
// extended = true, 解析body时使用第三方库 qs
// extended = false, 解析body时使用node内置库querystring
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

app.post('/login', (req, res, next) => {
  console.log(req.body);
});

app.post('/home', (req, res, next) => {
  console.log(req.body);
});

app.listen(8000, () => {
  console.log('JSON parse');
});
