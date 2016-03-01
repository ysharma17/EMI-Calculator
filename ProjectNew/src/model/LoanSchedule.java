package model;

public class LoanSchedule 
{
	String loanId;
	int instNo;
	String dueDate;
	double opBal;
	double pCom;
	double iCom;
	double emi;
	double clBal;
	int status;

	    public LoanSchedule() {
	    }
	    
	    public LoanSchedule(String str) 
	    {
	    	String temp[]=new String[9];
	    	temp=str.split(" ");	    	
	    	this.loanId = temp[0];
			this.instNo = Integer.parseInt(temp[1]);
			this.dueDate = temp[2];
			this.opBal = Double.parseDouble(temp[3]);
			this.pCom = Double.parseDouble(temp[4]);
			this.iCom = Double.parseDouble(temp[5]);
			this.emi = Double.parseDouble(temp[6]);
			this.clBal = Double.parseDouble(temp[7]);
			this.status = Integer.parseInt(temp[8]);
	    }
	    public LoanSchedule(String loanId, int instNo, String dueDate,
				double opBal, double pCom, double iCom, double emi,
				double clBal, int status) {
			super();
			this.loanId = loanId;
			this.instNo = instNo;
			this.dueDate = dueDate;
			this.opBal = opBal;
			this.pCom = pCom;
			this.iCom = iCom;
			this.emi = emi;
			this.clBal = clBal;
			this.status = status;
		}


		public void setLoanId(String loanId) {
	        this.loanId = loanId;
	    }

	    public String getLoanId() {
	        return loanId;
	    }

	    public void setInstNo(int instNo) {
	        this.instNo = instNo;
	    }

	    public int getInstNo() {
	        return instNo;
	    }

	    public void setDueDate(String dueDate) {
	        this.dueDate = dueDate;
	    }

	    public String getDueDate() {
	        return dueDate;
	    }

	    public void setOpBal(double opBal) {
	        this.opBal = opBal;
	    }

	    public double getOpBal() {
	        return opBal;
	    }

	    public void setPCom(double pCom) {
	        this.pCom = pCom;
	    }

	    public double getPCom() {
	        return pCom;
	    }

	    public void setICom(double iCom) {
	        this.iCom = iCom;
	    }

	    public double getICom() {
	        return iCom;
	    }

	    public void setEmi(double emi) {
	        this.emi = emi;
	    }

	    public double getEmi() {
	        return emi;
	    }

	    public void setClBal(double clBal) {
	        this.clBal = clBal;
	    }

	    public double getClBal() {
	        return clBal;
	    }

	    public void setStatus(int status) {
	        this.status = status;
	    }

	    public int getStatus() {
	        return status;
	    }


		@Override
		public String toString() {
			return loanId + " " + instNo+ " " + dueDate + " " + opBal + " "	+ pCom + " " + iCom + " " + emi + " "+ clBal + " " + status;
		}
}
