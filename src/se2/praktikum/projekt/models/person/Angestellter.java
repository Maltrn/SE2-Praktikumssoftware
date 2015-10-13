package se2.praktikum.projekt.models.person;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import se2.praktikum.projekt.models.person.fachwerte.MAID;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes(value = {
    @JsonSubTypes.Type(name = "professor", value = Professor.class),
    @JsonSubTypes.Type(name = "assistent", value = Assistent.class)
}) 
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
