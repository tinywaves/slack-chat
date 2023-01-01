const mysql = require('mysql2');

// 1. 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'tinyRipple',
  user: 'root',
  password: 'mysqlmysql'
});

// 2. 执行SQL语句
const statement = 'select * from node_test_database_users;';

connection.query(statement, (error, result, fields) => {
  console.log(result);
  connection.end();
});
