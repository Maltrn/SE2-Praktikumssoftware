package se2.praktikum.projekt.models.person;

import java.util.Date;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;

/**
 * Repräsentiert einen Studenten
 * @author Jan
 *
 */
public class Student extends AbstractPerson{
	
	// Felder
	private int matrNr;		// Die Matrikelnummer -> VORERST INT damit DBBeispiel weiterhin
							//					     funktioniert
							//					  -> Später fachlicher Datentyp "MatrikelNr"
	
	/**
	 * Default-Konstruktor
	 * Felder können separat über Setter initialsiert werden
	 */
	public Student(){
		
		this(0, null, null);
	}
	
	/**
	 * Initialisiert einen Studenten mit den wichtigsten Parametern
	 * Restliche Felder können über Setter gesetzt werden
	 * @param matrNr : Die MatrikelNr.
	 * @param vorname : Der Vorname
	 * @param nachname : Der Nachname
	 */
	public Student(int matrNr, String vorname,
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
	public Student(int matrNr, String vorname,
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
		this.emailAdresse = email;
		
	}
	
	/**
	 * Gibt die Matrikelnummer eines Studenten zurück
	 * @return Matrikelnummer
	 */
	public int getMatrNr() {
		return matrNr;
	}
	
	/**
	 * Setzt die Matrikelnummer eines Studenten
	 * @param matrNr : Die Matrikelnummer
	 */
	public void setMatrNr(int matrNr) {
		this.matrNr = matrNr;
	}

	

	
	
	

	

}