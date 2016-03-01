package controller;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.ConnectionDB;
import model.CreateConnection;

/**
 * Servlet implementation class PayForeClosure
 */

public class PayForeClosure extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PayForeClosure() {
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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String loanId=request.getParameter("LoanId");
		Connection con=CreateConnection.getConnection();
		ConnectionDB cdb=new ConnectionDB();
		
		try
		{
		cdb.Write(loanId, con);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		String message="Loan Has Been Closed Successful";
		response.sendRedirect("Message.jsp?message="+message+"");

	}

}
