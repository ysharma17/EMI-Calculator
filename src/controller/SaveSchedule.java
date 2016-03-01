package controller;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.sql.*;
import model.*;

/**
 * Servlet implementation class SaveSchedule
 */

public class SaveSchedule extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveSchedule() {
        super();
        
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher rd;
		
        Connection con=CreateConnection.getConnection();
        ConnectionDB cdb=new ConnectionDB();
        Calculate cal=new Calculate();
        
        String custId=null;
        String str=request.getParameter("lpd");
        
        String LoanID=cdb.ReadLoanId(con);
        String type=request.getParameter("Type");
        Double prePayPen=cdb.ReadPrePayPen(con,type);
        
        int req=Integer.parseInt(request.getParameter("request"));
        
        if(req==1)
        {
        	HttpSession session=request.getSession();
        	CustDetail cl=new CustDetail();
        	cl=(CustDetail)session.getAttribute("cd");
        	custId=cl.getCustId();
        	
        	
        }
        else
        {
        	custId=request.getParameter("CustId");
        }
        
        LoanDetail lpd=new LoanDetail(str);
        lpd.setLoanId(LoanID);
        lpd.setCustId(custId);
        lpd.setPrePayPen(prePayPen);
        lpd.setStatus(1);
        LoanSchedule lsd=new LoanSchedule();
        
        String day=request.getParameter("day");
        String mon=request.getParameter("mon");
        String year=request.getParameter("year");
        
        String date=day+"-"+mon+"-"+year;
        
           //INSERT IN LOANDETAILS
        
                try 
                {
                	System.out.println(lpd);
					cdb.Write(lpd,con,req);
				} 
                catch (Exception e) 
                {                	
                	System.out.println("lpd lpd lpd ");
					e.printStackTrace();
				}
            //END LPD
           
           double value=0;
           
           //INSERT IN LOAN SCHEDULE
           String date1=null; 
           double emi=cal.CalEmi(lpd);
           try{  
           for(int j=0;j<lpd.getTenure();j++)
             {
            	 
            	 String temp[]=new String[3];
                 temp=date.split("-");
                 
                 int y=Integer.parseInt(temp[2]);
                 double d=0.0;
                 if(((y%4==0)&&(!(y%100==0)))||(y%400==0))
                 {
              	   d=366.0;
                 }
                 else
                 {
              	   d=365.0;
                 }
                 if(lpd.getNoOfInst()==24||lpd.getNoOfInst()==52)
                 { 
                 double extra1=(Double)(d/lpd.getNoOfInst());
                 double a1= (Double)(Math.round(extra1)*1.0);
                 extra1=extra1-a1;
            	 value=value+extra1;
            	 
                 }
                 
            	 if(j+1==lpd.getTenure())
            	 {
            		 value=(Double)(Math.round(value)*1.0);
            	 }
            	 if(value>=1)
            	 {
            		 value=value-1.0;
            		 date=cdb.Read(date,lpd.getNoOfInst(),1,con);
            		 if(date.equals("1"))
            		 {
            			 con=CreateConnection.getConnection();
            			 date=date1;
            			 date=cdb.Read(date,lpd.getNoOfInst(),1,con);
            		 }
            	 }
            	 else
            	 {
            		 date=cdb.Read(date,lpd.getNoOfInst(),0,con);
            		 if(date.equals("1"))
            		 {
            			 con=CreateConnection.getConnection();
            			 date=date1;
            			 date=cdb.Read(date,lpd.getNoOfInst(),0,con);
            		 }
            	 }
            	 
                     date1=date;
                     lsd=new LoanSchedule();
                     lsd=cal.PIComCal(lpd,(j+1),emi);
                     lsd.setLoanId(lpd.getLoanId());
                     lsd.setStatus(1);
                     lsd.setDueDate(date);
                     lpd.setPAmt(lsd.getClBal());
                 
						int flag=cdb.Write(lsd,con,req);
						if(flag==1)
						{
							con=CreateConnection.getConnection();
							cdb.Write(lsd,con,req);
						}
				}
           }
           catch(Exception e)
           {
        	   
        	   System.out.println("lsd lsd l");
        	   e.printStackTrace();
           }
           String message=null;
           if(req==0)
           {
        	   message="Your Loan Request with LoanID= "+LoanID+" is Registered..";
           }
           else if(req==1)
           {
        	   message="Loan Schedule Saved With LoanID= "+LoanID;
           }
           response.sendRedirect("Message.jsp?message="+message+"");

            
            //END LSD
      }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			doGet(request, response);
	}
}
