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
 * Servlet implementation class SaveRequestedSchedule
 */

public class SaveRequestedSchedule extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveRequestedSchedule() {
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
		
		Connection con=CreateConnection.getConnection();
		ConnectionDB cdb=new ConnectionDB();
		
		String loanId=request.getParameter("loanId");
		String submit=request.getParameter("submit");
		if(submit.equals("Save"))
		{
			cdb.WriteTemp(loanId, con);
			cdb.Delete(loanId, con);
			String message="The Schedule Has Been Saved SuccessFully";
			response.sendRedirect("Message.jsp?message="+message+"");
		}
		else if(submit.equals("Delete"))
		{
			cdb.Delete(loanId, con);
			String message="The Schedule Has Been Deleted SuccessFully";
			response.sendRedirect("Message.jsp?message="+message+"");
		}
		
	}

}
