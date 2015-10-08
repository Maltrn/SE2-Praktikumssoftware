package se2.praktikum.projekt.models.veranstaltung;

/**
 * Repräsentiert ein Fach einer Veranstaltung
 * @author Jan
 *
 */
public class Fach {
	
	// Felder
	private String fachKuerzel;			// Das Fachkürzel
	private String fachBezeichnung;		// Die Fachbezeichnung (ausgeschrieben)
	private String fachbereich;			// Der Fachbereich
	private int semester;				// Das zugehörige Semester
	
	
	
	/**
	 * Default-Konstruktor
	 * Initialisiert ein neues Fach ohne Parameter
	 * Felder können separat über Setter gesetzt werden
	 */
	public Fach(){
		
		this(null, null, null, 0);
	}
	/**
	 * Erzeugt ein neues Fach für eine Veranstaltung
	 * @param fachKuerzel	: Das Fachkuerzel
	 * @param fachBezeichnung : Die fachBezeichnung
	 * @param fachbereich : Den Fachbereich
	 * @param semester : Das Semester
	 */
	public Fach(String fachKuerzel, String fachBezeichnung, 
				String fachbereich, int semester)			{
		
		this.fachKuerzel = fachKuerzel;
		this.fachBezeichnung = fachBezeichnung;
		this.fachbereich = fachbereich;
		this.semester = semester;
	}
	
	/**
	 * Gibt das Fachkuerzel eines Fachs zurück
	 * @return Fachkuerzel
	 */
	public String getFachKuerzel() {
		return fachKuerzel;
	}
	
	/**
	 * Setzt das Fachkuerzel eines Fachs
	 * @param fachKuerzel
	 */
	public void setFachKuerzel(String fachKuerzel) {
		this.fachKuerzel = fachKuerzel;
	}
	
	
	/**
	 * Gibt die Fachbezeichnung eines Fachs zurück
	 * @return Fachbezeichnung
	 */
	public String getFachBezeichnung() {
		return fachBezeichnung;
	}
	
	/**
	 * Setzt die Fachbezeichnung eines Fachs
	 * @param fachBezeichnung
	 */
	public void setFachBezeichnung(String fachBezeichnung) {
		this.fachBezeichnung = fachBezeichnung;
	}
	
	/**
	 * Gibt den Fachbereich eines Fachs zurück
	 * @return Fachbereich
	 */
	public String getFachbereich() {
		return fachbereich;
	}
	
	
	/**
	 * Setzt den Fachbereich eines Fachs
	 * @param fachbereich
	 */
	public void setFachbereich(String fachbereich) {
		this.fachbereich = fachbereich;
	}
	
	/**
	 * Gibt das zugehörige Semester eines Fachs zurück
	 * @return Semester
	 */
	public int getSemester() {
		return semester;
	}
	
	/**
	 * Setzt das zugehörige Semester eines Fachs
	 * @param semester
	 */
	public void setSemester(int semester) {
		this.semester = semester;
	}
	
	

}
