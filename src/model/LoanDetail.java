package model;

public class LoanDetail {
    String loanId;
    String custId;
    double prePayPen;
    double roi;
    int NoOfInst;
    int tenure;
    double RV;
    double pAmt;
    int status;
    public LoanDetail() {
    }
    
    public LoanDetail(String str) {
        String[] temp=new String[9];
        temp=str.split(" ");
        this.loanId=temp[0];
        this.custId=temp[1];
        this.prePayPen=Double.parseDouble(temp[2]);
        this.roi=Double.parseDouble(temp[3]);
        this.NoOfInst=Integer.parseInt(temp[4]);
        this.tenure=Integer.parseInt(temp[5]);
        this.RV=Double.parseDouble(temp[6]);
        this.pAmt=Double.parseDouble(temp[7]);
        this.status=Integer.parseInt(temp[8]);
    }

    public LoanDetail(String loanID,String custID,double prePayPen,double roi,int NoOfInst,int tenure,double RV,double pAmt,int status) 
    {
        this.loanId=loanID;
        this.custId=custID;
        this.prePayPen=prePayPen;
        this.roi=roi;
        this.NoOfInst=NoOfInst;
        this.tenure=tenure;
        this.RV=RV;
        this.pAmt=pAmt;
        this.status=status;
    }
    
    public void setLoanId(String loanID) {
        this.loanId = loanID;
    }

    public String getLoanId() {
        return loanId;
    }

    public void setCustId(String custID) {
        this.custId = custID;
    }

    public String getCustId() {
        return custId;
    }

    public void setPrePayPen(double prePayPen) {
        this.prePayPen = prePayPen;
    }

    public double getPrePayPen() {
        return prePayPen;
    }

    public void setRoi(double roi) {
        this.roi = roi;
    }

    public double getRoi() {
        return roi;
    }

    public void setNoOfInst(int noOfInst) {
        this.NoOfInst = noOfInst;
    }

    public int getNoOfInst() {
        return NoOfInst;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }

    public int getTenure() {
        return tenure;
    }

    public void setRV(double rV) {
        this.RV = rV;
    }

    public double getRV() {
        return RV;
    }

    public void setPAmt(double pAmt) {
        this.pAmt = pAmt;
    }

    public double getPAmt() {
        return pAmt;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getStatus() {
        return status;
    }
    
    public String toString() {
           
            return (loanId+" "+custId+" "+prePayPen+" "+roi+" "+NoOfInst+" "+ tenure+" "+RV+" "+pAmt+" "+status); 
    }
    
    
}
