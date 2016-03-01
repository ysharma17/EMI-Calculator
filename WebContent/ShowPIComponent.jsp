<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"%>
<%@ page import="model.*"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
    <title>BreakupInstallment</title>
    
  </head>
  <body>
 <jsp:include page="Header.jsp"></jsp:include>
  
  <h1>Breakup Installment</h1>
  
  <table border='2'>
  <tr><th>Installment No</th>
  <th>Loan Amount</th>
  <th>EMI</th>
  <th>Principal Component</th>
  <th>Interest Component</th>
  <th>OutStanding Principal</th></tr>
  <%
        LoanSchedule rps=new LoanSchedule();
        rps=(LoanSchedule)request.getAttribute("pAndI");
 %>    
    
  <tr>
  <td align="right"><%=rps.getInstNo()%></td>
  <td align="right"><%=Calculate.round(rps.getOpBal())%></td>
  <td align="right"><%=Calculate.round(rps.getEmi())%></td>
  <td align="right"><%=Calculate.round(rps.getPCom())%></td>
  <td align="right"><%=Calculate.round(rps.getICom())%></td>
  <td align="right"><%=Calculate.round(rps.getClBal())%></td></tr>
 </table>
 
 
<br><br><br>
<form action="index.jsp"  method="post">
<input type="submit" value="Exit"/>
</form>
 <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>