<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="model.*"%>
<%@page import="java.sql.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Requested Schedule</title>
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
<table border='2'>
<tr><th>LOAN ID</th><th> INSTALLMENT NO</th><th> DUE DATE </th><th>OPENING BALANCE</th>
<th> PRINCIPAL COMPONENT</th><th> INTEREST COMPONENT</th><th>TOTAL EMI</th><th> CLOSING BALANCE</th><th> STATUS</th></tr>
<% 	
	String loanId=request.getParameter("LoanId");
	rs=cdb.ReadSchedule(con,loanId,1);
	try
	{	
		while(rs.next())
		{
%>
			<tr>
			<td align="right"><%=rs.getString("LOANID")%></td>
			<td align="right"><%=rs.getInt("INSTNO")%></td>
			<td align="right"><%=rs.getDate("DUEDATE") %></td>
			<td align="right"><%=Calculate.round(rs.getDouble("OPBAL")) %></td>
			<td align="right"><%=Calculate.round(rs.getDouble("PCOM")) %></td>
			<td align="right"><%=Calculate.round(rs.getDouble("ICOM")) %></td>
			<td align="right"><%=Calculate.round(rs.getDouble("EMI")) %></td>
			<td align="right"><%=Calculate.round(rs.getDouble("CLBAL")) %></td>
			<td align="right"><%=rs.getInt("STATUS") %></td>
			</tr>
<%		}
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
%>
</table>

<br><br><br>

<% if(cd.getDesignation().equals("Admin"))
{ %>
	<form action="SaveRequestedSchedule" method="post">
		<input type="hidden" name="loanId" value="<%=loanId %>"/>
		<input type="submit" name="submit" value="Save"/>
		<input type="submit" name="submit" value="Delete"/>	
	</form>
<%}%>

<form action="index.jsp"  method="post">
<input type="submit" value="Exit"/>
</form>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>