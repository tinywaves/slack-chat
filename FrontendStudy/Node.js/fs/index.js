const fs = require('fs');

// 1. fs.stat 检测目标路径是一个文件还是目录
fs.stat('./package.json', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`是否是文件：${data.isFile()}`);
  console.log(`是否是目录：${data.isDirectory()}`);
})

// 2. fs.mkdir 创建文件夹
fs.mkdir('./testFolder', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件夹创建成功');
})

// 3. fs.writeFile 创建并写入文件，若文件已存在，则执行覆盖操作
fs.writeFile('./testFolder/testFile.txt', 'testFile', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件创建并且写入成功');
})

// 4. fs.appendFile 追加文件内容，若文件不存在则会创建文件
fs.appendFile('./testFolder/testFile.txt', 'testFile', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件追加成功');
})

// 5. fs.readFile 读取文件
fs.readFile('./testFolder/testFile.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`文件内容：${data}`);
})

// 6. fs.readdir 读取目录
fs.readdir('./testFolder', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`目录下有：${data}`);
})

// 7. fs.rename 重命名或者执行移动操作
fs.rename('./temp.txt', './testFolder/tempTestFile.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件移动、重命名成功');
})

// 8. fs.unlink 删除文件
fs.unlink('./testFolder/tempTestFile.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件删除成功');
})

// 9. fs.rmdir 删除目录，当目录中有文件时不能删除目录
fs.rmdir('./testFolder', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('目录删除成功');
})