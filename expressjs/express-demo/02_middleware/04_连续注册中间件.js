const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

app.get('/home',
  (req, res, next) => {
    console.log('home01');
    next();
  },
  (req, res, next) => {
    console.log('home02');
    next();
  },
  (req, res, next) => {
    console.log('home03');
    next();
  },
  (req, res, next) => {
    console.log('home04');
    res.end('home');
  });

app.listen(8000, () => {
  console.log('middleware server');
});
