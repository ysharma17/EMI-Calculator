package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.*;

/**
 * Servlet implementation class RegisterServlet
 */

public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String name= request.getParameter("name");
		String username=request.getParameter("uname");
		String pass=request.getParameter("pass");
		String gender=null;
		if(request.getParameter("gender").equals("male"))
		{
			gender="M";
		}
		else
		{
			gender="F";
		}
		
		String contact=request.getParameter("contact");
		String address=request.getParameter("address");
		PrintWriter out=response.getWriter();
		Connection con=CreateConnection.getConnection();
		ResultSet rs=null;
		ConnectionDB cdb=new ConnectionDB();
		try 
		{
			rs=cdb.ReadUserName(username, con);
			if(rs.next())
			{
				String message="UserName Already Exists..... Try Again";
				response.sendRedirect("Message.jsp?message="+message+"");
			}
			else
			{
				String custId=cdb.ReadCustId(con);
				String password=Encryption.encrypt(pass, "SHA-384", "UTF-16");
				System.out.println(password);
				
				CustDetail cd=new CustDetail(custId, username, password,"Customer", name, gender, contact, address);
				cdb.Write(cd, con);
				
				String message="Your CustOmer Id = "+custId;
				response.sendRedirect("Message.jsp?message="+message+"");
			}
		} 
		catch (SQLException e) 
		{
			
			e.printStackTrace();
		}
		
	}

}
