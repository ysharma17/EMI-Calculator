package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.sql.*;

import model.*;

/**
 * Servlet implementation class Login
 */

public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
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
		
		PrintWriter out=response.getWriter();
		HttpSession session=request.getSession();
		Connection con=CreateConnection.getConnection();
		ConnectionDB cdb=new ConnectionDB();
		ResultSet rs=null;
		String username=request.getParameter("user");
		String pass=request.getParameter("pass");
		String password=Encryption.encrypt(pass, "SHA-384", "UTF-16");
		
		
		try 
		{
			rs=cdb.Read(con, username, password);
			if(rs.next())
			{
				CustDetail cd=new CustDetail(rs.getString("CUSTID"),rs.getString("USERNAME")," ",rs.getString("DESIGNATION"),rs.getString("CUSTNAME"),rs.getString("GENDER"),rs.getString("CONTACTNO"),rs.getString("ADDRESS"));
				session.setAttribute("cd", cd);
				response.sendRedirect("index.jsp");
								
			}
			else
			{
				
				String message="Username or Password Is InCorrect";
				response.sendRedirect("Message.jsp?message="+message+"");
			}
		} 
		catch (SQLException e) 
		{
			
			e.printStackTrace();
		}
		
	}

}
