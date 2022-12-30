const express = require('express');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'foo.png');
  }
});
const upload = multer({
  // dest: './uploads'
  storage
});

app.post('/uploads', upload.single('file'), (req, res, next) => {
  console.log(req.file);
  res.end('upload success');
});

app.listen(8000, () => {
  console.log('upload file form-data server');
});
