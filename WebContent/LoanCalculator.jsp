<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="model.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>


<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Loan Calculator</title>

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
    
 
    <script type="text/javascript">
    function Select(number) {
    alert("hello");
    
    if((number==1) || (number==2)) 
    {
       document.getElementById("table").style.display="block";
        document.getElementById("LoanAmt").style.display = "block";
        document.getElementById("roi").style.display = "block";
        document.getElementById("Tenure").style.display = "block";
        document.getElementById("Installments").style.display = "block";
        document.getElementById("RV").style.display = "block";
        document.getElementById("loan").style.display = "block";
        document.getElementById("res").style.display = "block";
        document.getElementById("ninst").style.display = "block";
        document.getElementById("rate").style.display = "block";
        document.getElementById("ten").style.display = "block";
        document.getElementById("button1").style.display = "block";
        document.getElementById("NthInst").style.display = "none";
        document.getElementById("instno").style.display = "none";
        document.getElementById("head").style.display = "block";
       
  
           //document.getElementById("td1").style.display = 'block';
           //document.getElementById("td2").style.display = 'block';
    }
    
  
    
    else if(number==3)
    {
        document.getElementById("LoanAmt").style.display = "block";
        document.getElementById("roi").style.display = "block";
        document.getElementById("Tenure").style.display = "block";
        document.getElementById("Installments").style.display = "block";
        document.getElementById("RV").style.display = "block";
        document.getElementById("loan").style.display = "block";
        document.getElementById("res").style.display = "block";
        document.getElementById("ninst").style.display = "block";
        document.getElementById("rate").style.display = "block";
        document.getElementById("ten").style.display = "block";
        document.getElementById("NthInst").style.display = "block";
     document.getElementById("instno").style.display = "block";
    }
    if(number==1)
    {
    document.getElementById("button1").value = "Calculate EMI";
    }
    if(number==2)
    {
    document.getElementById("button1").value = "Show Schedule";
    }
     if(number==3)
    {
    document.getElementById("button1").value = "Show P And I Components";
    }
 
    else 
    {
        return true;
    }
}
    </script>
    
    
    <script type="text/javascript">

    
    function HideAll()
    {
        document.getElementById("LoanAmt").style.display = "none";
        document.getElementById("roi").style.display = "none";
        document.getElementById("Tenure").style.display = "none";
        document.getElementById("Installments").style.display = "none";
        document.getElementById("RV").style.display = "none";
        document.getElementById("NthInst").style.display = "none";
        document.getElementById("loan").style.display = "none";
        document.getElementById("res").style.display = "none";
        document.getElementById("ninst").style.display = "none";
        document.getElementById("rate").style.display = "none";
        document.getElementById("instno").style.display = "none";
        document.getElementById("ten").style.display = "none";
        document.getElementById("head").style.display = "none";
        document.getElementById("button1").style.display = "none";
        document.getElementById("table").style.display="none";
       //document.getElementById("table").style.display = "none";
        //document.getElementById("tr1").style.display = 'none';
            
         return true;
    }

</script>


</head>


<body onload="HideAll()">
<jsp:include page="Header.jsp"></jsp:include>
<br>
<br>
<div align="center">
Select the Activity to implement:
<br>
<br>
<input type="radio" id="1" name="op" value="calEmi" onclick="Select('1')"/>Calculate EMI
<br>
<br>

<input type="radio" id="2" name="op" value="schedule" onclick="Select('2')"/>Show Schedule
<br>
<br>

<input type="radio" id="3" name="op" value="nthpi" onclick="Select('3')"/>Nth Principal and Interest Component
<br>
<br>

<form name="myForm" action="Process" onsubmit="return validateForm()" method="post">

<table  id="table" border=5 bgcolor="Gray" align="center" style="color:white" width="50%">
<tr>
<th align="center"  HEIGHT="50" bgcolor="Maroon" colspan="2">
<label id="head"> EMI CALCULATOR</label>
 </th>
</tr>
<tr >
<td >
	<strong><label id="loan">ENTER THE LOAN AMOUNT</label></strong>
</td>
<td >
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
<tr id="tr3">
<td>
	<strong><label id="ten">ENTER THE TENURE</label></strong>
</td>
<td>
	<input type="text" id="Tenure" name="Tenure" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr id="tr4">
<td>
	<strong><label id="ninst">ENTER THE NO OF INSTALLMENTS PER YEAR</label></strong>
</td>
<td>
	<input type="text" id="Installments" name="Installments" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr id="tr5">
<td>
	<strong><label id="res">ENTER THE RESIDUE VALUE(OPTIONAL)</label></strong>
</td>
<td>
<input type="text" id="RV" name="RV" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr id="tr6">
<td>
	<strong><label id="instno">ENTER THE INSTALLMENT NO.(IN CASE OF SPLITTING)</label></strong>
</td>
<td>
	<input type="text" id="NthInst" name="NthInst" onkeypress="return isNumberKey(this)"/>
</td>
</tr>
<tr id="tr7">
<td colspan=2>
	<input type="submit" value="" name="b1" id="button1"/>
</td>
</tr>
</table>
</form>
</div>
<jsp:include page="Footer.html"></jsp:include>
</body>
</html>