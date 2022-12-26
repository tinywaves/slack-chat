package pers.tinyripple.connection;

import org.junit.Test;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

/**
 * Connection 测试类
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-20 22:44
 */
public class ConnectionTest {
    /**
     * 获取连接的方式 1
     * @throws SQLException 异常
     */
    @Test
    public void testConnection1() throws SQLException {
        // 获取 Driver 实现类对象
        Driver driver = new com.mysql.cj.jdbc.Driver();

        String url = "jdbc:mysql://localhost:3306/test";
        Properties info = new Properties();
        // 封装用户名和密码
        info.setProperty("user", "root");
        info.setProperty("password", "20010120");

        Connection connection = driver.connect(url, info);

        System.out.println(connection);
    }


    /**
     * 获取连接的方式 2
     * 通过反射获取驱动
     * @throws Exception 异常
     */
    @Test
    public void testConnection2() throws Exception {
        // 1. 获取 Driver 实现类对象：反射
        Class aClass = Class.forName("com.mysql.cj.jdbc.Driver");
        Driver driver = (Driver) aClass.newInstance();

        // 2. 提供要连接的数据库
        String url = "jdbc:mysql://localhost:3306/test";

        // 3. 提供用户名和密码
        Properties info = new Properties();
        // 封装用户名和密码
        info.setProperty("user", "root");
        info.setProperty("password", "20010120");

        // 4. 获取连接
        Connection connection = driver.connect(url, info);

        System.out.println(connection);
    }

    /**
     * 获取连接的方式 3
     * 使用 DriverManager 替换 Driver
     * @throws Exception 异常
     */
    @Test
    public void testConnection3() throws Exception {
        // 1. 获取 Driver 实现类对象
        Class aClass = Class.forName("com.mysql.cj.jdbc.Driver");
        Driver driver = (Driver) aClass.newInstance();

        // 2. 提供连接的基本信息
        String url = "jdbc:mysql://localhost:3306/test";
        String user = "root";
        String password = "20010120";

        // 3. 注册驱动
        DriverManager.registerDriver(driver);

        // 4. 获取连接
        Connection connection = DriverManager.getConnection(url, user, password);

        System.out.println(connection);
    }

    /**
     * 获取连接的方式 4
     * @throws Exception 异常
     */
    @Test
    public void testConnection4() throws Exception {
        // 1. 提供连接的基本信息
        String url = "jdbc:mysql://localhost:3306/test";
        String user = "root";
        String password = "20010120";

        // 2. 加载 Driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // 3. 获取连接
        Connection connection = DriverManager.getConnection(url, user, password);

        System.out.println(connection);
    }

    /**
     * 获取连接的方式 5
     * @throws Exception 异常
     */
    @Test
    public void getConnectionMysql() throws Exception {
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
        Connection connection = DriverManager.getConnection(url, user, password);

        System.out.println(connection);
    }
}