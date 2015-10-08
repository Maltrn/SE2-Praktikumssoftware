package se2.praktikum.projekt.models.person.fachwerte;

public class MAID {
	
	// Felder
	private int maID; // Der Wert der Mitarbeiter-ID
	
	
	/**
	 * Initialisiert eine Mitarbeiter-ID
	 * @param maID : Die Mitarbeiter-ID
	 */
	private MAID(int maID){
		
		//TODO: Preconditions
		this.maID = maID;
	}
	
	/**
	 * Referenziert eine Mitarbeiter-ID
	 * @param matrNr : Die Mitarbeiter-ID 
	 * @return Mitarbeiter-ID
	 */
	public static MAID getMitarbeiterID(int maID){
		
		return new MAID(maID);
	}

	/**
	 * Gibt den Wert einer Mitarbeiter-ID zurück
	 * @return MAID-Wert
	 */
	public int getMaID() {
		return maID;
	}

	/**
	 * Setzt den Wert einer MAID
	 * @param maID : Wert der MAID
	 */
	public void setMaID(int maID) {
		
		// TODO: Preconditions
		this.maID = maID;
	}
	
	


}
