package se2.praktikum.projekt.models.gruppe.fachwerte;

/**
 * Repräsentiert den Fachwert Uhrzeit
 * @author Jan
 *
 */
public class Uhrzeit {
	
	// Felder
	private int stunden;	// Stunden
	private int minuten;	// Minuten
	
	/**
	 * Initialisiert eine neue Uhrzeit mit den übergebenen Parametern
	 * @param stunden : Die Stunden
	 * @param minuten : Die Minuten
	 */
	private Uhrzeit(int stunden, int minuten){
		
		this.stunden = stunden;
		this.minuten = minuten;
	}
	
	/**
	 * Referenziert eine Uhrzeit zu den übergebenen Parametern
	 * @param stunden : Die Stunden
	 * @param minuten : Die Minuten
	 * @return
	 */
	public static Uhrzeit getUhrzeit(int stunden, int minuten){
		
		if(istGueltigeUhrzeit(stunden, minuten)){
			return new Uhrzeit(stunden, minuten);
		}
		throw new IllegalArgumentException("Ungültige Uhrzeit!");
	}

	/**
	 * Prüft ob gültige Stunden und Minuten übergeben wurden
	 * @param stunden : Die Stunden
	 * @param minuten : Die Minuten
	 * @return
	 */
	private static boolean istGueltigeUhrzeit(int stunden, int minuten) {
		
		return istGueltigeStunde(stunden) && istGueltigeMinute(minuten);
	}

	/**
	 * Prüft ob die übergebenen Minuten gültig sind
	 * @param minuten : Die Minuten
	 * @return boolean
	 */
	private static boolean istGueltigeMinute(int minuten) {
		
		return minuten > -1 && minuten < 61;

	}

	/**
	 * Prüft ob die übergebenen Stunden gültig sind
	 * @param stunden : Die Stunden
	 * @return boolean
	 */
	private static boolean istGueltigeStunde(int stunden) {
		
		return stunden > -1 && stunden < 13;
	}

	/**
	 * Gibt den Wert der Stunden zurück
	 * @return Stunden
	 */
	public int getStunden() {
		return stunden;
	}

	/**
	 * Setzt den Wert der Stunden
	 * @param stunden
	 */
	public void setStunden(int stunden) {
		
		if(istGueltigeStunde(stunden)){
			this.stunden = stunden;
		}else{
			throw new IllegalArgumentException("Ungültige Stunden!");
		}
	}

	/**
	 * Gibt den Wert der Minuten zurück
	 * @return Den Wert der Minuten
	 */
	public int getMinuten() {
		return minuten;
	}

	/**
	 * Setzt den Wert der Minuten
	 * @param minuten
	 */
	public void setMinuten(int minuten) {
		
		if(istGueltigeMinute(minuten)){
			this.minuten = minuten;
		}else{
			throw new IllegalArgumentException("Ungültige Minuten!");
		}
		
	}
	
	

}
