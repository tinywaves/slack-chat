package pers.tinyripple.statement;

import org.junit.Test;
import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.Scanner;

/**
 * 解决SQL诸如问题的测试
 * 除了解决 Statement 的拼串、sql 注入问题之外，PreparedStatement 还有以下好处
 * 1. PreparedStatement 操作 Blob 的数据，而 Statement 做不到。
 * 2. PreparedStatement 可以实现更高效的批量操作。
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 21:47
 */
public class PreparedStatementTest {
    /**
     * 获取一个记录的通用查询
     * @param aClass 对象类型，对应不同的表
     * @param sql SQL 语句
     * @param args 占位符
     * @param <T> 泛型
     * @return 返回一条记录
     */
    public <T> T getInstance(Class<T> aClass, String sql, Object ...args) {
        Connection connection = null;
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
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
        return null;
    }

    /**
     * 使用 Statement 的弊端：需要拼写 SQL 语句，并且存在 SQL 注入的问题
     */
    @Test
    public void testLogin() {
        Scanner scan = new Scanner(System.in);
        System.out.print("用户名：");
        String userName = scan.nextLine();
        System.out.print("密码：");
        String password = scan.nextLine();
        String sql = "select user, password from user_table where user = ? and password = ?";
        User user = getInstance(User.class, sql, userName, password);
        if (user != null) {
            System.out.println("登陆成功!");
        } else {
            System.out.println("用户名或密码错误！");
        }
    }
}
