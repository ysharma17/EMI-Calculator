package model;



public class CustDetail 
{
	String custId;
	String userName;
	String userPwd;
	String designation;
	String custName;
	String gender;
	String contactNo;
	String address;
	
	public CustDetail() {
		super();
	}
	
	public CustDetail(String str) {
		String temp[]=new String[8];
		temp=str.split(" ");
		this.custId = temp[0];
		this.userName = temp[1];
		this.userPwd = temp[2];
		this.designation = temp[3];
		this.custName = temp[4];
		this.gender = temp[5];
		this.contactNo = temp[6];
		this.address = temp[7];
	}

	public CustDetail(String custId, String userName, String userPwd,
			String designation, String custName, String gender,
			String contactNo, String address) {
		super();
		this.custId = custId;
		this.userName = userName;
		this.userPwd = userPwd;
		this.designation = designation;
		this.custName = custName;
		this.gender = gender;
		this.contactNo = contactNo;
		this.address = address;
	}
	
	public String getCustId() {
		return custId;
	}
	public void setCustId(String custId) {
		this.custId = custId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String toString() {
		return custId + " " + userName + " " + userPwd + " " + designation + " " + custName + " " + gender + " " + contactNo + " " + address;
	}
	
	
}
