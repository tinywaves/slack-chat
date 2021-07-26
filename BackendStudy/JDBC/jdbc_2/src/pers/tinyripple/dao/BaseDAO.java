package pers.tinyripple.dao;

import pers.tinyripple.util.JDBCUtils;

import java.lang.reflect.Field;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * DAO
 * 封装了对数据表的通用操作
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-24 19:32
 */
public abstract class BaseDAO {
    /**
     * 通用的增删改操作，存在事务
     * @param connection 传入连接
     * @param sql SQL 语句
     * @param args 占位符
     */
    public void update(Connection connection, String sql, Object ...args) {
        PreparedStatement preparedStatement = null;
        try {
            // 1. 预编译 SQL 语句，返回 PreparedStatement 实例
            preparedStatement = connection.prepareStatement(sql);
            // 2. 填充占位符
            for (int i = 0; i < args.length; i++) {
                preparedStatement.setObject(i + 1, args[i]);
            }
            // 3. 执行
            preparedStatement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 4. 关闭资源
            JDBCUtils.closeResource(null, preparedStatement);
        }
    }

    /**
     * 获取一个记录的通用查询，存在事务处理
     * @param connection 传入连接
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

    /**
     * 获取多个记录的通用查询
     * @param connection 传入连接
     * @param aClass 对象类型，对应不同的表
     * @param sql SQL 语句
     * @param args 占位符
     * @param <T> 泛型
     * @return 返回一条记录
     */
    public <T> List<T> getForList(Connection connection, Class<T> aClass, String sql, Object ...args) {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
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
            JDBCUtils.closeResource(null, preparedStatement, resultSet);
        }
        return null;
    }

    /**
     * 用于查询一些特殊值的通用方法，组函数等
     * @param connection 传入连接
     * @param sql SQL 语句
     * @param args 占位符
     * @param <E> 泛型
     * @return 返回一条记录
     */
    public <E> E getValue(Connection connection, String sql, Object ...args) {
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < args.length; i++) {
                preparedStatement.setObject(i + 1, args[i]);
            }
            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                return (E) resultSet.getObject(1);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.closeResource(null, preparedStatement, resultSet);
        }
        return null;
    }
}
