package pers.tinyripple.connection;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.commons.dbcp.BasicDataSourceFactory;
import org.junit.Test;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

/**
 * DBCP数据库连接池的使用
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-26 16:55
 */
public class DBCPTest {
    // 方式1
    @Test
    public void testGetConnection1() throws SQLException {
        // 创建 DBCP 数据库连接池
        BasicDataSource dataSource = new BasicDataSource();

        // 设置基本信息
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/test");
        dataSource.setUsername("root");
        dataSource.setPassword("20010120");

        dataSource.setInitialSize(10);
        dataSource.setMaxActive(10);

        Connection connection = dataSource.getConnection();
        System.out.println(connection);
    }

    // 方式2：使用配置文件
    @Test
    public void testGetConnection2() throws Exception {
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream("src/dbcp.properties");
        properties.load(fileInputStream);
        DataSource dataSource = BasicDataSourceFactory.createDataSource(properties);
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
    }
}
