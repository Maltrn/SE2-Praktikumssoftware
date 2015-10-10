package se2.praktikum.projekt.models.person;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import se2.praktikum.projekt.models.person.fachwerte.MAID;

@JsonDeserialize(as=AbstrAngestellter.class)
public interface Angestellter extends Person{
	
	/**
	 * Gibt die Mitarbeiter-ID eines Mitarbeiters zurück
	 * @return Mitarbeiter-ID
	 */
	 public MAID getMaID();

	/**
	 * Setzt die Mitarbeiter-ID
	 * @param mitarbeiterID
	 */
	 public void setMaID(MAID maID);



}
