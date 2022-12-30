const express = require('express');

const LOGIN_ERROR = 'login-error';
const REGISTER_ERROR = 'register-error';

const app = express();

app.post('/login', (req, res, next) => {
  const flag = false;

  if (flag) {
    res.json('login success');
  } else {
    next(new Error(LOGIN_ERROR));
  }
});

app.post('/register', (req, res, next) => {
  const flag = false;

  if (flag) {
    res.json('register success');
  } else {
    next(new Error(REGISTER_ERROR));
  }
});

app.use((error, req, res, next) => {
  const status = 400;
  let message = '';

  switch (error.message) {
    case LOGIN_ERROR:
      message = 'login error control';
      break;
    case REGISTER_ERROR:
      message = 'register error control';
      break;
    default:
      message = 'not found';
      break;
  }

  res.status(status);
  res.json({
    errorCode: status,
    error: message
  });
});

app.listen(8000, () => {
  console.log('express error control');
});
