package se2.praktikum.projekt.models.gruppe;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import se2.praktikum.projekt.models.gruppe.fachwerte.Uhrzeit;

/**
 * Repräsentert einen Termin für eine Veranstaltung
 * @author Jan
 *
 */
public class Termin {
	
	private Date datum;
	private Uhrzeit start;
	private Uhrzeit ende;
	private String raum;
	
	/**
	 * Default Konstruktor
	 * Initialisiert einen neuen Termin
	 * Felder können separat über Setter gesetzt werden
	 */
	public Termin(){
		
		this(null, null, null, null);
	}
	
	/**
	 * Initialisiert einen neuen Termin mit den übergeben Parametern
	 * @param datum : Das datum
	 * @param start : Die Startuhrzeit
	 * @param end : Die enduhrzeit
	 * @param raum : Der Raum
	 */
	@JsonCreator
	public Termin(@JsonProperty("datum") Date datum, 
				  @JsonProperty("start") Uhrzeit start,
				  @JsonProperty("ende") Uhrzeit end,
				  @JsonProperty("raum") String raum)	  {
		
		this.datum = datum;
		this.start = start;
		this.ende = end;
		this.raum = raum;
		
	}

	/**
	 * Gibt das Datum eines Termins zurück
	 * @return Das Datum
	 */
	public Date getDatum() {
		return datum;
	}

	/**
	 * Setzt das Datum eines Termins
	 * @param datum
	 */
	public void setDatum(Date datum) {
		this.datum = datum;
	}

	/**
	 * Gibt die Startuhzeit eines Termins zurück
	 * @return Startuhrzeit
	 */
	public Uhrzeit getStart() {
		return start;
	}


	/**
	 * Setzt die Startuhrzeit eines Termins
	 * @param start : Startuhrzeit
	 */
	public void setStart(Uhrzeit start) {
		this.start = start;
	}

	/**
	 * Gibt die Enduhrzeit eines Termins zurück
	 */
	public Uhrzeit getEnde() {
		return ende;
	}

	/**
	 * Setzt die Enduhrzeit eines Termins
	 * @param end Die Enduhrzeit
	 */
	public void setEnde(Uhrzeit end) {
		this.ende = end;
	}

	/**
	 * Gibt den Raum eines Termins zurück
 	 * @return Der Raum eines Termins
	 */
	public String getRaum() {
		return raum;
	}

	/**
	 * Setzt den Raum eines Termins
	 * @param raum
	 */
	public void setRaum(String raum) {
		this.raum = raum;
	}
	
}
