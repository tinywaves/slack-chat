package pers.tinyripple.connection;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.mchange.v2.c3p0.DataSources;
import org.junit.Test;

import java.beans.PropertyVetoException;
import java.sql.Connection;
import java.sql.SQLException;

/**
 * C3P0数据库连接池的使用
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-26 16:09
 */
public class C3P0Test {
    // 方式1
    @Test
    public void getConnection1() throws PropertyVetoException, SQLException {
        // 获取 C3P0 数据库连接池
        ComboPooledDataSource cpds = new ComboPooledDataSource();
        cpds.setDriverClass("com.mysql.cj.jdbc.Driver");
        cpds.setJdbcUrl("jdbc:mysql://localhost:3306/test");
        cpds.setUser("root");
        cpds.setPassword("20010120");

        // 设置初始数据库连接池的连接数
        cpds.setInitialPoolSize(10);

        Connection connection = cpds.getConnection();
        System.out.println(connection);

        // 销毁连接池
        DataSources.destroy( cpds );
    }

    // 方式2：使用配置文件
    @Test
    public void getConnection2() throws SQLException {
        ComboPooledDataSource cpds = new ComboPooledDataSource("C3P0");
        Connection connection = cpds.getConnection();
        System.out.println(connection);
    }
}
