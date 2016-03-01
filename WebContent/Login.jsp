<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>


<script type="text/javascript">
function validateForm()
{
   	var name=document.forms["register"]["user"].value; 
	var pass=document.forms["register"]["pass"].value; 

	if(name==null || name=="")
	{
		alert("The name must be entered");
		return false;

	}
	if(pass==null || pass=="")
	{
		alert("The password must be entered");
		return false;

	}
	return true;
}
</script>


<jsp:include page="Header.jsp"></jsp:include>
 
  <div align="center">
  <form action="Login" method="post" name="register" onsubmit="return validateForm()">
<table  id="table" border=2 bgcolor="Gray" align="center" style="color:white" width="30%">
<tr>
<th align="center"  HEIGHT="50" bgcolor="Maroon" colspan="2">
<label id="head"> LOGIN</label>
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
  </div>
  <br/>
  <br/>

<jsp:include page="Footer.html"></jsp:include>
  </body>
  </html>
