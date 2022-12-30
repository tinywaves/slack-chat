const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

app.get('/home', (req, res, next) => {
  console.log('home get');
});

app.post('/login', (req, res, next) => {
  console.log('login post');
});

app.listen(8000, () => {
  console.log('path匹配和method匹配');
});
