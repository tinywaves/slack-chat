const { Sequelize, Model, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize('tinyRipple', 'root', 'mysqlmysql', {
  host: 'localhost',
  dialect: 'mysql'
});

class Users extends Model { }

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id_number: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'node_test_database_users',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
);

const queryUsers = async () => {
  // 查询所有内容
  const result1 = await Users.findAll();

  // 查询筛选内容
  const result2 = await Users.findAll({
    where: {
      user_name: {
        [Op.eq]: 'caixinling'
      }
    }
  });
  console.log(result2);
};

const insertUsers = async () => {
  await Users.create({
    user_id: 5,
    user_name: 'sequelize-name',
    user_id_number: '000000000000'
  });
};

const updateUsers = async () => {
  await Users.update(
    {
      user_id_number: '100000000000'
    },
    {
      where: {
        user_name: 'caixinling'
      }
    }
  );
};

// queryUsers();
// insertUsers();
updateUsers();
