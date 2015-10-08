package se2.praktikum.projekt.models.person.fachwerte;


/**
 * repräsentiert den Fachwert Matrikelnr
 * @author Jan
 *
 */
public class MatrikelNr {
	
	// Felder
	private int matrNr; // Der Wert der Matrikelnummer
	
	
	/**
	 * Initialisiert eine Matrikelnummer
	 * @param matrNr : Die Matrikelnummer
	 */
	private MatrikelNr(int matrNr){
		
		this.matrNr = matrNr;
	}
	
	/**
	 * Referenziert eine Matrikelnumer
	 * @param matrNr : Die Matrikelnummer 
	 * @return MatrikelNummer
	 */
	public static MatrikelNr getMatrikelNr(int matrNr){
		
		//TODO: Preconditions
		return new MatrikelNr(matrNr);
	}

	/**
	 * Gibt den Integerwert einer Matrikelnummer zurück
	 * @return Wert der Matrikelnummer
	 */
	public int getMatrNr() {
		return matrNr;
	}

	/**
	 * Setzt den Wert einer Matrikelnummer
	 * @param matrNr : Wert der Matrikelnummer
	 */
	public void setMatrNr(int matrNr) {
		
		// TODO: Preconditions
		this.matrNr = matrNr;
	}
	
	
	

}
