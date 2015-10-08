package se2.praktikum.projekt.models.gruppe;

import java.util.ArrayList;
import java.util.List;

import se2.praktikum.projekt.models.person.AbstractPerson;
import se2.praktikum.projekt.models.team.Team;
import se2.praktikum.projekt.models.veranstaltung.Fach;

/**
 * Repräsentiert eine Gruppe für eine gegebene Veranstaltung
 * @author Jan
 *
 */
public class Gruppe {
	
	
	// Felder
	private Fach fach;					// Das zugehörige Fach
	private List<Termin> termine;		// Die Abgabetermine
	private List<Team> teams;			// Die zugewiesenen Teams
	private int grpNr;					// Die Gruppennummer
	private AbstractPerson professor;	// Der betreuende Professor
	private AbstractPerson assistent;	// Der betreuende Assistent
	private String raum;				// Der Raum in dem die Gruppe angeleitet wird -> evtl. eigene Klasse ???
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
	 * @param fach   : Das Fach
	 * @param grpNr : Gruppenummer
	 * @param prof : Der Professor
	 * @param assist : Der Assistent
	 */
	public Gruppe(Fach fach, int grpNr, 
				  AbstractPerson prof, AbstractPerson assist) {
		
		this(fach, grpNr, prof, assist, null, 0, 0, 0, 0);

	}
	/**
	 * Initialisiert eine neue Gruppe mit den übergebenen Parametern
	 * @param fach : Fach der Gruppe
	 * @param grpNr : Gruppennummer
	 * @param prof : Der Professor
	 * @param assist : der Assistent
	 * @param raum : Der Raum
	 * @param maxTeams : max. Teams
	 * @param resTeams : reserve Teams
	 * @param minTeams : min. Teams
	 * @param anzTeams : aktuelle Anzahl Teams
	 */
	public Gruppe(Fach fach, int grpNr,
				  AbstractPerson prof, AbstractPerson assist,
				  String raum, int maxTeams, 
				  int resTeams, int minTeams,
				  int anzTeams)				{
		
		this.fach = fach;
		this.grpNr = grpNr;
		this.professor = prof;
		this.assistent = assist;
		this.raum = raum;
		this.maxTeams = maxTeams;
		this.reservTeams = resTeams;
		this.minTeams = minTeams;
		this.anzTeams = anzTeams;
		this.termine = new ArrayList<>();
		this.teams = new ArrayList<>();
	}


	/**
	 * Gibt das aktuelle Fach zurück
	 * @return Fach
	 */
	public Fach getFach() {
		return fach;
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
	 * Gibt alle Teams dieser Gruppe zurück
	 * @return alle Teams dieser Gruppe
	 */
	public List<Team> getTeams() {
		return teams;
	}

	/**
	 * Setzt die Teams dieser Gruppe
	 * @param Teams
	 */
	public void setTeams(List<Team> teams) {
		this.teams = teams;
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
	public AbstractPerson getProfessor() {
		return professor;
	}

	/**
	 * Setzt den betreuenden Professor
	 * @param professor
	 */
	public void setProfessor(AbstractPerson professor) {
		this.professor = professor;
	}

	/**
	 * Gibt den betreuenden Assistenten zurück
	 * @return Assistent
	 */
	public AbstractPerson getAssistent() {
		return assistent;
	}

	/**
	 * Setzt den betreuenden Assistenten
	 * @param assistent
	 */
	public void setAssistent(AbstractPerson assistent) {
		this.assistent = assistent;
	}

	/**
	 * Gibt den Raum der Gruppe zurück
	 * @return Raum
	 */
	public String getRaum() {
		return raum;
	}

	/**
	 * Setzt den Raum dieser Gruppe
	 * @param raum
	 */
	public void setRaum(String raum) {
		this.raum = raum;
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
	
	
	
	

}
