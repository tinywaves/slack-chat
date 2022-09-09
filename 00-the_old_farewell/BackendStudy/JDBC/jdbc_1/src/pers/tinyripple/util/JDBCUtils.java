package pers.tinyripple.util;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
 * JDBC连接工具类
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 11:45
 */
public class JDBCUtils {
    /**
     * 获取数据库的连接
     * @return 返回一个连接
     * @throws Exception 抛出异常
     */
    public static Connection getConnection() throws Exception {
        // 1. 读取配置文件中的配置信息
        InputStream resourceAsStream = ClassLoader.getSystemClassLoader().getResourceAsStream("jdbc.properties");
        Properties properties = new Properties();
        properties.load(resourceAsStream);
        String user = properties.getProperty("user");
        String password = properties.getProperty("password");
        String url = properties.getProperty("url");
        String driverClass = properties.getProperty("driverClass");

        // 2. 加载驱动
        Class.forName(driverClass);

        // 3. 获取连接并返回
        return DriverManager.getConnection(url, user, password);
    }

    /**
     * 关闭资源
     * @param connection 连接
     * @param preparedStatement PreparedStatement 实例
     */
    public static void closeResource(Connection connection, Statement preparedStatement) {
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

    /**
     * 关闭资源
     * @param connection 连接
     * @param preparedStatement PreparedStatement 实例
     * @param resultSet 结果集
     */
    public static void closeResource(Connection connection, Statement preparedStatement, ResultSet resultSet) {
        try {
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        try {
            if (preparedStatement != null) {
                preparedStatement.close();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        try {
            if (resultSet != null) {
                resultSet.close();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
