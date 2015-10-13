package se2.praktikum.projekt.models.person;
import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert einen Angestellten als Abstrakte Klasse
 * @author Jan
 *
 */
public abstract class AbstrAngestellter extends AbstrPerson implements Angestellter{
	
	// Felder
	protected MAID maID; // Die Mitarbeiter-ID
	

	/**
	 * Gibt die Mitarbeiter-ID eines Mitarbeiters zurück
	 * @return Mitarbeiter-ID
	 */
	@Override
	public MAID getMaID() {
		return maID;
	}

	/**
	 * Setzt die Mitarbeiter-ID
	 * @param mitarbeiterID
	 */
	@Override
	public void setMaID(MAID maID) {
		this.maID = maID;
	}

	
	

}
