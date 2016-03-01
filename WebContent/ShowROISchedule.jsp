<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ page import="model.*"%>
<%@ page import="java.util.*,java.sql.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>
<%
CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cd"); 
if(cd==null)
	{
		response.sendRedirect("index.jsp");
	}
%>


<h1>RePayment Schedule</h1>
  <%
  
    
        ArrayList<LoanSchedule> arr=new ArrayList<LoanSchedule>();
        ListSchedule lst=new ListSchedule();
        LoanSchedule rps=new LoanSchedule();
        lst=(ListSchedule)request.getAttribute("arr");
        arr=lst.getArr();
        LoanDetail lpd=new LoanDetail();
        lpd=(LoanDetail)request.getAttribute("lpd");
        System.out.println(lpd);
        int status=(Integer)request.getAttribute("status");
        String instno=(String)request.getAttribute("instno");
        String date=(String)request.getAttribute("date");
    
 %>               
  <table border='2'>
  <tr><th>Installment No</th>
  <th>Loan Amount</th>
  <th>EMI</th>
  <th>Principal Component</th>
  <th>Interest Component</th>
  <th>OutStanding Principal</th></tr>
  
  <%
  
  
  for(int i=0;i<arr.size();i++){
    rps=arr.get(i);
    double opbal=rps.getOpBal();
    double emi=rps.getEmi();
    double pcom=rps.getPCom();
    double icom=rps.getICom();
    double cBal=rps.getClBal();		
    
%>
  <tr>
  <td align="right"><%=rps.getInstNo()%></td>
  <td align="right"><%=Calculate.round(opbal)%></td>
  <td align="right"><%=Calculate.round(emi)%></td>
  <td align="right"><%=Calculate.round(pcom)%></td>
  <td align="right"><%=Calculate.round(icom)%></td>
  <td align="right"><%=Calculate.round(cBal)%></td></tr>
  
  <%}%>

  </table>
  <form name="myForm" action="SaveScheduleROI" onsubmit="return validateForm()" method="post">

<input type="hidden" name="lpd" value="<%=lpd.toString() %>"/>
<input type="hidden" name="status" value="<%=status %>"/>
<input type="hidden" name="instno" value="<%=instno %>"/>
<input type="hidden" name="date" value="<%=date %>"/>
<br>
<br>
<input type="submit" value="Save" /><br/>
</form>
<br><br>
<form action="index.jsp"  method="post">
<input type="submit" value="Exit"/>
</form><br><br>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>