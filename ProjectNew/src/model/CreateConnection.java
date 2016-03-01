package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public  class CreateConnection {
    public CreateConnection() 
    {
    
        
    }
    
    public static Connection getConnection()
    {
    Connection con=null;
        try
        {
            Class.forName("oracle.jdbc.driver.OracleDriver");
        
          con=DriverManager.getConnection("jdbc:oracle:thin:@finn:1521:orcl","hr","hr");
         System.out.println("connection created");
        }
        catch(ClassNotFoundException e) {
            e.printStackTrace();
        }
        catch(SQLException e) {
            e.printStackTrace();
        }
        return con;
    }
    
}
