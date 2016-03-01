<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>
  <h1> Login</h1>
  <form action="Login" method="post">
  <table>
  <tr>
  <td>
  Enter UserName:</td>
  <td><input type="text" name="user"></td>
  </tr>
  <tr>
  <td>
  Enter Password:</td>
  
  <td><input type="password" name="pass"></td>
  </tr>
   
  <tr>
	<td colspan="2">
<input type="submit" name="submit" value="Login">
</td>
</tr>

  
  </table>
  </form>
  <br/>
  <br/>
<a href="Registration.html">Register</a>
<jsp:include page="Footer.html"></jsp:include>
  </body>
  </html>
