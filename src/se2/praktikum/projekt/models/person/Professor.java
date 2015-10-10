package se2.praktikum.projekt.models.person;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;
import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert einen Professor
 * @author Jan
 *
 */
@JsonRootName(value = "Professor")
public class Professor extends AbstrAngestellter {
	

	
	/**
	 * Default-Konstruktor
	 * Felder können separat über Setter initialsiert werden
	 */
	public Professor(){
		
		this(null, null, null);
	}
	
	/**
	 * Initialisiert einen Professor mit den wichtigsten Parametern
	 * Restliche Felder können über Setter gesetzt werden
	 * @param maID : Die Mitarbeiter-ID
	 * @param vorname : Der Vorname
	 * @param nachname : Der Nachname
	 */
	public Professor(MAID maID, String vorname,
				   	 String nachname)				 {
		
		this(maID, vorname, nachname, 
			 null, null, null,null, null, 
			 null, null);
	}
	
	
	/**
	 * Initialisiert einen Professor mit den übergebenen Parametern
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
	public Professor(MAID maID, String vorname,
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
