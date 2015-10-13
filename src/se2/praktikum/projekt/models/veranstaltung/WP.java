package se2.praktikum.projekt.models.veranstaltung;

import com.fasterxml.jackson.annotation.JsonTypeName;

import se2.praktikum.projekt.models.person.Professor;


/**
 * Repräsentiert ein Wahlpflichtpraktikum
 * @author Jan
 *
 */
@JsonTypeName("wp")
public class WP extends AbstrVeranstaltung {
	
	/**
	 * Default-Konstruktor
	 * Initialisiert ein neues WP ohne Parameter
	 * Felder können seperat über Setter festgelegt werden
	 */
	public WP(){
		
		this(null, null);
		
	}
	
	
	/**
	 * Initialisiert ein neues WP mit den wichtigsten Parametern
	 * Restliche Felder können separat über Setter festgelegt werden.
	 * @param fach
	 * @param prof
	 * @param assist
	 */
	public WP(Fach fach, Professor prof)			{
		
		this(fach, prof, 0, 0, 0, 0);
	}
	
	
	/**
	 * Initialsiert ein neues WP mit übergebenen Parametern
	 * @param fach : Das Fach
	 * @param prof : Der Verantwortliche Professor
	 * @param assist : Assistent des Professors
	 * @param anzTm : aktuelle Anzahl Teilnehmer
	 * @param anzGr : aktuelle Anzahl Gruppen
	 * @param maxGr : aktuelle max. möglche Gruppenzahl.
	 */
	public WP(Fach fach, Professor prof, 
			  int anzTm,int maxTm, int anzGr, 
			  int maxGr)					{
		
		this.fach = fach;
		this.professor = prof;
		this.anzTm = anzTm;
		this.anzGr = anzGr;
		this.maxGr = maxGr;
	}

}
