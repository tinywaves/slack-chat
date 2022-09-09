package pers.tinyripple.dao;

import pers.tinyripple.bean.Customer;

import java.sql.Connection;
import java.sql.Date;
import java.util.List;

/**
 * 规范针对 Customers 表的常用操作
 */
public interface CustomersDAO {
    /**
     * 将 Customer 对象添加到数据库中
     * @param connection 连接
     * @param customer 数据对象
     */
    void insert(Connection connection, Customer customer);

    /**
     * 根据 ID 删除记录
     * @param connection　连接
     * @param id　ID
     */
    void deleteById(Connection connection, int id);

    /**
     * 根据 customer 对象更改一条记录
     * @param connection 连接
     * @param customer 提供更改为的对象
     */
    void updateById(Connection connection, Customer customer);

    /**
     * 根据指定 ID 查询 customer
     * @param connection 连接
     * @param id ID
     * @return 返回一条记录
     */
    Customer getCustomerById(Connection connection, int id);

    /**
     * 获取所有连接
     * @param connection 连接
     * @return 返回所有记录
     */
    List<Customer> getAll(Connection connection);

    /**
     * 获取记录数
     * @param connection 连接
     * @return 返回记录数
     */
    Long getCount(Connection connection);

    /**
     * 获取生日最大的日期
     * @param connection 连接
     * @return 返回符合要求的日期
     */
    Date getMaxBirth(Connection connection);
}
