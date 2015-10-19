package se2.praktikum.projekt.services.veranstaltungsservice;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import se2.praktikum.projekt.dbms.DBConnector;
import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.person.Professor;
import se2.praktikum.projekt.models.person.fachwerte.*;
import se2.praktikum.projekt.models.veranstaltung.*;

public class VeranstaltungsVerwalterSrv {
	private Connection connection;
	
	//Die Namen, die benötigt werden:
	//tables:
	private String _veranstaltungFachbereich = "";
	private String _veranstaltungGeleitetVon = "";
	private String _veranstaltungStudenten = "";
	private String _veranstaltungGruppen = "";
	//columns
	private String _fachkuerzel = ""; 
	private String _semester = "";
	private String _anzTeiln = "";
	private String _minTeiln = "";
	private String _maxTeiln = "";
	private String _teamKap = "";
	private String _anzGr = "";
	private String _maxGr = "";
	
	
	
	public VeranstaltungsVerwalterSrv(Person user) {
		
	}
	
	public void connect(){
		connection = DBConnector.getConnection();
	}
	public void setKuerzel(Veranstaltung veranstaltung,String fKuerzel)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _fachkuerzel +" = " + fKuerzel +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.getFach().setFachKuerzel(fKuerzel);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setSemester(Veranstaltung veranstaltung,int semester)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _semester +" = " + semester +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.getFach().setSemester(semester);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	
	public void setAnzTeilnehmer(Veranstaltung veranstaltung,int anzTeilnehmer)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _anzTeiln +" = " + anzTeilnehmer +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setAnzTm(anzTeilnehmer);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setMinTeilnehmer(Veranstaltung veranstaltung,int minTeilnehmer)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _minTeiln +" = " + minTeilnehmer+
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setMinTm(minTeilnehmer);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setmaxTeilnehmer(Veranstaltung veranstaltung,int maxTeilnehmer)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _maxTeiln +" = " + maxTeilnehmer +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setMaxTm(maxTeilnehmer);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setTeamKap(Veranstaltung veranstaltung,int teamKap)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _teamKap +" = " + teamKap+
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setTeamKap(teamKap);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setAnzGr(Veranstaltung veranstaltung,int anzGr)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _anzGr +" = " + anzGr +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setAnzGr(anzGr);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	public void setMaxGr(Veranstaltung veranstaltung,int maxGr)
	{
		String fachkuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "UPDATE Veranstaltung SET" + _maxGr +" = " + maxGr +
				" WHERE "+ _fachkuerzel + " = "+ fachkuerzel;
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			veranstaltung.setMaxGr(maxGr);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	
	public Veranstaltung createPraktikum()
	{
		Veranstaltung veranstaltung = new Praktikum();
		Statement statement = null;
		String qry = "insert into Veranstaltung Values()";
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return veranstaltung;
	}
	//Veranstaltungobjekt wird mit übergeben
	public Veranstaltung createWP()
	{
		Veranstaltung veranstaltung = new WP();
		Statement statement = null;
		String qry = "insert into Veranstaltung Values()";
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return veranstaltung;
	}
	public Veranstaltung createProjekt()
	{
		Veranstaltung veranstaltung = new Projekt();
		Statement statement = null;
		String qry = "insert into Veranstaltung Values()";
		
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return veranstaltung;
	}
	
	//
	public void deleteVeranstaltung(Veranstaltung veranstaltung)
	{
		String kuerzel = veranstaltung.getFach().getFachKuerzel();
		Statement statement = null;
		String qry = "delete from Veranstaltung where "+ _fachkuerzel + " = "+ kuerzel;
		// wenn nicht auf cascade gesetzt:
		String qry1 = "delete from" +  _veranstaltungFachbereich + 
						" where "+ _fachkuerzel + " = "+ kuerzel;
		String qry2 = "delete from" +  _veranstaltungGeleitetVon + 
				" where "+ _fachkuerzel + " = "+ kuerzel;
		String qry3 = "delete from" +  _veranstaltungStudenten + 
				" where "+ _fachkuerzel + " = "+ kuerzel;
		String qry4 = "delete from" +  _veranstaltungGruppen + 
				" where "+ _fachkuerzel + " = "+ kuerzel;
		try 
		{
			statement = connection.createStatement();
			statement.execute(qry);
			statement.execute(qry1);
			statement.execute(qry2);
			statement.execute(qry3);
			statement.execute(qry4);
			statement.close();
		}			
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
	}
	
	// TO DO!!
	public List<String> getAlleFachkuerzel()
	{
		return null;
	}
}
