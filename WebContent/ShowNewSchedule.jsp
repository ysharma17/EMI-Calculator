<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"%>
<%@ page import="model.*"%>
<%@ page import="java.util.*,java.sql.*"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
    <title>repaymentSchedule</title>
    <style type="text/css">
      body {
      background-color: #a5c6ff; 
}
      a:link { color: #e70000; }
    </style>
  </head>
  <body>
  <jsp:include page="Header.jsp"></jsp:include>
 
  <h1>RePayment Schedule</h1>
  <%
  	   ArrayList<LoanSchedule> arr=new ArrayList<LoanSchedule>();
       ListSchedule lst=new ListSchedule();
       LoanSchedule rps=new LoanSchedule();
       lst=(ListSchedule)request.getAttribute("ls");
       arr=lst.getArr();
       LoanDetail lpd=new LoanDetail();
       lpd=(LoanDetail)request.getAttribute("lpd");
       System.out.println(lpd);
 %>               
<table border='2'>
  <tr><th>Installment No</th>
  <th>Loan Amount</th>
  <th>EMI</th>
  <th>Principal Component</th>
  <th>Interest Component</th>
  <th>OutStanding Principal</th></tr>
  <%
  
  for(int i=0;i<arr.size();i++)
  {
    rps=arr.get(i);
    double opbal=rps.getOpBal();
    double emi=rps.getEmi();
    double pcom=rps.getPCom();
    double icom=rps.getICom();
    double cBal=rps.getClBal();		
    
%>
  <tr>
  <td align="right"><%=rps.getInstNo()%></td>
  <td align="right"><%=Calculate.round(opbal)%></td>
  <td align="right"><%=Calculate.round(emi)%></td>
  <td align="right"><%=Calculate.round(pcom)%></td>
  <td align="right"><%=Calculate.round(icom)%></td>
  <td align="right"><%=Calculate.round(cBal)%></td></tr>
  
<%}%>

</table>
  

<form name="myForm" action="SaveSchedule" method="post">
<%
Connection con=CreateConnection.getConnection();
ConnectionDB cdb=new ConnectionDB();
CustDetail cd=new CustDetail();
cd=(CustDetail)session.getAttribute("cd"); 
	String action=null;
if(cd==null){}

else if(cd.getDesignation().equals("Customer"))
	{ 
		action="1";	
		
		%>
				<strong>Select Loan Type</strong>
				<select name="Type">
				<%
				ResultSet rs=cdb.ReadPrePayPen(con);
				while(rs.next())
				{
					out.println("<option value="+rs.getString("type")+">"+rs.getString("type")+"</option>");
				}
				%>
				</select>
<%	}
	 
else if(cd.getDesignation().equals("Admin"))
	{
		action="0";
		ResultSet rs=cdb.Read(con);
%>
		<strong>Select Customer Id</strong>
		<select name="CustId">
		<%
		while(rs.next())
		{
			out.println("<option value="+rs.getString("custId")+">"+rs.getString("custId")+"</option>");
		}
		%>
		</select>
	<%	ResultSet rs1=cdb.ReadPrePayPen(con);
	%>
				<strong>Select Loan Type</strong>
				<select name="Type">
				<%
				while(rs1.next())
				{
					out.println("<option value="+rs1.getString("type")+">"+rs1.getString("type")+"</option>");
				}
				%>
				</select>
		
		
		
<%	}
%>



<%if(cd!=null){ %>


Select Loan Starting Date:
  
<select name="mon" onChange="changeDate(this.options[selectedIndex].value);">
<option value="na">Month</option>
<option value="Jan">1</option>
<option value="Feb">2</option>
<option value="Mar">3</option>
<option value="Apr">4</option>
<option value="May">5</option>
<option value="Jun">6</option>
<option value="Jul">7</option>
<option value="Aug">8</option>
<option value="Sep">9</option>
<option value="Oct">10</option>
<option value="Nov">11</option>
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
y = 2013;

while (y++<2200){
var s = document.createElement('option');
var e = document.getElementById('year');
s.text=y;
s.value=y;
try{
e.add(s,null);}
catch(ex){
e.add(s);}}
</script>
  

<input type="hidden" name="lpd" value="<%=lpd.toString() %>"/>
<input type="hidden" name="request" value="<%=action%>"/>
<br>						
<br>
<input type="submit" value="Save" /><br/>

<%}%>

</form>
<br><br>
<form action="index.jsp"  method="post">
<input type="submit" value="Exit"/>
</form>
  <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>