package se2.praktikum.projekt.models.person;

import java.util.Date;

import se2.praktikum.projekt.models.person.fachwerte.Adresse;

public interface Person {

	/**
	 * Gibt den Vornamen einer Person zurück
	 * @return Vorname
	 */
	public String getVorname();

	/**
	 * Setzt den Vornamen einer Person
	 * @param vorname
	 */
	public void setVorname(String vorname);

	/**
	 * Gibt den Nachnamen einer Person zurück
	 * @return nachname
	 */
	public String getNachname();

	
	/**
	 * Setzt den Nachnamen einer Person
	 * @param nachname
	 */
	public void setNachname(String nachname);

	/**
	 * Gibt den Benutzernamen einer Person zurück
	 * @return benutzername
	 */
	public String getBenutzername();

	/**
	 * Setzt den Benutzernamen einer Person
	 * @param benutzername
	 */
	public void setBenutzername(String benutzername);

	/**
	 * gibt das Geburtsdatum einer Person zurück
	 * @return Geburtsdatum
	 */
	public Date getGebDatum();

	/**
	 * Setzt das Geburtsdatum einer Person
	 * @param gebDatum
	 */
	public void setGebDatum(Date gebDatum);

	/**
	 * Gibt den Geburtsort einer Person zurück
	 * @return Geburtsort
	 */
	public String getGebOrt();

	/**
	 * Setzt den Geburtsort einer Person
	 * @param gebOrt
	 */
	public void setGebOrt(String gebOrt);

	/**
	 * Gibt die Adresse einer Person zurück
	 * @return die Adresse
	 */
	public Adresse getAdresse();

	/**
	 * Setzt die Adresse einer Person
	 * @param adresse
	 */
	public void setAdresse(Adresse adresse);

	/**
	 * gibt das zuständige Department einer Person zurück
	 * @return Department
	 */
	public String getDepartment();

	
	/**
	 * Setzt das zuständige Department einer Person
	 * @param department
	 */
	public void setDepartment(String department);

	/**
	 * Gibt den Fachbereich einer Person zurück
	 * @return der Fachbereich
	 */
	public String getFachbereich();

	/**
	 * Setzt den Fachbereich einer Person
	 * @param fachbereich
	 */
	public void setFachbereich(String fachbereich);

	/**
	 * Gibt die Email-Adresse einer Person zurück
	 * @return die Email-Adresse
	 */
	public EMail getEmailAdresse();

	/**
	 * Setzt die Email-Adresse einer Person
	 * @param emailAdresse
	 */
	public void setEmailAdresse(EMail emailAdresse);
	
	

}
