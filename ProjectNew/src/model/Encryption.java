package model;

import java.security.MessageDigest;

import sun.misc.BASE64Encoder;

public class Encryption {

	public static String encrypt(String plaintext,String algorithm, String encoding) {
        MessageDigest msgDigest = null;
        String hashValue = null;
      try
      {
            msgDigest = MessageDigest.getInstance(algorithm);
            msgDigest.update(plaintext.getBytes(encoding));
            byte rawByte[] = msgDigest.digest();
            hashValue = (new BASE64Encoder()).encode(rawByte);
      }
      catch(Exception e)
      {
    	  
      }
      return hashValue; 
    }
	
	public static void main(String args[])
	{
		System.out.println(encrypt("TAYAL", "SHA-384", "UTF-16"));
	}
	
}


