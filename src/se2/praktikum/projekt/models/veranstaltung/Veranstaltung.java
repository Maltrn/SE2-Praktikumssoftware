package se2.praktikum.projekt.models.veranstaltung;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.person.Professor;

/**
 * Repräsentiert eine Veranstaltung als abstrakte Klasse
 * @author Jan
 *
 */
public class Veranstaltung{
	
	
	// Felder
	protected Fach fach;					// Das Fach dieser Veranstaltung
	protected Angestellter professor;			// Modulverantwortlicher Professor
	protected int anzTm;			// aktuelle Anzahl der Teilnehmer
	protected int minTm;			// Mindestanzahl der Teilnehmer
	protected int maxTm; 			// Maximal mögliche Anzahl Teilnehmer
	protected int anzGr;				// aktuelle Anzahl der Gruppen
	protected int maxGr;	// max. mögliche Anzahl Gruppen
	

	public Fach getFach() {
		return fach;
	}
	

	public void setFach(Fach fach) {
		this.fach = fach;
	}
	

	public Angestellter getProfessor() {
		return professor;
	}
	
	
	

	public int getAnzTm() {
		return anzTm;
	}
	

	public void setAnzTm(int anzTm) {
		this.anzTm = anzTm;
	}
	

	public int getMinTm() {
		return minTm;
	}
	

	public void setMinTm(int minTm) {
		this.minTm = minTm;
	}
	

	public int getMaxTm() {
		return maxTm;
	}
	

	public void setMaxTm(int maxTm) {
		this.maxTm = maxTm;
	}
	

	public int getAnzGr() {
		return anzGr;
	}
	

	public void setAnzGr(int anzGr) {
		this.anzGr = anzGr;
	}
	

	public int getMaxGr() {
		return maxGr;
	}
	

	public void setMaxGr(int maxGr) {
		this.maxGr = maxGr;
	}


	public void setProfessor(Angestellter professor) {
		this.professor = professor;
		
	}
}
