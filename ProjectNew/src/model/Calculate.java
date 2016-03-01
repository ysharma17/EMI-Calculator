package model;

import java.sql.*;

public class Calculate 
{
	public double CalEmi(LoanDetail lpd)
	{
		double PAmt=lpd.getPAmt();
		double roi=lpd.getRoi();
		int tenure=lpd.getTenure();
		double RV=lpd.getRV();
		int NoI=lpd.getNoOfInst();
		double i=roi/100;
		double emi=(((PAmt*(i/NoI))-((RV*(i/NoI))/Math.pow((1+(i/NoI)),tenure)))/(1-(1/(Math.pow((1+(i/NoI)),tenure)))));		
		return emi;
	}
	
	
	public LoanSchedule PIComCal(LoanDetail lpd,int i,double emi)
	{
		
		
		LoanSchedule lsd=new LoanSchedule();
		
		lsd.setOpBal(lpd.getPAmt());
		lsd.setInstNo(i);
		lsd.setEmi(emi);
		
		double x=(lpd.getPAmt()*lpd.getRoi())/(lpd.getNoOfInst()*100);
        lsd.setICom(x);
        double y=lsd.getEmi()-x;
        lsd.setPCom(y);
        
        double z=lpd.getPAmt()-y;
        lsd.setClBal(z);
  		return lsd;
	}
	
	public double ForeCalPenalty(String loanID,String dueDate,double prepaypen,Connection con) 
    {
        double penalty=0.0;
        try 
        {
            double clBal;
            String date=dueDate;
            ConnectionDB cdb=new ConnectionDB();
            String loanid=loanID;
            ResultSet rs=cdb.Read(loanid,date,con);
            while(rs.next())
            {
            	clBal=rs.getDouble("clbal");
            	penalty=((prepaypen/100) *clBal);
            	System.out.println(penalty);
            }           
         }
         catch (SQLException e) {
            e.printStackTrace();
            
        }
        return penalty;
        
    }
	public double ForeCalAmount(String loanID,String dueDate,double prepaypen,Connection con) 
    {
        double penaltyBal=0.0;
        try 
        {
            double clBal;
            String date=dueDate;
            ConnectionDB cdb=new ConnectionDB();
            String loanid=loanID;
        
            ResultSet rs=cdb.Read(loanid,date,con);
            while(rs.next())
            {
            	clBal=rs.getDouble("clbal");
            	penaltyBal=((prepaypen/100) *clBal)+clBal;
            	System.out.println(penaltyBal);
            }           
         }
         catch (SQLException e) {
            e.printStackTrace();
            
        }
        return penaltyBal;
        
    }
	public double ForeCalPenalty(String loanID,int instNo,double prepaypen,Connection con) 
    {
        double penalty=0.0;
        try 
        {
            double clBal;
            ConnectionDB cdb=new ConnectionDB();
            String loanid=loanID;
            ResultSet rs=cdb.Read(loanid,instNo,con);
            while(rs.next())
            {
            	clBal=rs.getDouble("clbal");
            	penalty=((prepaypen/100) *clBal);
            	System.out.println(penalty);
            }           
         }
         catch (SQLException e) {
            e.printStackTrace();
            
        }
        return penalty;
        
    }
	public double ForeCalAmount(String loanID,int instNo,double prepaypen,Connection con) 
    {
        double penaltyBal=0.0;
        try 
        {
            double clBal;
            ConnectionDB cdb=new ConnectionDB();
            String loanid=loanID;
        
            ResultSet rs=cdb.Read(loanid,instNo,con);
            while(rs.next())
            {
            	clBal=rs.getDouble("clbal");
            	penaltyBal=((prepaypen/100) *clBal)+clBal;
            	System.out.println(penaltyBal);
            }           
         }
         catch (SQLException e) {
            e.printStackTrace();
            
        }
        return penaltyBal;
        
    }
	
}
