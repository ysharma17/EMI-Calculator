<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>
  <form action="RegisterServlet" method="post">
  <table>
  <tr>
  <td>
  Enter your Name:
  </td>
  <td><input type="text" name="name" ></td></tr>
  <tr>
  <td>
  
  
  Enter your UserName:</td><td><input type="text" name="uname"></td>
  </tr>
  <tr>
  <td>
  Enter your Password:
  </td>
  <td>
  <input type="password" name="pass"></td>
  </tr>
  <tr>
  <td>
  Confirm Password:
  </td>
  <td>
  <input type="password" name="cpass">
  </td>
  </tr>
  <tr>
  <td>
  Select Gender:
  </td>
  <td>
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female
  </td>
  </tr>
  <tr>
  <td>
  Enter Contact No(mobile):
  </td>
  <td>
  <input type="text" name="contact">
  </td>
  </tr>
  <tr>
  <td>
  Enter your Address:
  </td>
  <td><textarea name="address" rows="10" cols="50" ></textarea>
  </td>
  </tr>
  
  
  <tr>
	<td colspan="2">
<input type="submit" name="submit" value="Register">
</td>
</tr>
  
  
  
  
  </table>
  </form>
  
  <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>