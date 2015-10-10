package se2.praktikum.projekt.models.team.fachwerte;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.AbstrPerson;

/**
 * Die Klasse repräsentiert den Fachwert TeamID 
 * -> Dienst als Primary Key des Tables "TEAMS" in der Datenbank 
 * @author jan
 *
 */
public class TeamID {
	
	
	private int id;
	/**
	 * Referenziert eine neue TeamID
	 * @param id
	 */
	private TeamID(int id) {
		// TODO: Preconditions
		
		this.id = id;
	}

	/**
	 * Berechnet eine TeamID für ein gegebenes Team.
	 * TODO: Berechungsweg finden
	 * @param studenten : Liste der Mitglieder des Teams
	 * @param gruppe : Die zugehörige Gruppe
	 * @return
	 */
	public static TeamID getTeamID(List<AbstrPerson> studenten, Gruppe gruppe){
		
		// TODO: Berechnung
		int id = 21414124;
		
		return new TeamID(id); // Beispiel
	}

	/**
	 * Gibt den Integerwert einer TeamID zurück
	 * @return Integerwert der TeamID
	 */
	public int getId() {
		return id;
	}

}
