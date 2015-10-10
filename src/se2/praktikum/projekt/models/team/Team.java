package se2.praktikum.projekt.models.team;

import java.util.ArrayList;
import java.util.List;

import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.team.fachwerte.TeamID;

/**
 * Repräsentiert ein Team
 * @author Jan
 *
 */
public class Team {
	
	// Felder
	private TeamID teamID;				// Die TeamID
	private List<AbstrPerson> mitglieder;	// Die Mitglieder des Teams
	private int minTeiln;				// min. Anzahl Teilnehmer
	private int maxTeiln;				// max. Anzahl Teilnehmer
	private List<Aufgabe> aufgaben;		// Die Aufgaben eines Teams
	
	
	/**
	 * Default-Konstruktor
	 * Initialisert ein neues Teams
	 * Felder können separat über Setter definiert werden
	 */
	public Team(){
		
		this(null);
	}
	
	/**
	 * Initialisiert ein neues Team mit den wichtigsten Parametern
	 * Restliche Felder können separat über Setter definiert werden
	 * @param teamId : Die TeamID
	 */
	public Team(TeamID teamId){
		
		this(teamId, 0, 0);
	}
	
	
	/**
	 * Initialisiert ein neues Team mit übergebenen Parametern
	 * @param teamID : Die TeamID
	 * @param minTeiln : minimale Anzahl Mitglieder
	 * @param maxTeiln : maximale Anzahl Mitglieder
	 */
	public Team(TeamID teamID, int minTeiln, int maxTeiln){
		
		this.teamID = teamID;
		this.minTeiln = minTeiln;
		this.maxTeiln = maxTeiln;
		this.mitglieder = new ArrayList<>();
		this.aufgaben = new ArrayList<>();
	}

	/**
	 * Gibt die TeamID zurück
	 * @return die TeamID
	 */
	public TeamID getTeamID() {
		return teamID;
	}

	/**
	 * Setzt die TeamID
	 * @param teamID
	 */
	public void setTeamID(TeamID teamID) {
		this.teamID = teamID;
	}

	
	/**
	 * Gibt eine Liste aller Mitglieder zurück
	 * @return Liste aller Mitglieder
	 */
	public List<AbstrPerson> getMitglieder() {
		return mitglieder;
	}

	/**
	 * Setzt die Mitglieder eines Teams
	 * @param Liste Mitglieder
	 */
	public void setMitglieder(List<AbstrPerson> mitglieder) {
		this.mitglieder = mitglieder;
	}

	/**
	 * Gibt die minimale Anzahl Mitglieder zurück
	 * @return min. Anzahl Mitglieder
	 */
	public int getMinTeiln() {
		return minTeiln;
	}

	/**
	 * Setzt die minimale anzahl Mitglieder
	 * @param minTeiln
	 */
	public void setMinTeiln(int minTeiln) {
		this.minTeiln = minTeiln;
	}

	/**
	 * Gibt die max. Anzahl Mitglieder zurück
	 * @return max. Anzahl Mitglieder
	 */
	public int getMaxTeiln() {
		return maxTeiln;
	}

	/**
	 * Setzt max. Anzahl Mitglieder
	 * @param max. Anzahl Mitglieder
	 */
	public void setMaxTeiln(int maxTeiln) {
		this.maxTeiln = maxTeiln;
	}

	/**
	 * Gibt alle Aufgaben des Teams zurück
	 * @return Liste Aufgaben des Teams
	 */
	public List<Aufgabe> getAufgaben() {
		return aufgaben;
	}

	/**
	 * Setzt die Aufgaben eines Teams
	 * @param aufgaben des Teams
	 */
	public void setAufgaben(List<Aufgabe> aufgaben) {
		this.aufgaben = aufgaben;
	}
	
	
	
	

}
