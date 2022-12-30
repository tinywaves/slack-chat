const express = require('express');

const usersRouter = require('./routers/users');

const app = express();

app.use('/users', usersRouter);

app.listen(8000, () => {
  console.log('router system');
});
