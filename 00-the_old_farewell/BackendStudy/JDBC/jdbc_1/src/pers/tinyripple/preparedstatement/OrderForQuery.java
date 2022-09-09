package pers.tinyripple.preparedstatement;

import org.junit.Test;
import pers.tinyripple.bean.Order;
import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.*;

/**
 * 针对order表的查询操作
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 18:52
 */
public class OrderForQuery {
    @Test
    public void testQuery() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "select order_id, order_name, order_date from `order` where order_id = ?";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setObject(1, 1);
            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                int id = (int) resultSet.getObject(1);
                String name = (String) resultSet.getObject(2);
                Date date = (Date) resultSet.getObject(3);
                Order order = new Order(id, name, date);
                System.out.println(order);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
    }

    /**
     * 针对 order 表的通用查询
     * 对于表属性名和对象属性名不一致的情况下，使用 getColumnLabel 可解决此问题
     * @param sql SQL 语句
     * @param args 占位符
     * @return 返回查到的结果
     */
    public Order queryForOrder(String sql, Object ...args) {
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
                Order order = new Order();
                for (int i = 0; i < columnCount; i++) {
                    // 获取列值
                    Object columnValue = resultSet.getObject(i + 1);

                    // 获取 columnValue 的列名 getColumnName
                    // String columnName = metaData.getColumnName(i + 1);
                    // 获取 columnValue 的别名 getColumnLabel
                    String columnLabel = metaData.getColumnLabel(i + 1);

                    // 给 Order 对象的 columnName 属性赋值
                    Field declaredField = Order.class.getDeclaredField(columnLabel);
                    declaredField.setAccessible(true);
                    declaredField.set(order, columnValue);
                }
                return order;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
        return null;
    }

    @Test
    public void testQueryForOrder() {
        String sql = "select order_id orderId, order_name orderName, order_date orderDate from `order` where order_id = ?";
        Order order = queryForOrder(sql, 2);
        System.out.println(order);
    }
}