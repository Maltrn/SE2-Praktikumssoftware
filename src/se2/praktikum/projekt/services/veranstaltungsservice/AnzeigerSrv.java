package se2.praktikum.projekt.services.veranstaltungsservice;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import se2.praktikum.projekt.dbms.DBConnector;
import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.*;
import se2.praktikum.projekt.models.person.fachwerte.MatrikelNr;
import se2.praktikum.projekt.models.veranstaltung.*;

public class AnzeigerSrv 
{
	//alle SQL-Namen sollten hier als Klassenvariablen auftauchen.
	
	private Connection connection;
	
	// Das sind die Table-Namen wie sie sein könnten single point Control:
	private String veranstaltungenHabenGruppen = "";
	private String _veranstaltungPrimary = "";
	private String _FBKuerzel = "";
	private String _fachbereichBezeichnung = "";
	private String _matrikelNummer = "";
	private String _teamNr = "";
	private String _gruppenHabenTeams = "";
	private String _gruppenNr = "";
	private String _semester = "";
	
	public void connect(){
		connection = DBConnector.getConnection();
	}
	public List<Veranstaltung> getAllPraktika(int semester, String fachbereich)
	{
		
		
		List<Fach> pos = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from Veranstaltung where Semester =" + semester
					+ " AND "+ _FBKuerzel + " = " + fachbereich + "And " + _fachbereichBezeichnung + " = Praktikum";
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Fach vrst = new Fach();
				
				vrst.setFachKuerzel(rs.getString("Fachkürzel"));
				vrst.setFachbereich(rs.getString("FACHBEREICH"));
				vrst.setSemester(rs.getInt("SEMESTER"));
				pos.add(vrst);
				
			
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return pos;
	}
	
	public List<Fach> getAllWps(int semester, String fachbereich)
	{
		
		
		List<Fach> pos = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from Veranstaltung where Semester =" + semester
					+ " AND "+ _FBKuerzel + " = " + fachbereich + "And " + _fachbereichBezeichnung + " = WP";
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Fach vrst = new Fach();
				
				vrst.setFachKuerzel(rs.getString(_FBKuerzel));
				vrst.setFachbereich(rs.getString(_fachbereichBezeichnung));
				vrst.setSemester(rs.getInt(_semester));
				pos.add(vrst);
				
			
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return pos;
	}
	//return List<Veranstaltung>
	public List<Fach> getAllPO(int semester, String fachbereich)
	{
		
		
		List<Fach> pos = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from Veranstaltung where Semester =" + semester
					+ " AND "+ _FBKuerzel + " = " + fachbereich + "And " + _fachbereichBezeichnung + " = PO";
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Fach vrst = new Fach();
				
				
				vrst.setFachKuerzel(rs.getString("Fachkürzel"));
				vrst.setFachbereich(rs.getString("FACHBEREICH"));
				vrst.setSemester(rs.getInt("SEMESTER"));
				pos.add(vrst);
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return pos;
	}


	public List<Gruppe> getAllGruppen(@RequestBody Veranstaltung veranstaltung)
	{
		
		
		List<Gruppe> gruppen = new ArrayList<>();
		Statement statement = null;
		String qry = null;
		
 
		 
			qry = "select * from GRUPPE where "+ _gruppenNr +" in (select" + _gruppenNr +" from " + veranstaltungenHabenGruppen +
			"where " + _veranstaltungPrimary +" = "+ veranstaltung.getFach().getFachKuerzel() + ")";
		
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Gruppe grp= new Gruppe();
				grp.setGrpNr(rs.getInt("GRUPPENNR"));
				gruppen.add(grp);
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return gruppen;
	}
	//sollte eig Teamliste zurückgeben und Fachkürzel für select-Befehl auch Kürzel
	public List<Person> getAllTeilnehmer(Gruppe gruppe)
	{
		
		
		List<Person> personen = new ArrayList<>();
		Statement statement = null;
		String qry = "select Distinct * from STUDENT where " + _matrikelNummer + "in (select " + _matrikelNummer +
				" from Team where " + _teamNr + " in (select " + _teamNr + " from " + _gruppenHabenTeams +
				" where " + _gruppenNr + " = " + gruppe.getGrpNr()+"))";
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Student std= new Student();
				std.setMatrNr(MatrikelNr.getMatrikelNr(rs.getInt("MATRNR")));
				std.setVorname(rs.getString("VORNAME"));
				std.setNachname(rs.getString("NACHNAME"));
				personen.add(std);
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return personen;
	}
	
	
	
}