<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="model.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript">
function validateForm() {
    var la = document.forms["myForm"]["LoanAmt"].value; 
    var roi= document.forms["myForm"]["roi"].value;
    var t = document.forms["myForm"]["Tenure"].value;
    var noi = document.forms["myForm"]["Installments"].value;
    var rv = document.forms["myForm"]["RV"].value;
    var nthInst= document.forms["myForm"]["NthInst"].value;
  	if (la == null || la == "") {
        alert("LoanAmt cannot be empty");
        return false;
    }
  	if (roi == null || roi == "") {
        alert("Rate of Interest cannot be empty");
        return false;
    }
  	if (t == null || t == "") {
        alert(" Tenure cannot be empty");
        return false;
    }
  	if (noi == null || noi == "") {
        alert(" No of Installments cannot be empty");
        return false;
    }
  	if (rv == null || rv == "") {
        document.getElementById("RV").value=0;
    }
  	if (nthInst == null || nthInst == "") {
  		document.getElementById("NthInst").value=0;
  		return true;
    }
  	
}
</script>
<script type="text/javascript">
function isNumberKey(e)
{
	var keyCode = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;
    var str=e.value;
    if ((str.length==0) && (event.keyCode==46))
    	{
    	alert("First value cannot be a Dot(.)! Please Enter a numeric value!");
    	return false;
    	}
    if ((str.indexOf('.')>=0) && (event.keyCode==46))
    	{
    	alert("Decimal already exist! Please Enter a digit!");
    	return false;
    	}   
    if (keyCode != 46 && keyCode > 31 && (keyCode < 48 || keyCode > 57)) 
   {
       alert("Please Enter Only Numeric Value!");
       return false;
   } 
   return true;
}

    </script>
</head>


<body>

<jsp:include page="Header.jsp"></jsp:include>




<form name="myForm" action="Process" onsubmit="return validateForm()" method="post">


<h2>EMI CALCULATOR</h2>
<table>
<tr>
<td>
	<strong>ENTER THE LOAN AMOUNT</strong>
</td>
<td>
	<input type="text" id="LoanAmt" name="LoanAmt" onkeypress="return isNumberKey(this)"/>
	
</td>
</tr>
<tr>
<td>
	<strong>ENTER THE RATE OF INTEREST</strong>
</td>
<td>
	<input type="text" id="roi" name="roi" onkeypress="return isNumberKey(this)"/>
	
</td>
</tr>
<tr>
<td>
	<strong>ENTER THE TENURE</strong>
</td>
<td>
	<input type="text" id="Tenure" name="Tenure" onkeypress="return isNumberKey(this)"/>
	
</td>
</tr>
<tr>
<td>
	<strong>ENTER THE NO OF INSTALLMENTS PER YEAR</strong>
</td>
<td>
	<input type="text" id="Installments" name="Installments" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr>
<td>
	<strong>ENTER THE RESIDUE VALUE(OPTIONAL)</strong>
</td>
<td>
<input type="text" id="RV" name="RV" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr>
<td>
	<strong>ENTER THE INSTALLMENT NO.(IN CASE OF SPLITTING)</strong>
</td>
<td>
	<input type="text" id="NthInst" name="NthInst" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr>
<td colspan=2>
	<input type="submit" value="Calculate EMI" name="b1"/>
</td>
</tr>
<tr>
<td colspan=2>
<input type="submit" value="Show Schedule" name="b1"/>
</td>
</tr>
<tr>
<td colspan=2>
<input type="submit" value="Show P And I Components" name="b1"/>
</td>
</tr>
</table>

</form>

<jsp:include page="Footer.html"></jsp:include>
</body>
</html>