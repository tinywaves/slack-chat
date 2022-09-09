package pers.tinyripple.preparedstatement;

import org.junit.Test;
import pers.tinyripple.connection.ConnectionTest;
import pers.tinyripple.util.JDBCUtils;

import java.io.InputStream;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Properties;

/**
 * PreparedStatement 的使用
 * 增删改操作
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 11:21
 */
public class PreparedStatementUpdateTest {
    // 1. 向 customers 表中添加一条记录
    @Test
    public void testInsert() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            // 1. 读取配置文件中的配置信息
            InputStream resourceAsStream = ConnectionTest.class.getClassLoader().getResourceAsStream("jdbc.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            String user = properties.getProperty("user");
            String password = properties.getProperty("password");
            String url = properties.getProperty("url");
            String driverClass = properties.getProperty("driverClass");

            // 2. 加载驱动
            Class.forName(driverClass);

            // 3. 获取连接
            connection = DriverManager.getConnection(url, user, password);

            // 4. 预编译 SQL 语句，返回 PreparedStatement 实例
            String sql = "insert into customers(name, email, birth) values(?, ?, ?)";
            preparedStatement = connection.prepareStatement(sql);

            // 5. 填充占位符
            preparedStatement.setString(1, "ZDH");
            preparedStatement.setString(2, "ZDH@zdh.com");
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date date = simpleDateFormat.parse("2001-01-20");
            preparedStatement.setDate(3, new Date(date.getTime()));

            // 6. 执行 SQL 语句
            preparedStatement.execute();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 7. 资源的关闭
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }

    // 2. 更改一条记录
    @Test
    public void testUpdate() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            // 1. 获取数据库连接
            connection = JDBCUtils.getConnection();

            // 2. 预编译 SQL 语句，返回 PreparedStatement 实例
            String sql = "update customers set name = ? where id = ?";
            preparedStatement = connection.prepareStatement(sql);

            // 3. 填充占位符
            preparedStatement.setObject(1, "BDF");
            preparedStatement.setObject(2, 18);

            // 4. 执行
            preparedStatement.execute();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 5. 关闭资源
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }

    /**
     * 通用的增删改操作
     * @param sql SQL 语句
     * @param args 占位符
     */
    public void update(String sql, Object ...args) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            // 1. 获取数据库连接
            connection = JDBCUtils.getConnection();

            // 2. 预编译 SQL 语句，返回 PreparedStatement 实例
            preparedStatement = connection.prepareStatement(sql);

            // 3. 填充占位符
            for (int i = 0; i < args.length; i++) {
                preparedStatement.setObject(i + 1, args[i]);
            }

            // 4. 执行
            preparedStatement.execute();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 5. 关闭资源
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }

    @Test
    public void testGeneralUpdate() {
        String sql = "delete from customers where id = ?";
        update(sql, 3);
    }
}