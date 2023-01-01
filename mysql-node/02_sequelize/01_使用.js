const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tinyRipple', 'root', 'mysqlmysql', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('error');
  });
