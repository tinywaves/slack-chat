package pers.tinyripple.connection.util;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.apache.commons.dbcp.BasicDataSourceFactory;
import org.apache.commons.dbutils.DbUtils;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * 使用数据库连接池得到连接
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-26 16:45
 */
public class JDBCUtils {
    // C3P0
    private static final ComboPooledDataSource cpds = new ComboPooledDataSource("C3P0");
    // DBCP
    private static DataSource dataSourceDBCP;
    static {
        try {
            Properties properties = new Properties();
            FileInputStream fileInputStream = new FileInputStream("src/dbcp.properties");
            properties.load(fileInputStream);
            dataSourceDBCP = BasicDataSourceFactory.createDataSource(properties);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // Druid
    private static DataSource dataSourceDruid;
    static {
        try {
            Properties properties = new Properties();
            InputStream resourceAsStream = ClassLoader.getSystemClassLoader().getResourceAsStream("druid.properties");
            properties.load(resourceAsStream);
            dataSourceDruid = DruidDataSourceFactory.createDataSource(properties);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 使用C3P0实现utils
     * @return 返回连接
     * @throws SQLException 异常
     */
    public static Connection getConnectionC3P0() throws SQLException {
        return cpds.getConnection();
    }

    /**
     * 使用DBCP实现utils
     * @return 返回连接
     * @throws SQLException 异常
     */
    public static Connection getConnectionDBCP() throws SQLException {
        return dataSourceDBCP.getConnection();
    }

    /**
     * 使用Druid实现utils
     * @return 返回连接
     * @throws SQLException 异常
     */
    public static Connection getConnectionDruid() throws SQLException {
        return dataSourceDruid.getConnection();
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

    /**
     * 使用 DBUtils 关闭资源
     * @param connection 连接
     * @param preparedStatement PreparedStatement 实例
     * @param resultSet 结果集
     */
    public static void closeResourceDBUtils(Connection connection, Statement preparedStatement, ResultSet resultSet) {
//        try {
//            DbUtils.close(connection);
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//        try {
//            DbUtils.close(preparedStatement);
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
//        try {
//            DbUtils.close(resultSet);
//        } catch (SQLException throwables) {
//            throwables.printStackTrace();
//        }
        DbUtils.closeQuietly(connection);
        DbUtils.closeQuietly(preparedStatement);
        DbUtils.closeQuietly(resultSet);
    }
}
