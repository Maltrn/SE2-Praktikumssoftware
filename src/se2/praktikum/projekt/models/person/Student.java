package se2.praktikum.projekt.models.person;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonTypeInfo;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;
import se2.praktikum.projekt.models.person.fachwerte.MAID;
import se2.praktikum.projekt.models.person.fachwerte.MatrikelNr;

/**
 * Repräsentiert einen Studenten
 * @author Jan
 *
 */

public class Student extends AbstrPerson{
	
	// Felder
	private MatrikelNr matrNr;		// Die Matrikelnummer -> VORERST INT damit DBBeispiel weiterhin
							//					     funktioniert
							//					  -> Später fachlicher Datentyp "MatrikelNr"
	
	/**
	 * Default-Konstruktor
	 * Felder können separat über Setter initialsiert werden
	 */
	public Student(){
		
		this(null, null, null);
	}
	
	/**
	 * Initialisiert einen Studenten mit den wichtigsten Parametern
	 * Restliche Felder können über Setter gesetzt werden
	 * @param matrNr : Die MatrikelNr.
	 * @param vorname : Der Vorname
	 * @param nachname : Der Nachname
	 */
	public Student(MatrikelNr matrNr, String vorname,
				   String nachname)				 {
		
		this(matrNr, vorname, nachname, 
			 null, null, null,null, null, 
			 null, null);
	}
	
	
	/**
	 * Initialisiert einen Studenten mit den übergebenen Parametern
	 * @param matrNr : MatrikelNr
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
	public Student(MatrikelNr matrNr, String vorname,
				   String nachname, String benutzername,
				   Date gebDatum, String gebOrt,
				   Adresse adresse, String department,
				   String fachbereich, EMail email)		{
		
		this.matrNr = matrNr;
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
	
	/**
	 * Gibt die Matrikelnummer eines Studenten zurück
	 * @return Matrikelnummer
	 */
	public MatrikelNr getMatrNr() {
		return matrNr;
	}
	
	/**
	 * Setzt die Matrikelnummer eines Studenten
	 * @param matrikelNr : Die Matrikelnummer
	 */
	public void setMatrNr(MatrikelNr matrikelNr) {
		this.matrNr = matrikelNr;
	}


	

	
	
	

	

}