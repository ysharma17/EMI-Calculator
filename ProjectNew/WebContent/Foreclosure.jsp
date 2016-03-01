<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="model.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>ForeClosure</title>

<script type="text/javascript">
function Select(number) 
{
    
    if((number==1)) 
    {
        document.getElementById("fdate").style.display = "block";
        document.getElementById("mon").style.display = "block";
        document.getElementById("day").style.display = "block";
        document.getElementById("year").style.display = "block";
        
        document.getElementById("123").style.display = "block";
        
        document.getElementById("inst").style.display = "none";
        document.getElementById("instNo").style.display = "none";
        
       // document.getElementById("NthInst").style.display = "block";
        
    }
    else if(number==2)
    {
    	document.getElementById("fdate").style.display = "none";
        document.getElementById("mon").style.display = "none";
        document.getElementById("day").style.display = "none";
        document.getElementById("year").style.display = "none";
        
        document.getElementById("123").style.display = "block";
        
        document.getElementById("inst").style.display = "block";
        document.getElementById("instNo").style.display = "block";
    }
    
}
</script>

<script type="text/javascript">

function HideAll()
    {
        document.getElementById("fdate").style.display = "none";
        document.getElementById("mon").style.display = "none";
        document.getElementById("day").style.display = "none";
        document.getElementById("year").style.display = "none";
        document.getElementById("inst").style.display = "none";
        document.getElementById("instNo").style.display = "none";
        document.getElementById("123").style.display = "none";
            
         return true;
    }

</script>


</head>


<body onload="HideAll()">
<jsp:include page="Header.jsp"></jsp:include>
<h1>FORECLOSURE!!</h1>
<%
CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cd"); 
Connection con=CreateConnection.getConnection();
ConnectionDB cdb=new ConnectionDB();
String action=null;
ResultSet rs=null;
%>
<%if(cd==null)
	{
		response.sendRedirect("index.jsp");
	}
else if(cd.getDesignation().equals("Admin"))
	{ 
		 rs=cdb.ReadLoanIdAll(con,0);
	}
else if(cd.getDesignation().equals("Customer"))
	{
		rs=cdb.ReadLoanId(con,cd.getCustId(),0);
	}
%>
		
	<form action="ForeclosureServlet" method="post">	
		<strong>Select Loan Id</strong>
		<select name="LoanId" >
		<%
		while(rs.next())
		{
			out.println("<option value="+rs.getString("loanid")+">"+rs.getString("loanid")+"</option>");
		}
		%>
		</select><br><br>

Select ForeClosure Method:
<br>
<br>
<input type="radio" id="1" name="op" value="date" onclick="Select('1')"/>Date Selection
<br>
<br>

<input type="radio" id="2" name="op" value="number" onclick="Select('2')"/>Installment Number
<br>
<br>
 <label id="fdate">Select Date</label> 
<select name="mon" id="mon" onChange="changeDate(this.options[selectedIndex].value);">
<option value="na">Month</option><option value="Jan">1</option><option value="Feb">2</option>
<option value="Mar">3</option><option value="Apr">4</option><option value="May">5</option>
<option value="Jun">6</option><option value="Jul">7</option><option value="Aug">8</option>
<option value="Sep">9</option><option value="Oct">10</option><option value="Nov">11</option>
<option value="Dec">12</option>
</select>

<select name="day" id="day">
<option value="na">Day</option>
</select>

<select name="year" id="year">
<option value="na">Year</option>
</select>

<script language="JavaScript" type="text/javascript">
function changeDate(i){
var e = document.getElementById('day');
while(e.length>0)
e.remove(e.length-1);
var j=-1;
if(i=="na")
k=0;
else if(i=="Feb")
k=28;
else if(i=="Apr"||i=="Jun"||i=="Sep"||i=="Nov")
k=30;
else
k=31;
while(j++<k){
var s=document.createElement('option');
var e=document.getElementById('day');
if(j==0){
s.text="Day";
s.value="na";
try{
e.add(s,null);}
catch(ex){
e.add(s);}}
else{
s.text=j;
s.value=j;
try{
e.add(s,null);}
catch(ex){
e.add(s);}}}}
y = 2200;

while (y-->2014){
var s = document.createElement('option');
var e = document.getElementById('year');
s.text=y;
s.value=y;
try{
e.add(s,null);}
catch(ex){
e.add(s);}}
</script>
	
	<label id="inst">Enter Installment Number</label>
	<input type="text" name="instNo" id="instNo"/>
	<input type="submit" name="submit" id="123" value="Submit"/>
	</form>

<jsp:include page="Footer.html"></jsp:include>
</body>
</html>