<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="model.ConnectionDB"%>
<%@page import="model.CreateConnection"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.ResultSet"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Show P I Component</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>
<table border='2'>
<tr><th>LOAN ID</th><th> INSTALLMENT NO</th><th> DUE DATE </th><th>OPENING BALANCE</th>
<th> PRINCIPAL COMPONENT</th><th> INTEREST COMPONENT</th><th>TOTAL EMI</th><th> CLOSING BALANCE</th><th> STATUS</th></tr>
<% 	
	Connection con=CreateConnection.getConnection();
	ConnectionDB cdb=new ConnectionDB();
	String loanId=request.getParameter("LoanId");
	int instNo=Integer.parseInt(request.getParameter("instNo"));
	ResultSet rs=cdb.ReadSchedule(con, loanId,0);
	try
	{	
		while(rs.next())
		{	if(rs.getInt("INSTNO")==instNo)
			{
%>
			<tr>
			<td  align="right"><%=rs.getString("LOANID")%></td>
			<td align="right"><%=rs.getInt("INSTNO")%></td>
			<td align="right"><%=rs.getDate("DUEDATE") %></td>
			<td align="right"><%=rs.getDouble("OPBAL") %></td>
			<td align="right"><%=rs.getDouble("PCOM") %></td>
			<td align="right"><%=rs.getDouble("ICOM") %></td>
			<td align="right"><%=rs.getDouble("EMI") %></td>
			<td align="right"><%=rs.getDouble("CLBAL") %></td>
			<td align="right"><%=rs.getDouble("STATUS") %></td>
			</tr>
<%			}
		}
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
%>
</table>

<br><br><br>
<form action="index.jsp"  method="post">
<input type="submit" value="Exit"/>
</form>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>