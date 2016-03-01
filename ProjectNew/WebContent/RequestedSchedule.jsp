<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="model.*" %>
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
Connection con=CreateConnection.getConnection();
ConnectionDB cdb=new ConnectionDB();
String action=null;
ResultSet rs=null;
if(cd==null)
	{
		response.sendRedirect("index.jsp");
	}
else if(cd.getDesignation().equals("Admin"))
	{ 
		 rs=cdb.ReadLoanIdAll(con,1);
	}
else if(cd.getDesignation().equals("Customer"))
	{
		rs=cdb.ReadLoanId(con,cd.getCustId(),1);
	}
%>
		
	<form action="ShowRequestedSchedule.jsp" method="post">	
		<strong>Select Loan Id</strong>
		<select name="LoanId" >
		<%
		while(rs.next())
		{
			out.println("<option value="+rs.getString("loanid")+">"+rs.getString("loanid")+"</option>");
		}
		%>
		</select>
	<input type="submit" name="submit" value="Submit"/>
	</form>




<jsp:include page="Footer.html"></jsp:include>
</body>
</html>