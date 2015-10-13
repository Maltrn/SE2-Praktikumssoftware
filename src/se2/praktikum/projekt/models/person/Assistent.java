package se2.praktikum.projekt.models.person;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;
import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert einen Assistenten
 * @author Jan
 *
 */
@JsonTypeName("assistent")
public class Assistent extends AbstrAngestellter {
	
	
	/**
	 * Default-Konstruktor
	 * Felder können separat über Setter initialsiert werden
	 */
	public Assistent(){
		
		this(null, null, null);
	}
	
	/**
	 * Initialisiert einen Assistenten mit den wichtigsten Parametern
	 * Restliche Felder können über Setter gesetzt werden
	 * @param maID : Die Mitarbeiter-ID
	 * @param vorname : Der Vorname
	 * @param nachname : Der Nachname
	 */
	public Assistent(MAID maID, String vorname,
				   	 String nachname)				 {
		
		this(maID, vorname, nachname, 
			 null, null, null,null, null, 
			 null, null);
	}
	
	
	/**
	 * Initialisiert einen Assistenten mit den übergebenen Parametern
	 * @param maID : Mitarbeiter-ID
	 * @param vorname : Vorname
	 * @param nachname : Nachname
	 * @param benutzername : Benutzername
	 * @param gebDatum : Geburtsdatum
	 * @param gebOrt : Geburtsort 
	 * @param adresse : Adresse
	 * @param department : Department
	 * @param fachbereich : Fachbereich 
	 * @param email : EMail-Adresse
	 */
	public Assistent(MAID maID, String vorname,
				   	 String nachname, String benutzername,
				     Date gebDatum, String gebOrt,
				     Adresse adresse, String department,
				     String fachbereich, EMail email)		{
		
		this.maID = maID;
		this.vorname = vorname;
		this.nachname = nachname;
		this.benutzername = benutzername;
		this.gebDatum = gebDatum;
		this.gebOrt = gebOrt;
		this.adresse = adresse;
		this.department = department;
		this.fachbereich = fachbereich;
		this.email = email;
	}



}
