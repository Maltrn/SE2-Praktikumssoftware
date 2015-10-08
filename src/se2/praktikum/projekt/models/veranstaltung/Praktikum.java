package se2.praktikum.projekt.models.veranstaltung;

import java.util.ArrayList;
import se2.praktikum.projekt.models.person.AbstractPerson;
import se2.praktikum.projekt.models.person.Person;

/**
 * Repräsentiert ein Pflichtpraktikum
 * @author Jan
 *
 */
public class Praktikum extends AbstractVeranstaltung {
	
	
	
	/**
	 * Default-Konstruktor
	 * Initialisiert ein neues Praktikum ohne Parameter
	 * Felder können seperat über Setter festgelegt werden
	 */
	public Praktikum() {
		
		this(null, null, null);
		
	}
	
	
	/**
	 * Initialisiert ein neues Praktikum mit den wichtigsten Parametern
	 * Restliche Felder können separat über Setter festgelegt werden.
	 * @param fach
	 * @param prof
	 * @param assist
	 */
	public Praktikum(Fach fach, Person prof, 
					 Person assist)			{
		
		this(fach, prof, assist, 0, 0, 0, 0);
		
	}
	
	
	/**
	 * Initialsiert ein neues Praktikum mit übergebenen Parametern
	 * @param fach : Das Fach
	 * @param prof : Der Verantwortliche Professor
	 * @param assist : Assistent des Professors
	 * @param anzTm : aktuelle Anzahl Teilnehmer
	 * @param anzGr : aktuelle Anzahl Gruppen
	 * @param maxGr : aktuelle max. möglche Gruppenzahl.
	 */
	public Praktikum(Fach fach, Person prof, 
					 Person assist, int anzTm,
					 int maxTm, int anzGr, 
					 int maxGr)					{
		
		this.fach = fach;
		this.professor = prof;
		this.assistent = assist;
		this.gruppen = new ArrayList<>();
		this.anzTeilnehmer = anzTm;
		this.anzGruppen = anzGr;
		this.maxGruppen = maxGr;
	}

}
