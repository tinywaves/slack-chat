package pers.tinyripple.blob;

import org.junit.Test;
import pers.tinyripple.bean.Customer;
import pers.tinyripple.util.JDBCUtils;

import java.io.*;
import java.sql.*;

/**
 * 使用 PreparedStatement 来操作 Blob 类型数据
 *
 * @author: zheng donghui  E-mail:zheng.dong.hui@foxmail.com
 * @date: 2021-07-21 22:51
 */
public class BlobTest {
    // 向 customers 表中插入 blob 数据
    @Test
    public void testInsert() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "insert into customers(name, email, birth, photo) values(?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setObject(1, "Test");
            preparedStatement.setObject(2, "Test@test.com");
            preparedStatement.setObject(3, "2021-07-21");
            FileInputStream is = new FileInputStream("image/test.jpg");
            preparedStatement.setBlob(4, is);
            preparedStatement.execute();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JDBCUtils.closeResource(connection, preparedStatement);
        }
    }

    // 从 customers 表中读取 blob 数据
    @Test
    public void testQuery() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        InputStream binaryStream = null;
        FileOutputStream fileOutputStream = null;
        try {
            connection = JDBCUtils.getConnection();
            String sql = "select id, name, email, birth, photo from customers where id = ?";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, 16);
            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                Date date = resultSet.getDate("birth");
                Customer customer = new Customer(id, name, email, date);
                System.out.println(customer);
                // 将 Blob 保存在本地
                Blob photo = resultSet.getBlob("photo");
                binaryStream = photo.getBinaryStream();
                fileOutputStream = new FileOutputStream("image/zhuyin.jpg");
                byte[] buffer = new byte[1024];
                int len;
                while ((len = binaryStream.read(buffer)) != -1) {
                    fileOutputStream.write(buffer, 0, len);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                assert binaryStream != null;
                binaryStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                assert fileOutputStream != null;
                fileOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            JDBCUtils.closeResource(connection, preparedStatement, resultSet);
        }
    }
}