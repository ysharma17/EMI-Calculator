<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="model.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%
CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cd"); 
%>
<%if(cd==null)
	{%>
		<jsp:include page="VisitorMenu.html"></jsp:include>
<%	}
else if(cd.getDesignation().equals("Customer"))
	{ %>
		<jsp:include page="CustomerMenu.html"></jsp:include>
<%  } 
else if(cd.getDesignation().equals("Admin"))
	{
%>
		<jsp:include page="AdminMenu.html"></jsp:include>
<%	} %>
</body>
</html>