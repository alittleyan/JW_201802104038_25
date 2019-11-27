package controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.Teacher;
import service.TeacherService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/teacher.ctl")
public class TeacherController extends HttpServlet{
    //请使用以下JSON测试增加功能（id为空）
    //{"degree":{"description":"博士","id":37,"no":"02","remarks":"best"},"department":{"description":"01","id":2,"no":"01","remarks":"best","school":{"description":"管理","id":1,"no":"01","remarks":"the best"}},"name":"id为null的老师"}
    //请使用以下JSON测试修改功能
    //{"degree":{"description":"博士","id":37,"no":"02","remarks":"best"},"department":{"description":"01","id":2,"no":"01","remarks":"best","school":{"description":"管理","id":1,"no":"01","remarks":"the best"}},"id":2,"name":"修改id为null的老师"}

    /**
     * POST, http://localhost:8080/teacher.ctl, 增加教师
     * 增加一个教师对象：将来自前端请求的JSON对象，增加到数据库表中
     *
     * @param request  请求对象
     * @param response 响应对象
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //设置请求字符编码为UTF-8
        request.setCharacterEncoding("UTF-8");
        //根据request对象，获得代表参数的JSON字串
        String teacher_json = JSONUtil.getJSON(request);

        //将JSON字串解析为Teacher对象
        Teacher teacherToAdd = JSON.parseObject(teacher_json, Teacher.class);

        //设置响应字符编码为UTF-8
        response.setContentType("text/html;charset=UTF-8");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加Teacher对象
        try {
            TeacherService.getInstance().add(teacherToAdd);
            message.put("message", "增加成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * DELETE, http://localhost:8080/teacher.ctl?id=1, 删除id=1的教师
     * 删除一个教师对象：根据来自前端请求的id，删除数据库表中id的对应记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        int id = Integer.parseInt(id_str);

        //设置响应字符编码为UTF-8
        response.setContentType("text/html;charset=UTF-8");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();

        //到数据库表中删除对应的教师
        try {
            TeacherService.getInstance().delete(id);
            message.put("message", "删除成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }


    /**
     * PUT, http://localhost:8080/teacher.ctl, 修改教师
     * <p>
     * 修改一个教师对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //设置请求字符编码为UTF-8
        request.setCharacterEncoding("UTF-8");
        String teacher_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Teacher对象
        Teacher teacherToAdd = JSON.parseObject(teacher_json, Teacher.class);

        //设置响应字符编码为UTF-8
        response.setContentType("text/html;charset=UTF-8");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改Teacher对象对应的记录
        try {
            TeacherService.getInstance().update(teacherToAdd);
            message.put("message", "修改成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * GET, http://localhost:8080/teacher.ctl?id=1, 查询id=1的教师
     * GET, http://localhost:8080/teacher.ctl, 查询所有的教师
     * 把一个或所有教师对象响应到前端
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //设置响应字符编码为UTF-8
        response.setContentType("text/html;charset=UTF-8");
        //读取参数id
        String id_str = request.getParameter("id");

        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有教师对象，否则响应id指定的教师对象
            if (id_str == null) {
                responseTeachers(response);
            } else {
                int id = Integer.parseInt(id_str);
                responseTeacher(id, response);
            }
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
            //响应message到前端
            response.getWriter().println(message);
        } catch (Exception e) {
            message.put("message", "网络异常");
            //响应message到前端
            response.getWriter().println(message);
        }
    }

    //响应一个教师对象
    private void responseTeacher(int id, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //根据id查找教师
        Teacher teacher = TeacherService.getInstance().find(id);
        String teacher_json = JSON.toJSONString(teacher);

        //响应teacher_json到前端
        response.getWriter().println(teacher_json);
    }

    //响应所有教师对象
    private void responseTeachers(HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //获得所有教师
        Collection<Teacher> teachers = TeacherService.getInstance().findAll();
        String teachers_json = JSON.toJSONString(teachers, SerializerFeature.DisableCircularReferenceDetect);

        //响应teachers_json到前端
        response.getWriter().println(teachers_json);
    }
}
