package pers.tinyripple.dao.junit;

import pers.tinyripple.bean.Customer;
import pers.tinyripple.dao.CustomersDAOImpl;
import pers.tinyripple.util.JDBCUtils;

import java.sql.Connection;
import java.sql.Date;
import java.util.List;

class CustomersDAOImplTest {
    private CustomersDAOImpl customersDAO = new CustomersDAOImpl();

    @org.junit.jupiter.api.Test
    void insert() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            Customer customer = new Customer(1, "DAOTest", "DAOTest@DAOTest.com", new Date(43534646435L));
            customersDAO.insert(connection, customer);
            System.out.println("添加成功");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void deleteById() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            customersDAO.deleteById(connection, 13);
            System.out.println("删除成功");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void updateById() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            Customer customer = new Customer(18, "贝多芬", "beidf@126.com", new Date(453465656L));
            customersDAO.updateById(connection, customer);
            System.out.println("修改成功");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void getCustomerById() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            Customer customer = customersDAO.getCustomerById(connection, 19);
            System.out.println(customer);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void getAll() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            List<Customer> list = customersDAO.getAll(connection);
            list.forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void getCount() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            Long count = customersDAO.getCount(connection);
            System.out.println(count);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    @org.junit.jupiter.api.Test
    void getMaxBirth() {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            Date maxBirth = customersDAO.getMaxBirth(connection);
            System.out.println(maxBirth);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, null);
        }
    }

    public CustomersDAOImpl getCustomersDAO() {
        return customersDAO;
    }

    public void setCustomersDAO(CustomersDAOImpl customersDAO) {
        this.customersDAO = customersDAO;
    }
}