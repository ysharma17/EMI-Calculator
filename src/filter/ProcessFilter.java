package filter;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class ProcessFilter
 */
@WebFilter("/ProcessFilter")
public class ProcessFilter implements Filter {

    /**
     * Default constructor. 
     */
    public ProcessFilter() {
        // TODO Auto-generated constructor stub
    }

	/**<%--  --%><%--  --%>
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		String str="";
    	int flag=0;
		
		try
		{
			double LoanAmt=Double.parseDouble(request.getParameter("LoanAmt"));
	    	double roi=Double.parseDouble(request.getParameter("roi"));
	    	int tenure=Integer.parseInt(request.getParameter("Tenure"));
	    	int NoInstperYear=Integer.parseInt(request.getParameter("Installments"));
	    	double RV=Double.parseDouble(request.getParameter("RV"));
	    	String b1=request.getParameter("b1");
	    	int NthInst=1;
	    	ArrayList<Integer> arr=new ArrayList<Integer>();

	    	arr.add(1);arr.add(2);arr.add(3);arr.add(4);arr.add(6);arr.add(12);arr.add(24);arr.add(52);
	    	if(b1.equals("Show P And I Components"))
	    	{
	    		NthInst=Integer.parseInt(request.getParameter("NthInst"));
	    		if(NthInst<0&&NthInst<=tenure)
	    		{
	    			str=str+"\n"+"Installment No Must Be Between 1 And Total No Of Installments...";
		    		flag=1;
	    		}
	    	}
	    	if(LoanAmt<100000&&LoanAmt>=9999999)
	    	{
	    		str=str+"\n"+"Loan Amount Must Be Less Than 99 Lakh and Greater Than 1 Lakh";
	    		flag=1;
	    	}
	    	if(roi<0)
	    	{
	    		str=str+"\n"+"Rate Of Interest Cant't Be Less Than 0";
	    		flag=1;
	    	}
	    	if(tenure<NoInstperYear&&tenure>=(NoInstperYear*30))
	    	{
	    		str=str+"\n"+"Tenure Should Be Atleast 1 Year and Atmost 30 years";
	    		flag=1;
	    	}
	    	if(!arr.contains(NoInstperYear))
	    	{
	    		str=str+"\n"+"Loan Can Be paid On Yearly,Half Yearly,Every Forth Month, Quarterly,Every Second Month,Monthly,Twice In a Month or Weekly Only..";
	    		flag=1;
	    	}
	    	if(RV<0)
	    	{
	    		str=str+"\n"+"Residual Amount Cant't Be In Negative";
	    		flag=1;
	    	}
	    	
	    	
		}
		catch(Exception e)
		{
			str=str+"\n"+e.getMessage();
			flag=1;
		}
		
		if(flag==1)
		{
			HttpServletResponse hresponse=(HttpServletResponse)response;
			hresponse.sendRedirect("Message.jsp?message="+str+"");
		}
		else
		{
			chain.doFilter(request, response);
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
