package pers.tinyripple.dbutils;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;
import org.apache.commons.dbutils.handlers.*;
import org.junit.Test;
import pers.tinyripple.bean.Customer;
import pers.tinyripple.connection.util.JDBCUtils;

import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * DBUtils QueryRunner的使用
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-26 17:43
 */
public class QueryRunnerTest {
    // 插入测试
    @Test
    public void testInsert() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "insert into customers(name, email, birth) values(?, ?, ?)";
            int insertCount = runner.update(connectionDruid, sql, "DBUtils", "DBUtils@DBUtils.com", "2021-07-26");
            System.out.println(insertCount);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询测试——一条记录
    @Test
    public void testQuery1() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select id, name, email, birth from customers where id = ?";
            BeanHandler<Customer> beanHandler = new BeanHandler<>(Customer.class);
            Customer customer = runner.query(connectionDruid, sql, beanHandler, 22);
            System.out.println(customer);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询测试——多条记录，封装为 List
    @Test
    public void testQuery2() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select id, name, email, birth from customers where id < ?";
            BeanListHandler<Customer> beanListHandler = new BeanListHandler<>(Customer.class);
            List<Customer> customers = runner.query(connectionDruid, sql, beanListHandler, 22);
            customers.forEach(System.out::println);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询测试——一条记录，封装为 Map
    @Test
    public void testQuery3() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select id, name, email, birth from customers where id = ?";
            MapHandler mapHandler = new MapHandler();
            Map<String, Object> query = runner.query(connectionDruid, sql, mapHandler, 22);
            System.out.println(query);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询测试——多条记录，封装为 Map
    @Test
    public void testQuery4() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select id, name, email, birth from customers where id < ?";
            MapListHandler mapListHandler = new MapListHandler();
            List<Map<String, Object>> query = runner.query(connectionDruid, sql, mapListHandler, 22);
            query.forEach(System.out::println);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询记录数
    @Test
    public void testQuery5() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select count(*) from customers";
            ScalarHandler scalarHandler = new ScalarHandler();
            Long count = (Long) runner.query(connectionDruid, sql, scalarHandler);
            System.out.println(count);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 查询最大值
    @Test
    public void testQuery6() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select max(birth) from customers";
            ScalarHandler scalarHandler = new ScalarHandler();
            Date date = (Date) runner.query(connectionDruid, sql, scalarHandler);
            System.out.println(date);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }

    // 自定义 ResultHandler
    @Test
    public void testQuery7() {
        Connection connectionDruid = null;
        try {
            QueryRunner runner = new QueryRunner();
            connectionDruid = JDBCUtils.getConnectionDruid();
            String sql = "select id, name, email, birth from customers where id = ?";
            ResultSetHandler<Customer> resultSetHandler = resultSet -> {
                if (resultSet.next()) {
                    int id = resultSet.getInt("id");
                    String name = resultSet.getString("name");
                    String email = resultSet.getString("email");
                    Date birth = resultSet.getDate("birth");
                    return new Customer(id, name, email, birth);
                }
                return null;
            };
            Customer customer = runner.query(connectionDruid, sql, resultSetHandler, 22);
            System.out.println(customer);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connectionDruid, null);
        }
    }
}
