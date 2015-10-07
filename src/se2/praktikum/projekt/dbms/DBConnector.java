package se2.praktikum.projekt.dbms;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.core.io.ClassPathResource;


/**
 * Stellt eine Verbindung zur Oracle-Datenbank her
 * @author Jan	
 *
 */
public class DBConnector {

 	private static String aKennung;		
 	private static String passwort;
 	
	private static Connection connection;
 	private static String url;
 	private static String driver;
 	
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
            	getUserDBData();
            	Class.forName(driver);
            	connection = DriverManager.getConnection(url, aKennung, passwort);
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

	private static void getUserDBData() {
		
		ClassPathResource resource = new ClassPathResource("database.config");
		
		List<String> databaseInfo = new ArrayList<>();
		Scanner sc;
		try {
			File file = resource.getFile();
			sc = new Scanner(file);
			while(sc.hasNext()){
				
				String [] data = sc.nextLine().split("=");
				databaseInfo.add(data[1]);
			}
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		// database[0] = driver, database[1] = url, database[2] = A-Kennung, database[3] = Passwort
		
		driver = databaseInfo.get(0);
		url = databaseInfo.get(1);
		aKennung = databaseInfo.get(2);
		passwort = databaseInfo.get(3);
		
	}
}
