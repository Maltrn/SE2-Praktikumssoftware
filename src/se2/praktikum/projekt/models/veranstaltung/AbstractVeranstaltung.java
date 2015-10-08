package se2.praktikum.projekt.models.veranstaltung;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.AbstractPerson;

/**
 * Repräsentiert eine Veranstaltung als abstrakte Klasse
 * @author Jan
 *
 */
public abstract class AbstractVeranstaltung {
	
	
	// Felder
	protected Fach fach;					// Das Fach dieser Veranstaltung
	protected AbstractPerson professor;		// Modulverantwortlicher Professor
	protected AbstractPerson assistent;		// Assistent des Professors
	protected List<Gruppe> gruppen; 		// die enthaltenen Gruppen
	protected int anzTeilnehmer;			// aktuelle Anzahl der Teilnehmer
	protected int maxTeilnehmer; 			// Maximal mögliche Anzahl Teilnehmer
	protected int anzGruppen;				// aktuelle Anzahl der Gruppen
	protected int maxGruppen;				// max. mögliche Anzahl Gruppen
	
	
	/**
	 * Gibt das Fach einer Veranstaltung zurück
	 * @return das zugeteilte Fach
	 */
	public Fach getFach() {
		return fach;
	}
	
	/**
	 * Setzt das Fach einer Veranstaltung
	 * @param fach : das zu setzende Fach
	 */
	public void setFach(Fach fach) {
		this.fach = fach;
	}
	
	/**
	 * Gibt den Modulverantwortlichen Professor einer Veranstaltung zurück
	 * @return der verantwortliche Professor
	 */
	public AbstractPerson getProfessor() {
		return professor;
	}
	
	
	/**
	 * Setzt den Modulverantwortlichen Professor
	 * @param der verantwortliche Professor
	 */
	public void setProfessor(AbstractPerson professor) {
		this.professor = professor;
	}
	
	
	/**
	 *gibt den Assistenten des Professors zurück
	 * @return der Assistent
	 */
	public AbstractPerson getAssistent() {
		return assistent;
	}
	
	/**
	 * Setzt den Assistenten des Professors
	 * @param der Assistent des Professors
	 */
	public void setAssistent(AbstractPerson assistent) {
		this.assistent = assistent;
	}
	
	/**
	 * Gibt die Gruppen dieser Veranstaltung zurück
	 * @return die Gruppen, die zu dieser Veranstaltung gehören
	 */
	public List<Gruppe> getGruppen() {
		return gruppen;
	}
	
	/**
	 * Setzt Gruppen für diese Veranstaltung
	 * @param die zu setzenden Gruppen
	 */
	public void setGruppen(List<Gruppe> gruppen) {
		this.gruppen = gruppen;
	}
	
	/**
	 * Gibt die aktuelle Anzahl der Teilnehmer dieser Veranstaltung zurück
	 * @return die aktuelle Anzahl der Teilnehmer
	 */
	public int getAnzTeilnehmer() {
		return anzTeilnehmer;
	}
	
	/**
	 * Setzt die aktuelle Anzahl der Teilnehmer dieser Verantaltung
	 * @param aktuelle Anzahl der Teilnehmer
	 */
	public void setAnzTeilnehmer(int anzTeilnehmer) {
		this.anzTeilnehmer = anzTeilnehmer;
	}
	
	
	/**
	 * Gibt die aktuelle Anzahl der Gruppen dieser Veranstaltung zurück
	 * @return die aktuelle Anzahl der Gruppen
	 */
	public int getAnzGruppen() {
		return anzGruppen;
	}
	
	/**
	 * Gibt die aktuell maximal mögliche Anzahl von Teilnehmer zurück
	 * @return max. teilnehmer
	 */
	public int getMaxTeilnehmer(){
		return maxTeilnehmer;
	}
	
	
	/**
	 * Setzt die aktuelle Anzahl der Gruppen dieser Veranstaltung
	 * @param die aktuelle Anzahl der Gruppen
	 */
	public void setAnzGruppen(int anzGruppen) {
		this.anzGruppen = anzGruppen;
	}
	
	
	/**
	 * Gibt die maximal mögliche Anzahl der Gruppen dieser Veranstaltung zurück
	 * @return die max. Anzahl der Gruppen
	 */
	public int getMaxGruppen() {
		return maxGruppen;
	}
	
	/**
	 * Setzt die maximal mögliche Anzahl der Gruppen zu dieser Veranstaltung
	 * @param die max. Anzahl der Gruppen
	 */
	public void setMaxGruppen(int maxGruppen) {
		this.maxGruppen = maxGruppen;
	}
}
