package controller;

import java.io.IOException;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import model.*;

/**
 * Servlet implementation class SaveScheduleROI
 */

public class SaveScheduleROI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveScheduleROI() {
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
		
		
		CustDetail cd=new CustDetail();
		HttpSession session=request.getSession();
		int req=0;
		cd=(CustDetail)session.getAttribute("cd"); 
		if(cd==null)
			{
				response.sendRedirect("index.jsp");
			}
		else if(cd.getDesignation().equals("Customer"))
			{ 
				req=1;
			} 
		else
			{
				req=0;
			} 
        Connection con=CreateConnection.getConnection();
        Connection con1=CreateConnection.getConnection();
        

            Calculate cal=new Calculate();
            String str=request.getParameter("lpd");
            System.out.println(str);
            LoanDetail lpd=new LoanDetail(str);
            LoanSchedule lsd=new LoanSchedule();
            ConnectionDB cdb=new ConnectionDB();
            int status=Integer.parseInt(request.getParameter("status"));
            String date=request.getParameter("date");
            String instno=request.getParameter("instno");
            String temp1[]=new String[2];
            temp1=instno.split(" ");
            int a=Integer.parseInt(temp1[0]);
            int b=Integer.parseInt(temp1[1]);
            System.out.println(date);
            date=cdb.ConDate(date);
            //Double prePayPen=cdb.ReadPrePayPen(con);
      //CustLoanDetails cld=new CustLoanDetails(LoanID,custId,prePayPen);
            try 
            {                	
            	//cdb.Write(cld, con,req);

            	System.out.println(lpd);
				cdb.Write(lpd,con,req);
			} 
            catch (Exception e) {
            	
            	System.out.println("lpd lpd lpd 11111111111111111111111111111111111111111111111");
				e.printStackTrace();
			}
            
            System.out.println(date);
        
            //INSERT IN LOAN SCHD DETAILS
            double value=0;
            String date1=null;
            double emi=cal.CalEmi(lpd);
            
             for(int j=a;j<b;j++)
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
            		 date=cdb.Read(date,lpd.getNoOfInst(),1,con1);
            		 if(date.equals("1"))
            		 {
            			 con1=CreateConnection.getConnection();
            			 date=date1;
            			 date=cdb.Read(date,lpd.getNoOfInst(),1,con1);
            		 }
            	 }
            	 else
            	 {
            		 date=cdb.Read(date,lpd.getNoOfInst(),0,con1);
            		 if(date.equals("1"))
            		 {
            			 con1=CreateConnection.getConnection();
            			 date=date1;
            			 date=cdb.Read(date,lpd.getNoOfInst(),0,con1);
            		 }
            	 }
            	 		date1=date;
                     lsd=new LoanSchedule();
                     lsd=cal.PIComCal(lpd,(j+1),emi);
                     lsd.setLoanId(lpd.getLoanId());
                     lsd.setStatus(status);
                     lsd.setDueDate(date);
                     lpd.setPAmt(lsd.getClBal());
                     int flag=cdb.Write(lsd,con,req);
						if(flag==1)
						{
							con=CreateConnection.getConnection();
							cdb.Write(lsd,con,req);
						}
					
                        
             }
            
             if(req==1)
             {
             	String message="Your ReScheduling Request Has Been Registered";
             	response.sendRedirect("Message.jsp?message="+message+"");
             }
             else if(req==0)
             {
            	 String message="ReScheduling Completed";
              	  response.sendRedirect("Message.jsp?message="+message+"");
            	 
             }
            //END LSD

	}

}
