package se2.praktikum.projekt.models.team;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.team.fachwerte.TeamID;

/**
 * Repräsentiert ein Team
 * @author Jan
 *
 */
public class Team {
	
	// Felder
	private TeamID teamID;				// Die TeamID
	private int grpNr;					// Die zugehörige Gruppennummer
	private List<Person> mitglieder;	// Die Mitglieder des Teams
	private int minTeiln;				// min. Anzahl Teilnehmer
	private int maxTeiln;				// max. Anzahl Teilnehmer
	
	
	/**
	 * Default-Konstruktor
	 * Initialisert ein neues Teams
	 * Felder können separat über Setter definiert werden
	 */
	public Team(){
		
		this(0, 0, null, 0);
	}
	
	
	
	/**
	 * Initialisiert ein neues Team mit übergebenen Parametern
	 * @param teamID : Die TeamID
	 * @param minTeiln : minimale Anzahl Mitglieder
	 * @param maxTeiln : maximale Anzahl Mitglieder
	 */
	@JsonCreator
	public Team(@JsonProperty("minTeiln") int minTeiln, 
				@JsonProperty("maxTeiln")int maxTeiln,
				@JsonProperty("mitglieder") List<Person> mitglieder,
				@JsonProperty("grpNr") int grpNr){
		
		
		this.minTeiln = minTeiln;
		this.maxTeiln = maxTeiln;
		this.mitglieder = mitglieder;
		this.teamID = TeamID.getTeamID(this.mitglieder, this.grpNr);
	}

	/**
	 * Gibt die TeamID zurück
	 * @return die TeamID
	 */
	public TeamID getTeamID() {
		return teamID;
	}
	
	/**
	 * Gibt eine Liste aller Mitglieder zurück
	 * @return Liste aller Mitglieder
	 */
	public List<Person> getMitglieder() {
		return mitglieder;
	}

	/**
	 * Setzt die Mitglieder eines Teams
	 * @param Liste Mitglieder
	 */
	public void setMitglieder(List<Person> mitglieder) {
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

	public int getGrpNr() {
		return grpNr;
	}

	public void setGrpNr(int grpNr) {
		this.grpNr = grpNr;
	}
}
