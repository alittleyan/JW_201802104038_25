package service;

import dao.SchoolDao;
import domain.School;

import java.sql.SQLException;
import java.util.Collection;

public final class SchoolService {
    private static SchoolDao schoolDao
            = SchoolDao.getInstance();
    private static SchoolService schoolService
            =new SchoolService();
    private SchoolService(){}

    public static SchoolService getInstance(){
        return schoolService;
    }

    public Collection<School> findAll() throws SQLException {
        return schoolDao.findAll();
    }

    public School find(Integer id)throws SQLException{
        return schoolDao.find(id);
    }

    public boolean update(School school)throws SQLException{
        return schoolDao.update(school);
    }

    public boolean add(School school) throws SQLException,ClassNotFoundException {
        return schoolDao.add(school);
    }

    public boolean delete(Integer id) throws SQLException {
        return schoolDao.delete(id);
    }

}

