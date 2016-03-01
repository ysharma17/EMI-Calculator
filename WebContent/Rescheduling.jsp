<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252" import="java.sql.*,model.*" %>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
    <title>Rescheduling</title>
    <style type="text/css">
      body {
      background-color: #ffffff; 
}
      a:link { color: #000000; }
    </style>
  </head>
  <body>
  <jsp:include page="Header.jsp"></jsp:include>

<%
CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cd"); 
Connection con=CreateConnection.getConnection();
ConnectionDB cdb=new ConnectionDB();
String action=null;
ResultSet rs=null;
%>
<%if(cd==null)
	{
		response.sendRedirect("index.jsp");
	}
else if(cd.getDesignation().equals("Admin"))
	{ 
		 rs=cdb.ReadLoanIdAll(con,0);
	}
else if(cd.getDesignation().equals("Customer"))
	{
		rs=cdb.ReadLoanId(con,cd.getCustId(),0);
	}
%>
		
	<form action="CheckRescheduling" method="post">	
		<strong>Select Loan Id</strong>
		<select name="loanId" >
		<%
		while(rs.next())
		{
			out.println("<option value="+rs.getString("loanid")+">"+rs.getString("loanid")+"</option>");
		}
		%>
		</select>
<br>
  		Enter Installment No.<input type="text" name="instNo"><br>
  
  Select the option to reschedule:
  <br> <br>
  <input type="radio" name="rs" value="froi">By floating rate  
  <br>
  <br>
  <input type="radio" name="rs" value="pp">By partial PrePayment
  <br><br>
  <input type="submit" name="submit" value="Submit">
   </form>
  
 
  <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>