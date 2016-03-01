package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;

import javax.servlet.*;
import javax.servlet.http.*;

import model.Calculate;
import model.CreateConnection;

public class CheckRescheduling extends HttpServlet {
    private static final String CONTENT_TYPE = "text/html; charset=windows-1252";

    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    public void doGet(HttpServletRequest request, 
                      HttpServletResponse response) throws ServletException, IOException {response.setContentType(CONTENT_TYPE);
       doPost(request,response);
    }

    public void doPost(HttpServletRequest request, 
                       HttpServletResponse response) throws ServletException, IOException {response.setContentType(CONTENT_TYPE);
       
        String rs=request.getParameter("rs");
        Connection con=CreateConnection.getConnection();
        Calculate cal=new Calculate();
        String loanid=request.getParameter("loanId");
        int instNo=Integer.parseInt(request.getParameter("instNo"));
        double clBal=cal.ForeCalAmount(loanid, instNo,1, con)-cal.ForeCalPenalty(loanid, instNo, 1, con);
        
    
        request.setAttribute("Balance", clBal);
        if(rs.equals("froi")) 
        
        {
            RequestDispatcher req=request.getRequestDispatcher("ROI.jsp");
            req.forward(request,response);
        }
        else if(rs.equals("pp"))
        {
               RequestDispatcher req=request.getRequestDispatcher("PartialPrepayment.jsp");
               req.forward(request,response);
        }
        
    }
}
