package se2.praktikum.projekt.models.person.fachwerte;


/**
 * Repräsentiert den Fachwert Adresse einer Person
 * @author Jan
 *
 */
public class Adresse {
	
	private String strasse;
	private int hausNr;
	private PLZ postleitzahl;
	private String stadt;
	private String land;
	
	
	/**
	 * Initialsiert eine neue Adresse mit übergebenen Parametern
	 * @param strasse	: Straße
	 * @param hausNr	: HausNr.
	 * @param plz		: PLZ
	 * @param stadt		: Stadt
	 * @param land		: Land
	 */
	private Adresse(String strasse, int hausNr,
					PLZ plz, String stadt,
					String land)				{
		
		this.strasse = strasse;
		this.hausNr = hausNr;
		this.postleitzahl = plz;
		this.stadt = stadt;
		this.land = land;
	}
	
	
	/**
	 * Ruft eine neue Adresse ab mit den übergebenen Parametern
	 * @param strasse	: st
	 * @param strasse	: Straße
	 * @param hausNr	: HausNr.
	 * @param plz		: PLZ
	 * @param stadt		: Stadt
	 * @param land		: Land
	 * @return eine Adresse
	 */
	public static Adresse getAdresse(String strasse, int hausNr,
							PLZ plz, String stadt,
							String land)				{
		
		return new Adresse(strasse, hausNr, plz, stadt, land);
	}


	/**
	 * Gibt die Straße einer Adresse zurück
	 * @return Straße
	 */
	public String getStrasse() {
		return strasse;
	}

	/**
	 * Setzt die Straße einer Adresse
	 * @param strasse
	 */
	public void setStrasse(String strasse) {
		this.strasse = strasse;
	}

	/**
	 * Gibt die HausNr einer Straße zurück
	 * @return hausNr
	 */
	public int getHausNr() {
		return hausNr;
	}


	/**
	 * Setzt die HausNr einer Straße
	 * @param hausNr
	 */
	public void setHausNr(int hausNr) {
		this.hausNr = hausNr;
	}

	/**
	 * Gibt die Postleitzahl einer Adresse zurück
	 * @return Postleitzahl
	 */
	public PLZ getPostleitzahl() {
		return postleitzahl;
	}

	/**
	 * Setzt die Postleitahl einer Adresse
	 * @param postleitzahl
	 */
	public void setPostleitzahl(PLZ postleitzahl) {
		this.postleitzahl = postleitzahl;
	}

	/**
	 * Gibt die Stadt einer Adressse zurück
	 * @return Stadt
	 */
	public String getStadt() {
		return stadt;
	}

	/**
	 * Setzt die Stadt einer Adresse
	 * @param stadt
	 */
	public void setStadt(String stadt) {
		this.stadt = stadt;
	}

	/**
	 * Gibt das Land einer Adresse zurück
	 * @return Land
	 */
	public String getLand() {
		return land;
	}

	/**
	 * Setzt das Land einer Adresse
	 * @param land
	 */
	public void setLand(String land) {
		this.land = land;
	}
	
	

}
