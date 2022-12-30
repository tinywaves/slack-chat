const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(['tinyRipple', 'zhengdonghui']);
});

router.post('/', (req, res, next) => {
  res.json('create success');
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}-info`);
});

module.exports = router;
