package pers.tinyripple.preparedstatement;

import org.junit.Test;
import pers.tinyripple.bean.Customer;
import pers.tinyripple.bean.Order;
import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.List;

/**
 * 针对不同表的通用查询
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 21:11
 */
public class PreparedStatementQuery {
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

    @Test
    public void testQuery1() {
        String sql1 = "select id, name, email, birth from customers where id = ?";
        Customer customer = getInstance(Customer.class, sql1, 5);
        System.out.println(customer);

        String sql2 = "select order_id orderId, order_name orderName, order_date orderDate from `order` where order_id = ?";
        Order order = getInstance(Order.class, sql2, 1);
        System.out.println(order);
    }

    /**
     * 获取多个记录的通用查询
     * @param aClass 对象类型，对应不同的表
     * @param sql SQL 语句
     * @param args 占位符
     * @param <T> 泛型
     * @return 返回一条记录
     */
    public <T> List<T> getForList(Class<T> aClass, String sql, Object ...args) {
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
            // 创建集合对象
            ArrayList<T> list = new ArrayList<>();
            while (resultSet.next()) {
                // 实例化一个对象，对应一条记录
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
                // 将对象加入到集合中
                list.add(t);
            }
            return list;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
        return null;
    }

    @Test
    public void testQuery2() {
        String sql1 = "select id, name, email, birth from customers where id > ?";
        List<Customer> customersList = getForList(Customer.class, sql1, 17);
        customersList.forEach(System.out::println);

        String sql2 = "select order_id orderId, order_name orderName, order_date orderDate from `order`";
        List<Order> orderList = getForList(Order.class, sql2);
        orderList.forEach(System.out::println);
    }
}