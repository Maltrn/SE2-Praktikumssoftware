package se2.praktikum.projekt.models.person.fachwerte;


/**
 * Repräsentiert den Fachwert PLZ einer Adresse
 * @author Jan
 *
 */
public class PLZ {
	
	
	// Felder
	private int plz; // Die Postleitzahl
	
	
	/**
	 * Initialisiert eine Postleitzahl
	 * @param plz : Die Postleitzahl
	 */
	private PLZ(int plz){
		
		// TODO: Preconditions
		this.plz = plz;
	}
	
	
	/**
	 * Referenziert einer Postleitzahl
	 * @param plz : Postleitzahl
	 * @return eine Postleitzahl
	 */
	public static PLZ getPostLeitzahl(int plz){
		
		return new PLZ(plz);
	}


	/**
	 * Gibt den Integer-Wert einer PLZ zurück
	 * @return PLZ als int
	 */
	public int getPlz() {
		return plz;
	}

	/**
	 * Setzt den Wert einer PLZ
	 * @param plz : Wert der PLZ
	 */
	public void setPlz(int plz) {
		this.plz = plz;
	}
}
