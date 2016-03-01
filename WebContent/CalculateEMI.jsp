<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Calculate EMI</title>
</head>
<body>
<jsp:include page="Header.jsp"></jsp:include>

<form name="myForm" action="Process" onsubmit="return validateForm()" method="post">
<table>
<tr>
<td>
	<strong><label id="loan">ENTER THE LOAN AMOUNT</label></strong>
</td>
<td>
	<input type="text" id="LoanAmt" name="LoanAmt" onkeypress="return isNumberKey(this)"/>	
</td>
</tr>
<tr>
<td>
	<strong><label id="rate"> ENTER THE RATE OF INTEREST</label></strong>
</td>
<td>
	<input type="text" id="roi" name="roi" onkeypress="return isNumberKey(this)"/>	
</td>
</tr>
<tr>
<td>
	<strong><label id="ten">ENTER THE TENURE</label></strong>
</td>
<td>
	<input type="text" id="Tenure" name="Tenure" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr>
<td>
	<strong><label id="ninst">ENTER THE NO OF INSTALLMENTS PER YEAR</label></strong>
</td>
<td>
	<input type="text" id="Installments" name="Installments" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr>
<td>
	<strong><label id="res">ENTER THE RESIDUE VALUE(OPTIONAL)</label></strong>
</td>
<td>
<input type="text" id="RV" name="RV" onkeypress="return isNumberKey(this)"/>
</td>
</tr>

<tr>
<td colspan=2>
	<input type="submit" value="Calculate EMI" name="b1" id="button1"/>
</td>
</tr>
</table>
</form>

<jsp:include page="Footer.html"></jsp:include>
</body>
</html>