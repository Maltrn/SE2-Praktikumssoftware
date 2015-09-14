package se2.praktikum.projekt.controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


/**
 * Stellt eine Verbindung zur Oracle-Datenbank her
 * @author Jan	
 *
 */
public class DBConnector {
	
 	// ==============================================================================================
 	private final static String A_KENNUNG = "A-Kennung";		// Hier A-Kennung eintragen.
 	private final static String PASSWORT = "Passwort";			// Hier zugehöriges Passwort eintragen.
 	// ==============================================================================================
 
 	
	private static Connection connection = null;
 	private final static String URL = "jdbc:oracle:thin:@ora14.informatik.haw-hamburg.de:1521:inf14";
 	private final static String DRIVER = "oracle.jdbc.driver.OracleDriver";
 	
    public static Connection getConnection() 
    {
    	if (connection != null)
    	{
    		return connection;
    	}
        else 
        {
            try 
            {
            	Class.forName(DRIVER);
            	connection = DriverManager.getConnection(URL, A_KENNUNG, PASSWORT);
            } 
            catch (ClassNotFoundException e) 
            {
            	e.printStackTrace();
            } 
            catch (SQLException e) 
            {
            	e.printStackTrace();
            }
            return connection;
        }
    }
}
