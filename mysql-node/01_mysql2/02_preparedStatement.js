const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'tinyRipple',
  user: 'root',
  password: 'mysqlmysql'
});

const statement = 'select * from node_test_database_users where user_name = ?;';

connection.execute(statement, ['caixinling'], (error, result, fields) => {
  console.log(result);
  connection.end();
});
