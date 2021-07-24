package pers.tinyripple.transaction;

import org.junit.Test;
import pers.tinyripple.util.JDBCUtils;

import java.sql.Connection;

/**
 * 连接测试
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-24 14:49
 */
public class ConnectionTest {
    @Test
    public void testConnection() throws Exception {
        Connection connection = JDBCUtils.getConnection();
        System.out.println(connection);
    }
}
