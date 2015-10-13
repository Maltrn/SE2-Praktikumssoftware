package se2.praktikum.projekt.models.veranstaltung;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.AbstrAngestellter;
import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.person.Professor;

/**
 * Repräsentiert eine Veranstaltung als abstrakte Klasse
 * @author Jan
 *
 */
public class AbstrVeranstaltung implements Veranstaltung{
	
	
	// Felder
	protected Fach fach;					// Das Fach dieser Veranstaltung
	protected Angestellter professor;			// Modulverantwortlicher Professor
	protected int anzTm;			// aktuelle Anzahl der Teilnehmer
	protected int minTm;			// Mindestanzahl der Teilnehmer
	protected int maxTm; 			// Maximal mögliche Anzahl Teilnehmer
	protected int anzGr;				// aktuelle Anzahl der Gruppen
	protected int maxGr;	// max. mögliche Anzahl Gruppen
	protected int teamKap;
	
	@Override
	public Fach getFach() {
		return fach;
	}
	
	@Override
	public void setFach(Fach fach) {
		this.fach = fach;
	}
	
	@Override
	public Angestellter getProfessor() {
		return professor;
	}
	
	
	
	@Override
	public int getAnzTm() {
		return anzTm;
	}
	
	@Override
	public void setAnzTm(int anzTm) {
		this.anzTm = anzTm;
	}
	
	@Override
	public int getMinTm() {
		return minTm;
	}
	
	@Override
	public void setMinTm(int minTm) {
		this.minTm = minTm;
	}
	
	@Override
	public int getMaxTm() {
		return maxTm;
	}
	
	@Override
	public void setMaxTm(int maxTm) {
		this.maxTm = maxTm;
	}
	
	@Override
	public int getAnzGr() {
		return anzGr;
	}
	
	@Override
	public void setAnzGr(int anzGr) {
		this.anzGr = anzGr;
	}
	
	@Override
	public int getMaxGr() {
		return maxGr;
	}
	
	@Override
	public void setMaxGr(int maxGr) {
		this.maxGr = maxGr;
	}

	@Override
	public void setProfessor(Angestellter professor) {
		this.professor = professor;
		
	}

	@Override
	public int getTeamKap() {
		return teamKap;
	}

	@Override
	public void setTeamKap(int teamKap) {
		this.teamKap = teamKap;
	}
	
	
	
	
}
