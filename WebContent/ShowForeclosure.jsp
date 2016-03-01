<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="model.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Fore Closure</title>
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
double penalty=(Double)request.getAttribute("penalty");
double penaltyBalance=(Double)request.getAttribute("preBal");
double clBal=penaltyBalance-penalty;
double prepaypen=(Double)request.getAttribute("prepaypen");
%>
The Remaining Balance : <%=Calculate.round(clBal) %><br>
The PrePayment Penalty : <%=Calculate.round(prepaypen) %><br>
Penalty :: <%=Calculate.round(penalty) %><br>
Total Amount  :: <%=Calculate.round(penaltyBalance) %><br><br>
<a href="index.jsp">Click here to go back to the calculator</a>
<br>
<br>
  <form action="PayForeClosure" method="post">
  <input type="hidden" name="LoanId" value="<%=request.getAttribute("loanId") %>">
  <input type="submit" value="Pay Amount">
  </form>
  
  
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>