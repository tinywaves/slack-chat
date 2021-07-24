package pers.tinyripple.blob;

import org.junit.Test;
import pers.tinyripple.util.JDBCUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;

/**
 * 使用 PreparedStatement 实现批量插入
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-24 14:07
 */
public class InsertTest {
    // 方式1：使用 Statement
    // 方式2：使用 PreparedStatement 替换 Statement
    @Test
    public void testInsert2() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "insert into goods(name) values(?)";
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < 20000; i++) {
                preparedStatement.setObject(1, "name_" + (i + 1));
                preparedStatement.execute();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }

    // 方式3：addBatch()、executeBatch()、clearBatch()
    @Test
    public void testInsert3() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "insert into goods(name) values(?)";
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < 20000; i++) {
                preparedStatement.setObject(1, "name_" + (i + 1));

                // 积攒 SQL 语句
                preparedStatement.addBatch();

                if (i % 500 == 0) {
                    // 执行 SQL 语句
                    preparedStatement.executeBatch();

                    // 清空 SQL 语句
                    preparedStatement.clearBatch();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }

    // 方式4：设置连接不允许自动提交数据
    @Test
    public void testInsert4() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = JDBCUtils.getConnection();

            // 设置不允许自动提交数据
            connection.setAutoCommit(false);

            String sql = "insert into goods(name) values(?)";
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < 20000; i++) {
                preparedStatement.setObject(1, "name_" + (i + 1));
                // 积攒 SQL 语句
                preparedStatement.addBatch();
                if (i % 500 == 0) {
                    // 执行 SQL 语句
                    preparedStatement.executeBatch();
                    // 清空 SQL 语句
                    preparedStatement.clearBatch();
                }
            }

            // 提交数据
            connection.commit();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }
}