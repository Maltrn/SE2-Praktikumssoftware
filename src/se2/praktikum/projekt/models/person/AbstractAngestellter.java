package se2.praktikum.projekt.models.person;

import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert einen Angestellten als Abstrakte Klasse
 * @author Jan
 *
 */
public abstract class AbstractAngestellter extends AbstractPerson{
	
	// Felder
	protected MAID mitarbeiterID; // Die Mitarbeiter-ID

	
	/**
	 * Gibt die Mitarbeiter-ID eines Mitarbeiters zurück
	 * @return Mitarbeiter-ID
	 */
	public MAID getMitarbeiterID() {
		return mitarbeiterID;
	}

	/**
	 * Setzt die Mitarbeiter-ID
	 * @param mitarbeiterID
	 */
	public void setMitarbeiterID(MAID mitarbeiterID) {
		this.mitarbeiterID = mitarbeiterID;
	}
	
	

}
