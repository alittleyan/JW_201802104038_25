package dao;

import domain.Department;
import domain.School;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public final class DepartmentDao {
	private static DepartmentDao departmentDao=new DepartmentDao();
	private DepartmentDao(){}

	public static DepartmentDao getInstance(){
		return departmentDao;
	}


	public Collection<Department> findAll()throws SQLException{
        Set<Department> departments = new HashSet<Department>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery("select * from department");
        //若结果集仍然有下一条记录，则执行循环体
        while (resultSet.next()){
            School school = SchoolDao.getInstance().find(resultSet.getInt("school_id"));
            //以当前记录中的id,description,no,remarks值为参数，创建Degree对象
            Department department = new Department(
                    resultSet.getInt("id"),
                    resultSet.getString("description"),
                    resultSet.getString("no"),
                    resultSet.getString("remarks"),
                    school);
            //向degrees集合中添加Degree对象
			System.out.println(department);
            departments.add(department);
        }
        //关闭资源
        JdbcHelper.close(resultSet,statement,connection);
        return departments;
	}

	public Department find(Integer id)throws SQLException{
        Department department = null;
        Connection connection = JdbcHelper.getConn();
        String deleteDepartmrnt_sql = "SELECT * FROM department WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteDepartmrnt_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Degree对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()){
            School school = SchoolDao.getInstance().find(resultSet.getInt("school_id"));
            department = new Department(
                    resultSet.getInt("id"),
                    resultSet.getString("description"),
                    resultSet.getString("no"),
                    resultSet.getString("remarks"),
                    school);
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return department;
	}

	public boolean update(Department department)throws SQLException{
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateDepartment_sql = " update department set description=?,no=?,remarks=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateDepartment_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,department.getDescription());
        preparedStatement.setString(2,department.getNo());
        preparedStatement.setString(3,department.getRemarks());
        preparedStatement.setInt(4,department.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
	}

	public boolean add(Department department)throws SQLException {
		//获取连接对象
		Connection connection= JdbcHelper.getConn();
		//创建sql语句
		String addDepartment_sql="Insert into department (description,no,remarks,school_id) values (?,?,?,?)";
		//在该连接上创建预编译语句对象
		PreparedStatement pstmt =connection.prepareStatement(addDepartment_sql);
		//为预编译参数赋值
		pstmt.setString(1,department.getDescription());
		pstmt.setString(2,department.getNo());
		pstmt.setString(3,department.getRemarks());
		pstmt.setInt(4,department.getSchool().getId());
		//执行预编译对象的excuteUpdate方法
		int affectedRowNum=pstmt.executeUpdate();
		//显示添加的记录的行数
		System.out.println("添加了"+affectedRowNum+"条记录");
		JdbcHelper.close(pstmt,connection);
		return true;
	}

	public boolean delete(Department department)throws SQLException{
		//获取连接对象
		Connection connection= JdbcHelper.getConn();
		//创建sql语句
		String addDegree_sql="Delete from department where id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement pstmt =connection.prepareStatement(addDegree_sql);
		//为预编译参数赋值
		pstmt.setInt(1,department.getId());
		//执行预编译对象的excuteUpdate方法
		int affectedRowNum=pstmt.executeUpdate();
		//显示删除的记录的行数
		System.out.println("删除了"+affectedRowNum+"条记录");
		JdbcHelper.close(pstmt,connection);
		return true;
	}
	public static void main(String[] args) throws SQLException {
		DepartmentDao.getInstance().findAll();
		System.out.println();
		//增
		School school = SchoolDao.getInstance().find(1);
		Department department = new Department(7,"信息","05","",school);
		System.out.println(DepartmentDao.getInstance().add(department)+"\n");
		//删
		System.out.println(
				DepartmentDao.getInstance().delete(DepartmentDao.getInstance().find(5))
						+"\n"
		);
		//改
		Department department1 = DepartmentDao.getInstance().find(1);
		System.out.println(department1);
		department1.setRemarks("good");
		DepartmentDao.getInstance().update(department1);
		Department department2 = DepartmentDao.getInstance().find(1);
		System.out.println( department2.getDescription());
		System.out.println(department2);
		System.out.println("HVAE UPDATED");

	}
}

