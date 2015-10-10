package se2.praktikum.projekt.models.person.fachwerte;

public class MAID {
	
	// Felder
	private int id; // Der Wert der Mitarbeiter-ID
	
	
	/**
	 * Initialisiert eine Mitarbeiter-ID
	 * @param maID : Die Mitarbeiter-ID
	 */
	public MAID(int maID){
		
		
		this.id = maID;
	}
	

	/**
	 * Gibt den Wert einer Mitarbeiter-ID zurück
	 * @return MAID-Wert
	 */
	public int getId() {
		return id;
	}

	/**
	 * Setzt den Wert einer MAID
	 * @param maID : Wert der MAID
	 */
	public void setId(int id) {
		this.id = id;
	}





	
	


}
