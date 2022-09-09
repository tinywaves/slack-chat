package pers.tinyripple.preparedstatement;

import org.junit.Test;
import pers.tinyripple.bean.Customer;
import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.*;

/**
 * 针对customers表的查询操作
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 12:41
 */
public class CustomersForQuery {
    @Test
    public void testQuery() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "select id, name, email, birth from customers where id = ?";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setObject(1, 19);

            // 执行并返回结果集
            resultSet = preparedStatement.executeQuery();

            // 处理结果集
            // 判断结果集下一条是否有数据，若有数据则返回 true 并且指针下移
            if (resultSet.next()) {
                // 获取当前数据的各个字段值
                int id = resultSet.getInt(1);
                String name = resultSet.getString(2);
                String email = resultSet.getString(3);
                Date birth = resultSet.getDate(4);
                // 将数据封装为一个对象
                Customer customer = new Customer(id, name, email, birth);
                System.out.println(customer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 关闭资源
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
    }

    /**
     * 针对 customers 表的通用查询
     * @param sql SQL 语句
     * @param args 占位符
     * @return 返回查到的结果
     */
    public Customer queryForCustomers(String sql, Object ...args) {
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
                Customer customer = new Customer();
                for (int i = 0; i < columnCount; i++) {
                    // 获取列值
                    Object columnValue = resultSet.getObject(i + 1);

                    // 获取 columnValue 列名
                    String columnName = metaData.getColumnName(i + 1);

                    // 给 Customer 对象的 columnName 属性赋值
                    Field declaredField = Customer.class.getDeclaredField(columnName);
                    declaredField.setAccessible(true);
                    declaredField.set(customer, columnValue);
                }
                return customer;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
        return null;
    }

    @Test
    public void testQueryForCustomers() {
        String sql = "select id, name, email, birth from customers where id = ?";
        Customer customer = queryForCustomers(sql, 18);
        System.out.println(customer);
    }
}