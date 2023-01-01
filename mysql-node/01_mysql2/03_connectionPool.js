const mysql = require('mysql2');

// 1. 创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'tinyRipple',
  user: 'root',
  password: 'mysqlmysql',
  connectionLimit: 10
});

// 2. 使用连接池
const statement = 'select * from node_test_database_users where user_name = ?;';

// callback way
// connections.execute(statement, ['caixinling'], (error, result, fields) => {
//   console.log(result);
// });

// promise way
connections.promise().execute(statement, ['caixinling'])
  .then(([result, fields]) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
