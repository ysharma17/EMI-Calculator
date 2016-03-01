package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import model.*;


/**
 * Servlet implementation class ForeclosureServlet
 */

public class ForeclosureServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForeclosureServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
    }

    public void doPost(HttpServletRequest request, 
                       HttpServletResponse response) throws ServletException, IOException {
    	PrintWriter out=response.getWriter();
        Calculate cal=new Calculate();
        Connection con=CreateConnection.getConnection();
        ConnectionDB cdb=new ConnectionDB();
        String type=request.getParameter("op");
        String loanId=request.getParameter("LoanId");
        String date=null;
        double prePayPen=0.0;
        double penaltyBal=0.0;
        double penalty=0.0;
        ResultSet rs=cdb.Read(con,loanId);
        
        try 
        {
        	if(rs.next()) 
            {   
                prePayPen=rs.getDouble("prepaypen");
                System.out.println(prePayPen);
            }
            else
            {
            	String message="Your Loan ID Not Found";
            	response.sendRedirect("Message.jsp?message="+message+"");

            }
        }
        catch (SQLException e) 
        {
            e.printStackTrace();
        }
        
        if(type.equals("date"))
        {
        	String day=request.getParameter("day");
            String mon=request.getParameter("mon");
            String year=request.getParameter("year");
            date=day+"-"+mon+"-"+year;
            penaltyBal=cal.ForeCalAmount(loanId,date,prePayPen,con);
            penalty=cal.ForeCalPenalty(loanId,date,prePayPen,con);
            
        }
        else if(type.equals("number"))
        {
        	int instNo=Integer.parseInt(request.getParameter("instNo"));
        	penaltyBal=cal.ForeCalAmount(loanId,instNo,prePayPen,con);
            penalty=cal.ForeCalPenalty(loanId,instNo,prePayPen,con);
        }
        request.setAttribute("penalty", penalty);
        request.setAttribute("preBal",penaltyBal);
        request.setAttribute("prepaypen",prePayPen);
        request.setAttribute("loanId",loanId);
        RequestDispatcher rd=request.getRequestDispatcher("ShowForeclosure.jsp");
        rd.forward(request,response);
        
        
    }
}
