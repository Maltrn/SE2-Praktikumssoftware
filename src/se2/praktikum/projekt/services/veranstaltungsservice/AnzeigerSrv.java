package se2.praktikum.projekt.services.veranstaltungsservice;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
	

import se2.praktikum.projekt.dbms.DBConnector;
import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.*;
import se2.praktikum.projekt.models.veranstaltung.*;

public class AnzeigerSrv 
{
	//alle SQL-Namen sollten hier als Klassenvariablen auftauchen.
	
	Connection connection;
	public void connect(){
		connection = DBConnector.getConnection();
	}
	public List<Veranstaltung> getAllPraktika(int semester, String fachbereich)
	{
		
		
		List<Veranstaltung> praktika = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from PRAKTIKUM where Semester =" + semester
					+ " AND fachbereich = " + fachbereich;
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Veranstaltung vrst = new Praktikum();
				
				/**
				 * TODO: Fehler korrigieren
				 *
				vrst.setVeranstaltungsNr(rs.getInt("VERANSTALTUNGSNR"));
				vrst.setFachbereich(rs.getString("FACHBEREICH"));
				vrst.setSemester(rs.getInt("SEMESTER"));
				vrst.setTyp("Praktikum");
				praktika.add(vrst);
				**/
				
			
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return praktika;
	}
	
	/**
	 * TODO: Fehler korrigieren siehe ersten pullrequest
	 * @param semester
	 * @param fachbereich
	 * @return
	 */
	public List<Veranstaltung> getAllWP(int semester, String fachbereich)
	{
		
		
		List<Veranstaltung> wps = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from WP where Semester =" + semester
					+ " AND fachbereich = " + fachbereich;
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Veranstaltung vrst = new WP();
				
				/**
				vrst.setVeranstaltungsNr(rs.getInt("VERANSTALTUNGSNR"));
				vrst.setFachbereich(rs.getString("FACHBEREICH"));
				vrst.setSemester(rs.getInt("SEMESTER"));
				vrst.setTyp("WP");
				wps.add(vrst);
				**/
			}
			statement.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return wps;
	}
	
	/**
	 * TODO: Fehler korrigieren, siehe ersten pullrequest (Kommentare
	 * @param semester
	 * @param fachbereich
	 * @return
	 */
	public List<Veranstaltung> getAllPO(int semester, String fachbereich)
	{
		
		
		List<Veranstaltung> pos = new ArrayList<>();
		Statement statement = null;
		String qry = "select * from PO where Semester =" + semester
					+ " AND fachbereich = " + fachbereich;
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Veranstaltung vrst = new Projekt();
				
				/**
				 * TODO: Fehler korrigieren
				 */
//				vrst.setVeranstaltungsNr(rs.getInt("VERANSTALTUNGSNR"));
//				vrst.setFachbereich(rs.getString("FACHBEREICH"));
//				vrst.setSemester(rs.getInt("SEMESTER"));
//				vrst.setTyp("PO");
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

	/**
	 * TODO: korrigieren -> siehe ersten Pullrequest
	 * @param veranstaltung
	 * @return
	 */
	public List<Gruppe> getAllGruppen(Veranstaltung veranstaltung)
	{
		
		
		List<Gruppe> gruppen = new ArrayList<>();
		Statement statement = null;
		String qry = null;
		
		// Primary-Key = Fachkuerzel der klasse Fach in Veranstaltung
		/**
		 * TODO: korrigieren -> 
		 
			qry = "select * from GRUPPE where GruppenNr in (select GruppenNr from GRUPPEVERANSTALTUNG where"
				+ "VeranstaltungsNr = "+ veranstaltung.getVeranstaltungsNr() + ")";
		 */			
		
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
	
	public List<Person> getAllTeilnehmer(Gruppe gruppe)
	{
		
		
		List<Person> personen = new ArrayList<>();
		Statement statement = null;
		String qry = "select Distinct * from STUDENT where TeamNr in (select TeamNr from GRUPPENTEAM where"
				+" GruppenNr = "+ gruppe.getGrpNr() + ")";
		
		try 
		{
			statement = connection.createStatement();
			ResultSet rs = statement.executeQuery(qry);
			
			while(rs.next()){
				Student std= new Student();
				std.setMatrNr(rs.getInt("MATRNR"));
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
