package se2.praktikum.projekt.models.person;

import java.util.Date;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;

public abstract class AbstractPerson {
	
	// Felder
	protected String vorname;			// Vorname
	protected String nachname;			// Nachname
	protected String benutzername;		// Benutzername
	protected Date gebDatum;			// Geburtsdatum
	protected String gebOrt;			// Geburtsort
	protected Adresse adresse;			// Adresse
	protected String department;		// Department
	protected String fachbereich;		// Fachbereich
	protected EMail emailAdresse;		// Emailadresse
	
	
	/**
	 * Gibt den Vornamen einer Person zurück
	 * @return Vorname
	 */
	public String getVorname() {
		return vorname;
	}
	
	/**
	 * Setzt den Vornamen einer Person
	 * @param vorname
	 */
	public void setVorname(String vorname) {
		this.vorname = vorname;
	}
	
	/**
	 * Gibt den Nachnamen einer Person zurück
	 * @return nachname
	 */
	public String getNachname() {
		return nachname;
	}
	
	/**
	 * Setzt den Nachnamen einer Person
	 * @param nachname
	 */
	public void setNachname(String nachname) {
		this.nachname = nachname;
	}
	
	/**
	 * Gibt den Benutzernamen einer Person zurück
	 * @return benutzername
	 */
	public String getBenutzername() {
		return benutzername;
	}
	
	/**
	 * Setzt den Benutzernamen einer Person
	 * @param benutzername
	 */
	public void setBenutzername(String benutzername) {
		this.benutzername = benutzername;
	}
	
	/**
	 * gibt das Geburtsdatum einer Person zurück
	 * @return Geburtsdatum
	 */
	public Date getGebDatum() {
		return gebDatum;
	}
	
	/**
	 * Setzt das Geburtsdatum einer Person
	 * @param gebDatum
	 */
	public void setGebDatum(Date gebDatum) {
		this.gebDatum = gebDatum;
	}
	
	/**
	 * Gibt den Geburtsort einer Person zurück
	 * @return Geburtsort
	 */
	public String getGebOrt() {
		return gebOrt;
	}
	
	/**
	 * Setzt den Geburtsort einer Person
	 * @param gebOrt
	 */
	public void setGebOrt(String gebOrt) {
		this.gebOrt = gebOrt;
	}
	
	/**
	 * Gibt die Adresse einer Person zurück
	 * @return die Adresse
	 */
	public Adresse getAdresse() {
		return adresse;
	}
	
	/**
	 * Setzt die Adresse einer Person
	 * @param adresse
	 */
	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}
	
	/**
	 * gibt das zuständige Department einer Person zurück
	 * @return Department
	 */
	public String getDepartment() {
		return department;
	}
	
	/**
	 * Setzt das zuständige Department einer Person
	 * @param department
	 */
	public void setDepartment(String department) {
		this.department = department;
	}
	
	/**
	 * Gibt den Fachbereich einer Person zurück
	 * @return der Fachbereich
	 */
	public String getFachbereich() {
		return fachbereich;
	}
	
	/**
	 * Setzt den Fachbereich einer Person
	 * @param fachbereich
	 */
	public void setFachbereich(String fachbereich) {
		this.fachbereich = fachbereich;
	}
	
	/**
	 * Gibt die Email-Adresse einer Person zurück
	 * @return die Email-Adresse
	 */
	public EMail getEmailAdresse() {
		return emailAdresse;
	}
	
	/**
	 * Setzt die Email-Adresse einer Person
	 * @param emailAdresse
	 */
	public void setEmailAdresse(EMail emailAdresse) {
		this.emailAdresse = emailAdresse;
	}
	
	

}
