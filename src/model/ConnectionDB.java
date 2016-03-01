package model;

import java.sql.*;
import java.util.*;

public class ConnectionDB {
	
    public ConnectionDB() {
    }
    
    public ResultSet Read(Connection con)
    {
    	ResultSet rs=null;
        try
        {
        
            
            Statement stmt=con.createStatement();
            rs= stmt.executeQuery("select custid from CustDetails");
        }    
        catch(SQLException e) 
        {
            e.printStackTrace();
        }
        return rs;
    }
    
    public ResultSet Read(Connection con,String loanId)
    {
    	ResultSet rs=null;
		try 
		{
			 
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from LoanDetail where loanid='"+loanId+"'");
			
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }
    
    public String ConDate(String date)
    {
    	String[] temp=new String[3];
        temp=date.split("-");
        date=temp[2];
        ArrayList<String> arr=new ArrayList<String>();
        arr.add("Jan");
        arr.add("Feb");
        arr.add("Mar");
        arr.add("Apr");
        arr.add("May");
        arr.add("Jun");
        arr.add("Jul");
        arr.add("Aug");
        arr.add("Sep");
        arr.add("Oct");
        arr.add("Nov");
        arr.add("Dec");
        int i=Integer.parseInt(temp[1]);
        date=temp[2]+"-"+arr.get(i-1)+"-"+temp[0];
        return date;
    }
    
    public String Read(String date,int ninst,int value,Connection con) 
    {
        String result=" ";
        try 
        {
            String str=null;
         
           if(ninst==12) {
               str="'1' month";
           }
           else if(ninst==1)
           {
        	   str="'1' year";
           }
           else if(ninst==2)
           {
        	   str="'6' month";
           }
           else if(ninst==3)
           {
        	   str="'4' month";
           }
           else if(ninst==4) {
               str="'3' month"; 
           }
           else if(ninst==6)
           {
        	   str="'2' month";
           }
           else if(ninst==24) {
               str="'15' day";
           }
           else {
               str=" '7' day";
           }
           
           
           
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select to_date('"+date+"','dd-mon-yyyy') + interval "+str+" from dual");
            rs.next();
            result=rs.getDate(1).toString();
            result=ConDate(result);
            if(value==1)
            {
            	rs=stmt.executeQuery("select to_date('"+result+"','dd-mon-yyyy') + interval '1' day from dual");
                rs.next();
                result=rs.getDate(1).toString();
                result=ConDate(result);	
            }
          rs.close();  
          
        }
        catch (SQLException e) {
        	result="1";
        	
        }
        System.out.println(result);
        return result;
    }
    
    public ResultSet Read(String loanId,Connection con)
    {
    	
    	ResultSet rs=null;
		try 
		{
			 
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from LoanDetail where loanid='"+loanId+"'");
			
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }
    
    public ResultSet Read(String loanId,String date,Connection con)
    {
    	ResultSet rs=null;
		try 
		{
			 
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from loanschedule where loanid='"+loanId+"'and dueda" +
									"te<='"+date+"' and status=(select max(status) from loanschedule" +
									" where loanid='"+loanId+"') order by loanid,status,instno");
			
			System.out.println("select * from loanschedule where loanid='"+loanId+"'and dueda" +
									"te<='"+date+"' and status=(select max(status) from loanschedule" +
									" where loanid='"+loanId+"') and clbal=(select min(clbal)" +
									" from loanschedule where loanid='"+loanId+"' and duedate<='"+date+"') " +
									"order by loanid,status,instno");
			
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }
    
    public ResultSet Read(String loanId,int instNo,Connection con)
    {
    	ResultSet rs=null;
		try 
		{
			 
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from loanschedule where loanid='"+loanId+"'and instno='"+instNo+"'" +
							" and status=(select max(status) from loanschedule where loanid='"+loanId+"')");
			System.out.println("select * from loanschedule where loanid='"+loanId+"'and instno='"+instNo+"'" +
							" and status=(select max(status) from loanschedule where loanid='"+loanId+"')");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }
    
    public ResultSet Read(Connection con,String user,String pass)
    {
    	
    	ResultSet rs=null;
		try 
		{
			 
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from custdetails where username='"+user+"'and userpwd='"+pass+"'");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }
    
    public ResultSet ReadUserName(String username,Connection con)
    {
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from custdetails where username ='"+username+"'");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return rs;
    }
    
    public String ReadCustId(Connection con)
    {
    	String custId=null;
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select lpad(seqcustid.nextval,11,'0') from dual");
			rs.next();
			custId="SYNAT"+rs.getString(1);
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return custId;
    }
    
    public String ReadLoanId(Connection con)
    {
    	String loanId=null;
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select lpad(seqloanid.nextval,11,'0') from dual");
			rs.next();
			loanId="SYNAT"+rs.getString(1);
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return loanId;
    }
    
    public double ReadPrePayPen(Connection con,String type)
    {
    	double prePayPen=0.0;
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select prepaypen from pppenalty where type='"+type+"'");
			rs.next();
			prePayPen=rs.getDouble("PREPAYPEN");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return prePayPen;
    }
    
    public ResultSet ReadPrePayPen(Connection con)
    {
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select type from pppenalty");
			
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	return rs;
    }

    public ResultSet ReadLoanId(Connection con,String custId,int request)
    {
    	String tableName=null;
    	if(request==1)
    	{
    		tableName="TEMPLoanDetail";
    	}
    	else
    	{
    		tableName="LoanDetail";
    	}
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select DISTINCT(loanid) from "+tableName+" where custid='"+custId+"' and  status!=0");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return rs;
    }
    
    public ResultSet ReadLoanIdAll(Connection con,int request)
    {
    	String tableName=null;
    	if(request==1)
    	{
    		tableName="TEMPLoanDetail";
    	}
    	else
    	{
    		tableName="LoanDetail";
    	}
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select DISTINCT(loanid) from "+tableName+" where status!=0 ");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return rs;
    }
    
    public ResultSet ReadSchedule(Connection con,String LoanId,int request)
    {
    	String tableName=null;
    	if(request==1)
    	{
    		tableName="TEMPLOANSCHEDULE";
    	}
    	else
    	{
    		tableName="LOANSCHEDULE";
    	}
    	ResultSet rs=null;
		try 
		{
			Statement stmt=con.createStatement();
			rs = stmt.executeQuery("select * from "+tableName+" where loanid='"+LoanId+"' ORDER BY LOANID,STATUS,INSTNO");
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
    	
    	return rs;
    }
    
    public void Write(LoanDetail lpd,Connection con,int request)
    {

    	String tableName=null;
    	if(request==1)
    	{
    		tableName="TEMPLOANDETAIL";
    	}
    	else if(request==0)
    	{
    		tableName="LOANDETAIL";
    	}
    
        try {
            PreparedStatement pstmt=con.prepareStatement("insert into "+tableName+" (LoanId,custId ,prepaypen,Roi,NoOfInst," +
            		"Tenure,RV,PAmt,status) values(?,?,?,?,?,?,?,?,?)");
          
            pstmt.setString(1,lpd.getLoanId());
            pstmt.setString(2, lpd.getCustId());
            pstmt.setDouble(3, lpd.getPrePayPen());
            pstmt.setDouble(4,lpd.getRoi());
            pstmt.setInt(5,lpd.getNoOfInst());
            pstmt.setInt(6,lpd.getTenure());
            pstmt.setDouble(7,lpd.getRV());
            pstmt.setDouble(8,lpd.getPAmt());
            pstmt.setInt(9, lpd.getStatus());
            int nRows=pstmt.executeUpdate();
            System.out.println(nRows+"inserted");
            pstmt.close();
            
        }
        catch (SQLException e) {
            e.printStackTrace();

        }
    }

    public int Write(LoanSchedule lsd,Connection con,int request){
    	
    	int flag=0;
    	 
    	String tableName=null;
    	if(request==1)
    	{
    		tableName="TEMPLOANSCHEDULE";
    	}
    	else
    	{
    		tableName="LOANSCHEDULE";
    	}
        try 
        {
        	PreparedStatement pstmt=con.prepareStatement("insert into "+tableName+" (LoanId,InstNo,DueDate,OpBal,PCom,ICom," +
        												"Emi,ClBal,Status) values(?,?,?,?,?,?,?,?,?)");
        
            pstmt.setString(1,lsd.getLoanId());
            pstmt.setInt(2,lsd.getInstNo());
            pstmt.setString(3,lsd.getDueDate());
            pstmt.setDouble(4,lsd.getOpBal());
            pstmt.setDouble(5,lsd.getPCom());
            pstmt.setDouble(6,lsd.getICom());
            pstmt.setDouble(7,lsd.getEmi());
            pstmt.setDouble(8,lsd.getClBal());
            pstmt.setInt(9,lsd.getStatus());
            
            int nRows=pstmt.executeUpdate();
            System.out.println(nRows+"inserted");
            pstmt.close();
            
        }
        catch (SQLException e) 
        {
        	flag=1;
        }
        
        return flag;
    }
    
    public void Write(CustDetail cd,Connection con){

        try {
            PreparedStatement pstmt=con.prepareStatement("insert into CustDetails (CUSTID,USERNAME," +
            		"USERPWD,DESIGNATION,CUSTNAME,GENDER,CONTACTno,ADDRESS) values(?,?,?,?,?,?,?,?)");
            pstmt.setString(1,cd.getCustId());
            pstmt.setString(2,cd.getUserName());
            pstmt.setString(3, cd.getUserPwd());
            pstmt.setString(4,cd.getDesignation());
            pstmt.setString(5,cd.getCustName());
            pstmt.setString(6, cd.getGender());
            pstmt.setString(7,cd.getContactNo());
            pstmt.setString(8,cd.getAddress());
            
           
            int nRows=pstmt.executeUpdate();
            System.out.println(nRows+"  inserted");
            pstmt.close();
            
        }
        catch (SQLException e) {
            e.printStackTrace();

        }
    }
 
    public void Write(String loanId,Connection con)
    {
    	try {
            Statement stmt=con.createStatement();
            
            String str="update loandetail set status=0 where loanid='"+loanId+"' and status=(select max(Status)" +
            						" from loanschedule where loanid='"+loanId+"')";
            int nRows=stmt.executeUpdate(str);
            System.out.println(nRows+"  updated");
            stmt.close();            
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
   
    public void Write(double ppp,String type,Connection con)
    {
    	try {
            Statement stmt=con.createStatement();
            
            String str="update pppenalty set prepaypen="+ppp+" where type='"+type+"'";
            System.out.println(str);
            int nRows=stmt.executeUpdate(str);
            System.out.println(nRows+"  updated");
            stmt.close();
            
        }
        catch (SQLException e) {
            e.printStackTrace();

        }
    }
    
    public void WriteTemp(String loanId,Connection con)
    {
    	try {
            Statement stmt=con.createStatement();
            
            String str="insert into loandetail (select * from temploandetail where loanid='"+loanId+"')";
            String str1="insert into loanschedule (select * from temploanschedule where loanid='"+loanId+"')";
            int nRows=0;
            
            nRows=stmt.executeUpdate(str);
            	System.out.println(nRows+"  updated");
            nRows=stmt.executeUpdate(str1);
            	System.out.println(nRows+"  updated");
            stmt.close();
            
        }
        catch (SQLException e) {
            e.printStackTrace();

        }
    }
    
    public void Delete(String loanId,Connection con)
    {
    	try {
            Statement stmt=con.createStatement();
            
            String str="delete from temploandetail where loanid='"+loanId+"'";
            String str1="delete from temploanschedule where loanid='"+loanId+"'";
            
            int nRows=0;
            
            nRows=stmt.executeUpdate(str);
                System.out.println(nRows+"  deleted");
            nRows=stmt.executeUpdate(str1);
            	System.out.println(nRows+"  deleted");
            stmt.close();
            
        }
        catch (SQLException e) {
            e.printStackTrace();

        }
    }
    
    
}
