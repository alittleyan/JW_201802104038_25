package dao;


import domain.School;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public final class SchoolDao {
    private static SchoolDao schoolDao =
            new SchoolDao();
    public SchoolDao(){}
    public static SchoolDao getInstance(){
        return schoolDao;
    }
    private static Collection<School> schools =new TreeSet<School>();

    public Collection<School> findAll() throws SQLException {
        Set<School> schools = new HashSet<School>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("select * from school");
        //若结果集仍然有下一条记录，则执行循环体
        while (resultSet.next()){
            //以当前记录中的id,description,no,remarks值为参数，创建Degree对象
            School school = new School(
                    resultSet.getInt("id"),
                    resultSet.getString("description"),
                    resultSet.getString("no"),
                    resultSet.getString("remarks"));
            //向degrees集合中添加Degree对象
            System.out.println(school);
            schools.add(school);
        }
        //关闭资源
        JdbcHelper.close(resultSet,statement,connection);
        return schools;
    }

    public School find(Integer id) throws SQLException{
        School school = null;
        Connection connection = JdbcHelper.getConn();
        String deleteSchool_sql = "SELECT * FROM school WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteSchool_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Degree对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()){
            school = new School(
                    resultSet.getInt("id"),
                    resultSet.getString("description"),
                    resultSet.getString("no"),
                    resultSet.getString("remarks"));
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return school;
    }

    public boolean add(School school) throws SQLException,ClassNotFoundException{
        Connection connection = JdbcHelper.getConn();
        String addProfTitle_sql = "INSERT INTO school(description,no,remarks) VALUES"+" (?,?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(addProfTitle_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,school.getDescription());
        preparedStatement.setString(2,school.getNo());
        preparedStatement.setString(3,school.getRemarks());
        //执行预编译语句，获取添加记录行数并赋值给affectedRowNum
        int affectedRowNum=preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRowNum>0;
    }


    //delete方法，根据degree的id值，删除数据库中对应的degree对象
    public boolean delete(int id) throws SQLException{
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteProfTitle_sql = "DELETE FROM school WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteProfTitle_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句，获取删除记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }

    public boolean update(School school) throws SQLException{
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateDegree_sql = " update school set description=?,no=?,remarks=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateDegree_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,school.getDescription());
        preparedStatement.setString(2,school.getNo());
        preparedStatement.setString(3,school.getRemarks());
        preparedStatement.setInt(4,school.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }

    //创建main方法，查询数据库中的对象，并输出
    public static void main(String[] args) throws ClassNotFoundException,SQLException{
        SchoolDao.getInstance().findAll();
        System.out.println();
        //增
        School school = new School(7,"环境","08","");
        SchoolDao.getInstance().add(school);
        SchoolDao.getInstance().findAll();
        System.out.println();
        //删
        SchoolDao.getInstance().delete(7);
        SchoolDao.getInstance().findAll();
        System.out.println();
        //改
        School school1 = SchoolDao.getInstance().find(1);
        System.out.println(school1);
        school1.setDescription("管理");
        SchoolDao.getInstance().update(school1);
        School school2 = SchoolDao.getInstance().find(1);
        System.out.println(school2.getDescription());

    }
}

