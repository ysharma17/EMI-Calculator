<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"%>
<%@ page import="model.*" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Rescheduling:: Partial PrePaymennt</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>
<h1>Partial PrePayment Schedule</h1>

<%
String loanId=request.getParameter("loanId");
String instNo=request.getParameter("instNo");
double balance=(Double)request.getAttribute("Balance");
%>
<form action="PartialPrepaymentServlet" method="post">
<table>
<tr><td>Total Amount To Be Paid :: </td><td><%=Calculate.round(balance)%></td></tr>
<tr><td>
Enter Amount To be paid: </td><td><input type="text" name="partialp"/></td></tr>
<tr><td colspan="2">
<input type="hidden" name="instNo" value="<%=instNo %>" />
<input type="hidden" name="loanId" value="<%=loanId %>" />
<input type="submit" value="Show New Schedule" />
</td>
</table>
</form>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>
