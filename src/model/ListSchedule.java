package model;

import java.util.ArrayList;

public class ListSchedule {

    ArrayList<LoanSchedule> arr=new ArrayList<LoanSchedule>();
    

    public void setArr(ArrayList<LoanSchedule> arr) {
        this.arr = arr;
    }

    public ArrayList<LoanSchedule> getArr() {
        return arr;
    }
    
    public double round(double x) 
         {
             return (double)Math.round(x*100)/100;
         }
}
