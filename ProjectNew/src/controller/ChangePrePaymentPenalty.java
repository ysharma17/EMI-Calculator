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
 * Servlet implementation class ChangePrePaymentPenalty
 */

public class ChangePrePaymentPenalty extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangePrePaymentPenalty() {
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
		
		ConnectionDB cdb=new ConnectionDB();
		double prepaypen=Double.parseDouble(request.getParameter("penalty"));
		Connection con=CreateConnection.getConnection();	
		String type=request.getParameter("type");
				cdb.Write(prepaypen,type, con);
				
		String message="PrePayPenalty Changed Successfully";
		response.sendRedirect("Message.jsp?message="+message+"");

	}

}
