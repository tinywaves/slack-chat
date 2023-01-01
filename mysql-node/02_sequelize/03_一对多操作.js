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

class Score extends Model { }
Score.init(
  {
    record_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Users,
        key: 'user_id'
      }
    },
    score_subject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'node_test_database_score',
    createdAt: false,
    updatedAt: false,
    sequelize
  }
);

// 联系两张表
Score.belongsTo(Users, { foreignKey: 'user_id' });

const queryScore = async () => {
  // 查询所有内容
  const result = await Score.findAll({
    include: {
      model: Users
    }
  });
  console.log(result);
};

queryScore();
