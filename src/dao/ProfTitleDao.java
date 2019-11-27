package dao;

import domain.ProfTitle;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public final class ProfTitleDao {
	private static ProfTitleDao profTitleDao=new ProfTitleDao();
	private ProfTitleDao(){}
	public static ProfTitleDao getInstance(){
		return profTitleDao;
	}
	private static Collection<ProfTitle> profTitles;
	public Collection<ProfTitle> findAll()throws SQLException{
		Set<ProfTitle> profTitles = new HashSet<ProfTitle>();
		//获得连接对象
		Connection connection = JdbcHelper.getConn();
		Statement statement = connection.createStatement();
		ResultSet resultSet = statement.executeQuery("select * from profTitle");
		//若结果集仍然有下一条记录，则执行循环体
		while (resultSet.next()){
			//以当前记录中的id,description,no,remarks值为参数，创建Degree对象
			ProfTitle profTitle = new ProfTitle(
					resultSet.getInt("id"),
					resultSet.getString("description"),
					resultSet.getString("no"),
					resultSet.getString("remarks"));
			System.out.println(profTitle);
			//向degrees集合中添加Degree对象
			profTitles.add(profTitle);
		}
		//关闭资源
		JdbcHelper.close(resultSet,statement,connection);
		return profTitles;
	}

	public ProfTitle find(Integer id) throws SQLException{
		ProfTitle profTitle = null;
		Connection connection = JdbcHelper.getConn();
		String deleteProfTitle_sql = "SELECT * FROM degree WHERE id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(deleteProfTitle_sql);
		//为预编译参数赋值
		preparedStatement.setInt(1,id);
		ResultSet resultSet = preparedStatement.executeQuery();
		//由于id不能取重复值，故结果集中最多有一条记录
		//若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Degree对象
		//若结果集中没有记录，则本方法返回null
		if (resultSet.next()){
			profTitle = new ProfTitle(
					resultSet.getInt("id"),
					resultSet.getString("description"),
					resultSet.getString("no"),
					resultSet.getString("remarks"));
		}
		//关闭资源
		JdbcHelper.close(resultSet,preparedStatement,connection);
		return profTitle;
	}

	public boolean add(ProfTitle profTitle) throws SQLException,ClassNotFoundException{
		Connection connection = JdbcHelper.getConn();
		String addProfTitle_sql = "INSERT INTO profTitle (description,no,remarks) VALUES"+" (?,?,?)";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(addProfTitle_sql);
		//为预编译参数赋值
		preparedStatement.setString(1,profTitle.getDescription());
		preparedStatement.setString(2,profTitle.getNo());
		preparedStatement.setString(3,profTitle.getRemarks());
		//执行预编译语句，获取添加记录行数并赋值给affectedRowNum
		int affectedRowNum=preparedStatement.executeUpdate();
		//关闭资源
		JdbcHelper.close(preparedStatement,connection);
		return affectedRowNum>0;
	}


	//delete方法，根据degree的id值，删除数据库中对应的degree对象
	public boolean delete(int id) throws ClassNotFoundException,SQLException{
		Connection connection = JdbcHelper.getConn();
		//写sql语句
		String deleteProfTitle_sql = "DELETE FROM profTitle WHERE id=?";
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

	public boolean update(ProfTitle profTitle) throws SQLException{
		Connection connection = JdbcHelper.getConn();
		//写sql语句
		String updateDegree_sql = " update profTitle set description=?,no=?,remarks=? where id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(updateDegree_sql);
		//为预编译参数赋值
		preparedStatement.setString(1,profTitle.getDescription());
		preparedStatement.setString(2,profTitle.getNo());
		preparedStatement.setString(3,profTitle.getRemarks());
		preparedStatement.setInt(4,profTitle.getId());
		//执行预编译语句，获取改变记录行数并赋值给affectedRowNum
		int affectedRows = preparedStatement.executeUpdate();
		//关闭资源
		JdbcHelper.close(preparedStatement,connection);
		return affectedRows>0;
	}

	//创建main方法，查询数据库中的对象，并输出
	public static void main(String[] args) throws ClassNotFoundException,SQLException{
		ProfTitleDao.getInstance().findAll();
		System.out.println();
		//增
		ProfTitle profTitle = new ProfTitle(5,"博士","05","");
		ProfTitleDao.getInstance().add(profTitle);
		ProfTitleDao.getInstance().findAll();
		System.out.println();
		//删
		ProfTitleDao.getInstance().delete(5);
		ProfTitleDao.getInstance().findAll();
		System.out.println();
		//改
		ProfTitle profTitle1 = ProfTitleDao.getInstance().find(36);
		System.out.println(profTitle1);
		profTitle1.setDescription("硕士");
		ProfTitleDao.getInstance().update(profTitle1);
		ProfTitle profTitle2 = ProfTitleDao.getInstance().find(36);
		System.out.println(profTitle2.getDescription());
	}
}

