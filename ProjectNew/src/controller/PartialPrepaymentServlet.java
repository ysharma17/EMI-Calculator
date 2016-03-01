package controller;

import java.io.*;
import java.sql.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import model.*;

public class PartialPrepaymentServlet extends HttpServlet {
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
                       RequestDispatcher rd=null;
                       ConnectionDB cbd=new ConnectionDB();
                       Calculate cal=new Calculate();
                       Connection con=CreateConnection.getConnection();
                       double partialp=Double.parseDouble(request.getParameter("partialp"));
                       String LoanID=request.getParameter("loanId");
                       int instNo=Integer.parseInt(request.getParameter("instNo"));
                       
                       ResultSet rs=cbd.Read(LoanID,con);
                       
                       try 
                       {
               			if(rs.next())
               			{
               				LoanDetail lpd=new LoanDetail();
               				lpd.setLoanId(rs.getString("loanid"));
               				lpd.setRoi(rs.getDouble("roi"));
               				lpd.setNoOfInst(rs.getInt("noofinst"));
               				lpd.setTenure(rs.getInt("tenure"));
               				lpd.setRV(rs.getDouble("rv"));
               				lpd.setPAmt(rs.getDouble("pamt"));
               				lpd.setCustId(rs.getString("custid"));
               				lpd.setPrePayPen(rs.getDouble("prepaypen"));
               				System.out.println(lpd.toString());
               				rs.close();
               				rs=cbd.Read(LoanID,instNo,con);
               								
               				LoanSchedule lsd1=new LoanSchedule();

               				while(rs.next()){
               				lsd1.setLoanId(rs.getString(1));
               				lsd1.setInstNo(rs.getInt(2));
               				lsd1.setDueDate(rs.getDate(3).toString());
               				lsd1.setOpBal(rs.getDouble(4));
               				lsd1.setPCom(rs.getDouble(5));
               				lsd1.setICom(rs.getDouble(6));
               				lsd1.setEmi(rs.getDouble(7));
               				lsd1.setClBal(rs.getDouble(8));
               				lsd1.setStatus(rs.getInt(9));
               				}
               				rs.close();
               				int status=lsd1.getStatus()+1;
               				lpd.setStatus(status);
               				System.out.println(status);
               				System.out.println(lsd1.getDueDate());
               				System.out.println(lpd);
               				double pAmt=lsd1.getClBal()-partialp;
               				int tenure=lpd.getTenure()-lsd1.getInstNo();
               				int flag=lpd.getTenure();
               				lpd.setPAmt(pAmt);
               				lpd.setTenure(tenure);
               				
               				ArrayList<LoanSchedule> arr=new ArrayList<LoanSchedule>();
               	    		ListSchedule ls=new ListSchedule();
               	    		double emi=cal.CalEmi(lpd);
               	    		for(int j=lsd1.getInstNo();j<flag;j++)
               	    		{
               	    			LoanSchedule lsd=new LoanSchedule();
               	    			lsd=cal.PIComCal(lpd,(j+1),emi);
               	    			lsd.setLoanId(lsd1.getLoanId());
               	    			lsd.setStatus(status);
               	    			arr.add(lsd);
               	    			lpd.setPAmt(lsd.getClBal());
               	    		}
               	    		ls.setArr(arr);
               	    		lpd.setPAmt(pAmt);
               	    		request.setAttribute("arr", ls);
               	            request.setAttribute("date",lsd1.getDueDate());
               	            request.setAttribute("lpd", lpd);
               	            request.setAttribute("instno", lsd1.getInstNo()+" "+flag);
               	            request.setAttribute("status", status);
               	            rd=request.getRequestDispatcher("/ShowPPPSchedule.jsp");
               	    		rd.forward(request, response);
               			}
               			else
               			{
               				String message="No Loan Detail Is Available For Loan ID "+LoanID;
               				response.sendRedirect("Message.jsp?message="+message+"");

               			}
               		} 
                       catch (SQLException e) 
               		{
               			e.printStackTrace();
               		}
                       

                   }
}
