package se2.praktikum.projekt.models.person;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import se2.praktikum.projekt.models.person.fachwerte.MAID;

/**
 * Repräsentiert einen Angestellten als Abstrakte Klasse
 * @author Jan
 *
 */
@JsonTypeInfo(  
	    use = JsonTypeInfo.Id.NAME,  
	    include = JsonTypeInfo.As.PROPERTY,  
	    property = "type")  
	@JsonSubTypes({  
	    @Type(value = Professor.class, name = "professor"),  
	    @Type(value = Assistent.class, name = "assistent") })  
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
