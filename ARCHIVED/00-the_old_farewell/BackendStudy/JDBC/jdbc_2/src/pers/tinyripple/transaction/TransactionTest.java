package pers.tinyripple.transaction;

import org.junit.Test;
import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.*;

/**
 * 事务
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-24 14:53
 */
public class TransactionTest {
    /**
     * 通用的增删改操作，不存在事务
     * @param sql SQL 语句
     * @param args 占位符
     * @return 返回操作记录数
     */
    public int update(String sql, Object ...args) {
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
            return preparedStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 5. 关闭资源
            JDBCUtils.closeResource(connection, preparedStatement);
        }
        return 0;
    }

    @Test
    public void test1() {
        String sql1 = "update user_table set balance = balance - 100 where user = ?";
        System.out.println(update(sql1, "AA"));
        // 模拟网络异常
        System.out.println(10 / 0);
        String sql2 = "update user_table set balance = balance + 100 where user = ?";
        System.out.println(update(sql2, "BB"));
        System.out.println("转账成功");
    }

    /**
     * 通用的增删改操作，存在事务
     * @param connection 传入连接
     * @param sql SQL 语句
     * @param args 占位符
     * @return 返回操作的数据记录数
     */
    public int updateForTransaction(Connection connection, String sql, Object ...args) {
        PreparedStatement preparedStatement = null;
        try {
            // 1. 预编译 SQL 语句，返回 PreparedStatement 实例
            preparedStatement = connection.prepareStatement(sql);
            // 2. 填充占位符
            for (int i = 0; i < args.length; i++) {
                preparedStatement.setObject(i + 1, args[i]);
            }
            // 3. 执行
            return preparedStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 4. 关闭资源
            JDBCUtils.closeResource(null, preparedStatement);
        }
        return 0;
    }

    @Test
    public void test2() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            // 取消数据自动提交
            connection.setAutoCommit(false);

            String sql1 = "update user_table set balance = balance - 100 where user = ?";
            System.out.println(updateForTransaction(connection, sql1, "AA"));

            // 模拟网络异常
            System.out.println(10 / 0);

            String sql2 = "update user_table set balance = balance + 100 where user = ?";
            System.out.println(updateForTransaction(connection, sql2, "BB"));

            System.out.println("转账成功");
            // 数据提交
            connection.commit();
        } catch (Exception e) {
            e.printStackTrace();
            // 回滚数据
            try {
                assert connection != null;
                connection.rollback();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        } finally {
            try {
                assert connection != null;
                connection.setAutoCommit(true);
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
            JDBCUtils.closeResource(connection, null);
        }
    }

    /**
     * 获取一个记录的通用查询，存在事务处理
     * @param aClass 对象类型，对应不同的表
     * @param sql SQL 语句
     * @param args 占位符
     * @param <T> 泛型
     * @return 返回一条记录
     */
    public <T> T getInstance(Connection connection, Class<T> aClass, String sql, Object ...args) {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = JDBCUtils.getConnection();
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < args.length; i++) {
                preparedStatement.setObject(i + 1, args[i]);
            }
            // 执行并返回结果集
            resultSet = preparedStatement.executeQuery();
            // 结果集元数据
            ResultSetMetaData metaData = resultSet.getMetaData();
            // 获取列数
            int columnCount = metaData.getColumnCount();
            // 处理结果集
            // 判断结果集下一条是否有数据，若有数据则返回 true 并且指针下移
            if (resultSet.next()) {
                // 实例化对象
                T t = aClass.newInstance();
                for (int i = 0; i < columnCount; i++) {
                    // 获取列值
                    Object columnValue = resultSet.getObject(i + 1);

                    // 获取 columnValue 列名
                    String columnLabel = metaData.getColumnLabel(i + 1);

                    // 给 t 对象的 columnName 属性赋值
                    Field declaredField = aClass.getDeclaredField(columnLabel);
                    declaredField.setAccessible(true);
                    declaredField.set(t, columnValue);
                }
                return t;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(null, preparedStatement, resultSet);
        }
        return null;
    }

    @Test
    public void testSelect() throws Exception {
        Connection connection = JDBCUtils.getConnection();
        // 设置数据库隔离级别
        connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
        connection.setAutoCommit(false);
        String sql = "select user, password, balance from user_table where user = ?";
        User user = getInstance(connection, User.class, sql, "CC");
        System.out.println(user);
    }

    @Test
    public void testUpdate() throws Exception {
        Connection connection = JDBCUtils.getConnection();
        connection.setAutoCommit(false);
        String sql = "update user_table set balance = ? where user = ?";
        updateForTransaction(connection, sql, 7000, "CC");
        Thread.sleep(15000);
        System.out.println("修改结束");
    }
}