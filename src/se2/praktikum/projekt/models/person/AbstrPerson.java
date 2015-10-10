package se2.praktikum.projekt.models.person;

import java.util.Date;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;
import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert eine Person als abstrakte Klasse
 * @author jan
 *
 */
public abstract class AbstrPerson implements Person{
	
	// Felder
	protected String vorname;			// Vorname
	protected String nachname;			// Nachname
	protected String vollerName; 		// Vor- und Zuname
	protected String benutzername;		// Benutzername
	protected Date gebDatum;			// Geburtsdatum
	protected String gebOrt;			// Geburtsort
	protected Adresse adresse;			// Adresse
	protected String department;		// Department
	protected String fachbereich;		// Fachbereich
	protected EMail email;		// Emailadresse
	
	/**
	 * Gibt den Vornamen einer Person zurück
	 * @return Vorname
	 */
	@Override
	public String getVorname() {
		return vorname;
	}
	
	/**
	 * Setzt den Vornamen einer Person
	 * @param vorname
	 */
	@Override
	public void setVorname(String vorname) {
		this.vorname = vorname;
	}
	
	/**
	 * Gibt den Nachnamen einer Person zurück
	 * @return nachname
	 */
	@Override
	public String getNachname() {
		return nachname;
	}
	
	/**
	 * Setzt den Nachnamen einer Person
	 * @param nachname
	 */
	@Override
	public void setNachname(String nachname) {
		this.nachname = nachname;
	}
	
	/**
	 * Gibt den Benutzernamen einer Person zurück
	 * @return benutzername
	 */
	@Override
	public String getBenutzername() {
		return benutzername;
	}
	
	/**
	 * Setzt den Benutzernamen einer Person
	 * @param benutzername
	 */
	@Override
	public void setBenutzername(String benutzername) {
		this.benutzername = benutzername;
	}
	
	/**
	 * gibt das Geburtsdatum einer Person zurück
	 * @return Geburtsdatum
	 */
	@Override
	public Date getGebDatum() {
		return gebDatum;
	}
	
	/**
	 * Setzt das Geburtsdatum einer Person
	 * @param gebDatum
	 */
	@Override
	public void setGebDatum(Date gebDatum) {
		this.gebDatum = gebDatum;
	}
	
	/**
	 * Gibt den Geburtsort einer Person zurück
	 * @return Geburtsort
	 */
	@Override
	public String getGebOrt() {
		return gebOrt;
	}
	
	/**
	 * Setzt den Geburtsort einer Person
	 * @param gebOrt
	 */
	@Override
	public void setGebOrt(String gebOrt) {
		this.gebOrt = gebOrt;
	}
	
	/**
	 * Gibt die Adresse einer Person zurück
	 * @return die Adresse
	 */
	@Override
	public Adresse getAdresse() {
		return adresse;
	}
	
	/**
	 * Setzt die Adresse einer Person
	 * @param adresse
	 */
	@Override
	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}
	
	/**
	 * gibt das zuständige Department einer Person zurück
	 * @return Department
	 */
	@Override
	public String getDepartment() {
		return department;
	}
	
	/**
	 * Setzt das zuständige Department einer Person
	 * @param department
	 */
	@Override
	public void setDepartment(String department) {
		this.department = department;
	}
	
	/**
	 * Gibt den Fachbereich einer Person zurück
	 * @return der Fachbereich
	 */
	@Override
	public String getFachbereich() {
		return fachbereich;
	}
	
	/**
	 * Setzt den Fachbereich einer Person
	 * @param fachbereich
	 */
	@Override
	public void setFachbereich(String fachbereich) {
		this.fachbereich = fachbereich;
	}
	
	/**
	 * Gibt die Email-Adresse einer Person zurück
	 * @return die Email-Adresse
	 */
	@Override
	public EMail getEMail() {
		return email;
	}
	
	/**
	 * Setzt die Email-Adresse einer Person
	 * @param emailAdresse
	 */
	@Override
	public void setEMail(EMail emailAdresse) {
		this.email = emailAdresse;
	}

	@Override
	public String getVollerName() {
		return vollerName;
	}

	@Override
	public void setVollerName(String vollerName) {
		this.vollerName = vollerName;
	}

	
	
	
	

}
