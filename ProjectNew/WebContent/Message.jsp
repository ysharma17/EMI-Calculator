<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Message</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>

<%=request.getParameter("message") %>
<br>
<br>
<a href="index.hsp">Exit</a>

<jsp:include page="Footer.html"></jsp:include>
</body>
</html>