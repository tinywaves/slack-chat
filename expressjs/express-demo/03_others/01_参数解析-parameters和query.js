const express = require('express');

const app = express();

// params
app.get('/home/:id/:name', (req, res, next) => {
  console.log(req.params);
  res.end('home get');
});

// query
app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end('login get');
});

app.listen(8000, () => {
  console.log('parameters server');
});
