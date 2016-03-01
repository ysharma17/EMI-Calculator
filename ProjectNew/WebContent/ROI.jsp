
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="model.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Rescheduling::Floating Rate Of Interest</title>
</head>
<body>

<jsp:include page="Header.jsp"></jsp:include>

<%CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cl"); 
if(cd==null)
{
	response.sendRedirect("index.jsp");
}
String loanId=request.getParameter("loanId");
String instNo=request.getParameter("instNo");
double balance=(Double)request.getAttribute("Balance");
%>
<form action="ROIServlet" method="post">
<table>
<tr><td>Total Amount To Be Paid :: </td><td><%=balance %></td></tr>
<tr><td>
Enter New Rate Of Interest </td>
<td><input type="text" name="roi"/></td></tr>
<tr><td colspan="2">
<input type="hidden" name="instNo" value="<%=instNo %>" />
<input type="hidden" name="loanId" value="<%=loanId %>" />
<input type="submit" name="schedule" value="Show New Schedule" /></td>
</table>
</form>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>