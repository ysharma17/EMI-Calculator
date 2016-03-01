<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="model.*" %>
    <%@ page import="java.sql.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Change PrePayment Penalty</title>
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
else if(cd.getDesignation().equals("Customer"))
	{ 
		response.sendRedirect("index.jsp");
	} 
%>
<br>
<br>
<form action="ChangePrePaymentPenalty" method="post">

<strong>Select Loan Type</strong>
				<select name="Type">
				<%
				Connection con=CreateConnection.getConnection();
				ConnectionDB cdb=new ConnectionDB();
				ResultSet rs=cdb.ReadPrePayPen(con);
				while(rs.next())
				{
					out.println("<option value="+rs.getString("type")+">"+rs.getString("type")+"</option>");
				}
				%>
				</select>

Enter New PrePayMent Penalty <input type="text" name="penalty"><br>
<br>
<input type="submit" name="submit" value="Change"/>
</form>



<jsp:include page="Footer.html"></jsp:include>
</body>
</html>