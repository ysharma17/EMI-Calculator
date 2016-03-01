<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<%@ page contentType="text/html;charset=windows-1252"%>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"/>
   
    
    <title>calInstlAmount</title>
    <style type="text/css">
      body {
      background-color: #a5c6ff; 
}
      a:link { color: #e70000; }
    </style>
  </head>
  <body>
  <jsp:include page="Header.jsp"></jsp:include>
  
  
  <h1>EMI Details</h1>
  <%
  double emi;
  emi=(Double)request.getAttribute("installment");
  double m=(double)Math.round(emi*100)/100;
  %>
  <br><br>
  EMI Amount: <%=m %>
 
 
  <jsp:include page="Footer.html"></jsp:include>
  </body>
</html>