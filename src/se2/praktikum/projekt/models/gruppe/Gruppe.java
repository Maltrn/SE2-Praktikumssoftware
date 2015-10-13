package se2.praktikum.projekt.models.gruppe;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import se2.praktikum.projekt.models.person.AbstrPerson;
import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.team.Team;

/**
 * Repräsentiert eine Gruppe für eine gegebene Veranstaltung
 * @author Jan
 *
 */
public class Gruppe {
	
	// Felder
	private String fachkuerzel;
	private List<Termin> termine;		// Die Abgabetermine
	private int grpNr;					// Die Gruppennummer
	private Angestellter professor;	// Der betreuende Professor
	private Angestellter assistent;	// Der betreuende Assistent
	private int maxTeams;				// Maximal Anzahl Teams in der Gruppe
	private int reservTeams;			// Anzahl der Team-Reserveslots
	private int minTeams;				// Minimale Anzahl Teams
	private int anzTeams;				// aktuelle Anzahl Teams
	
	
	/**
	 * Default-Konstruktor
	 * Initialisiert ein neue Gruppe ohne Parameter
	 * Felder können seperat über Setter festgelegt werden
	 */
	public Gruppe(){
		
		this(null, 0, null, null);
		
	}
	
	
	/**
	 * Initialisiert eine neue Gruppe mit den wichtigsten Parametern
	 * @param grpNr : Gruppenummer
	 * @param prof : Der Professor
	 * @param assist : Der Assistent
	 */
	public Gruppe(String fachkuerzel, int grpNr,Angestellter prof, 
				Angestellter assist) {
		
		this(fachkuerzel, grpNr, null, prof, assist, 0, 0, 0, 0);

	}
	/**
	 * Initialisiert eine neue Gruppe mit den übergebenen Parametern
	 * @param grpNr : Gruppennummer
	 * @param prof : Der Professor
	 * @param assist : der Assistent
	 * @param raum : Der Raum
	 * @param maxTeams : max. Teams
	 * @param resTeams : reserve Teams
	 * @param minTeams : min. Teams
	 * @param anzTeams : aktuelle Anzahl Teams
	 */
	@JsonCreator
	public Gruppe(@JsonProperty("fachkuerzel") String fachkuerzel, 
				  @JsonProperty("grpNr") int grpNr, 
				  @JsonProperty("termine") List<Termin> termine,
				  @JsonProperty("dozent") Angestellter prof, 
				  @JsonProperty("assistent") Angestellter assist,
				  @JsonProperty("minTeams") int minTeams, 
				  @JsonProperty("maxTeams") int maxTeams, 
				  @JsonProperty("reservTeams") int resTeams, 
				  @JsonProperty("anzTeams") int anzTeams)				{
		
		this.fachkuerzel = fachkuerzel;
		this.grpNr = grpNr;
		this.professor = prof;
		this.assistent = assist;
		this.maxTeams = maxTeams;
		this.reservTeams = resTeams;
		this.minTeams = minTeams;
		this.anzTeams = anzTeams;
		this.termine = termine;
	}


	/**
	 * Gibt alle Termnine zurück
	 * @return alle Termine
	 */
	public List<Termin> getTermine() {
		return termine;
	}

	/**
	 * Setzt neue Termine
	 * @param termine
	 */
	public void setTermine(List<Termin> termine) {
		this.termine = termine;
	}


	/**
	 * Gibt die Gruppennummer zurück
	 * @return Gruppennummer
	 */
	public int getGrpNr() {
		return grpNr;
	}

	
	/**
	 * Setzt die Gruppennummer dieser Gruppe
	 * @param grpNr : Gruppennummer
	 */
	public void setGrpNr(int grpNr) {
		this.grpNr = grpNr;
	}

	/**
	 * Gibt den betreuenden Professor zurück
	 * @return betreuender Professor
	 */
	public Angestellter getProfessor() {
		return professor;
	}

	/**
	 * Setzt den betreuenden Professor
	 * @param professor
	 */
	public void setProfessor(Angestellter professor) {
		this.professor = professor;
	}

	/**
	 * Gibt den betreuenden Assistenten zurück
	 * @return Assistent
	 */
	public Angestellter getAssistent() {
		return assistent;
	}

	/**
	 * Setzt den betreuenden Assistenten
	 * @param assistent
	 */
	public void setAssistent(Angestellter assistent) {
		this.assistent = assistent;
	}


	/**
	 * Gibt die max. mögliche Anzahl Teams zurück
	 * @return max. Anzahl Teams
	 */
	public int getMaxTeams() {
		return maxTeams;
	}

	
	/**
	 * Setzt die max. Anzahl der Teams dieser Gruppe
	 * @param max. anzahl Teams
	 */
	public void setMaxTeams(int maxTeams) {
		this.maxTeams = maxTeams;
	}

	
	/**
	 * Gibt die aktuelle Anzahl von Reserveteamslots zurück
	 * @return
	 */
	public int getReservTeams() {
		return reservTeams;
	}

	
	/**
	 * Setzt die maximale Anzahl an Reserveteamslots
	 * @param reservTeams
	 */
	public void setReservTeams(int reservTeams) {
		this.reservTeams = reservTeams;
	}

	
	/**
	 * Gibt die minimale anzahl an Teams zurück, die die Gruppe haben muss
	 * @return min. Anzahl Teams
	 */
	public int getMinTeams() {
		return minTeams;
	}


	/**
	 * Setzt die minimale Anzahl Teams, die eine Gruppe haben muss
	 * @param min. anzahl Teams
	 */
	public void setMinTeams(int minTeams) {
		this.minTeams = minTeams;
	}

	
	/**
	 * Gibt die aktuelle Anzahl Teams zurück (inkl. belegte Reserve)
	 * @return aktuelle Anzahl Teams
	 */
	public int getAnzTeams() {
		return anzTeams;
	}

	/**
	 * Setzt aktuelle Anzahl Teams
	 * @param anzTeams
	 */
	public void setAnzTeams(int anzTeams) {
		this.anzTeams = anzTeams;
	}

	/**
	 * Gibt das zugehörige Fachkürzel einer Gruppe zurück
	 * @return fachkuerzel
	 */
	public String getFachkuerzel() {
		return fachkuerzel;
	}

	/**
	 * Setzt das zugehörige Fachkürzel
	 * @param fachkuerzel
	 */
	public void setFachkuerzel(String fachkuerzel) {
		this.fachkuerzel = fachkuerzel;
	}
	
	
}
