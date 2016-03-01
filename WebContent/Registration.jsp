<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
function check()
{
	var pass = document.forms["register"]["pass"].value; 
	var cpass=document.forms["register"]["cpass"].value; 

	if(pass!=cpass)
	{
		alert("The password does not match");
	}
	else
	{
  	 	alert("The password has been confirmed");
	}

}


</script>

<script type="text/javascript">
function validateForm()
{
   	var name=document.forms["register"]["name"].value; ;
	var uname=document.forms["register"]["uname"].value; 
	var gender=document.forms["register"]["gender"].value; ;
	var contact=document.forms["register"]["contact"].value; 
	var address=document.forms["register"]["address"].value; 
	
	if(name==null || name=="")
	{
		alert("The name must be entered");
		return false;

	}
	if(uname==null || uname=="")
	{
		alert("The user name must be entered");
		return false;

	}
	if(gender==null || gender=="")
	{
		alert("The gender must be selected");
		return false;

	}
	if(contact==null || contact=="")
	{
		alert("The contact number must be entered");
		return false;

	}
	if(address==null || address=="")
	{
		alert("The address must be entered");
		return false;

	}
	return true;
	
}


</script>

<jsp:include page="Header.jsp"></jsp:include>
<div align="center">
  <form action="RegisterServlet" method="post" name="register" onsubmit="return validateForm()">
 <table  id="table" border=2 bgcolor="Gray" align="center" style="color:white" width="30%">
<tr>
<th align="center"  HEIGHT="50" bgcolor="Maroon" colspan="2">
<label id="head">REGISTRATION</label>
 </th>

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
  <input type="password" name="cpass" onchange="check()">
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
  </div>
  <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>