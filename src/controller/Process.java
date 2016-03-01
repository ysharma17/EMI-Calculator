package controller;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import model.*;
import java.util.*;


public class Process extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Process() 
    {
        super();
    }
    protected void ProcessIt(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
    	response.setContentType("text/html");
    	HttpSession session=request.getSession();
    	String custId=null;
    	CustDetail cd=new CustDetail();
    	cd=(CustDetail)session.getAttribute("cd"); 
    	if(cd==null)
    		{
    			custId=" ";
    		}
    	else 
    		{
    			custId=cd.getCustId();
    		} 
    	
    	
    	RequestDispatcher rd;
    	double emi=0;
        double LoanAmt=Double.parseDouble(request.getParameter("LoanAmt"));
    	double roi=Double.parseDouble(request.getParameter("roi"));
    	int tenure=Integer.parseInt(request.getParameter("Tenure"));
    	int NoIperYear=Integer.parseInt(request.getParameter("Installments"));
    	double RV=Double.parseDouble(request.getParameter("RV"));
    	
    	
    	String b1=request.getParameter("b1");
    	
    	Calculate cal=new Calculate();
    	LoanDetail lpd=new LoanDetail();
    	lpd.setPAmt(LoanAmt);
    	lpd.setRoi(roi);
    	lpd.setTenure(tenure);
    	lpd.setNoOfInst(NoIperYear);
    	lpd.setRV(RV);
    	emi=cal.CalEmi(lpd);
    	if(b1.equals("Calculate EMI"))
    	{
    		
    		rd=request.getRequestDispatcher("/ShowEmi.jsp");
            request.setAttribute("installment",emi);
            rd.forward(request,response);
    		
    	}
    	if(b1.equals("Show Schedule"))
    	{
    		ArrayList<LoanSchedule> arr=new ArrayList<LoanSchedule>();
    		ListSchedule ls=new ListSchedule();
    		for(int j=0;j<lpd.getTenure();j++)
    		{
    			LoanSchedule lsd=new LoanSchedule();
    			lsd=cal.PIComCal(lpd,(j+1),emi);
    			arr.add(lsd);
    			lpd.setPAmt(lsd.getClBal());
    		}
    		ls.setArr(arr);
    		lpd.setPAmt(LoanAmt);
    		request.setAttribute("ls", ls);
            request.setAttribute("lpd",lpd);
            rd=request.getRequestDispatcher("ShowNewSchedule.jsp");
    		rd.forward(request, response);
    	}
    	if(b1.equals("Show P And I Components"))
    	{
    		int NthInst=Integer.parseInt(request.getParameter("NthInst"));
    		LoanSchedule lsd=new LoanSchedule();
    		for(int j=0;j<NthInst;j++)
    		{
    			lsd=cal.PIComCal(lpd,(j+1),emi);
    			lpd.setPAmt(lsd.getClBal());
    		}
    		request.setAttribute("pAndI",lsd );
    		rd=request.getRequestDispatcher("/ShowPIComponent.jsp");
    		rd.forward(request, response);
    		
    	}   	
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		ProcessIt(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		ProcessIt(request,response);
	}

}
