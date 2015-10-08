package se2.praktikum.projekt.models.veranstaltung;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.Person;

/**
 * Repräsentiert eine Veranstaltung
 * @author jan
 *
 */
public interface Veranstaltung {

	/**
	 * Gibt das Fach einer Veranstaltung zurück
	 * @return das zugeteilte Fach
	 */
	public Fach getFach();

	/**
	 * Setzt das Fach einer Veranstaltung
	 * @param fach : das zu setzende Fach
	 */
	public void setFach(Fach fach);

	/**
	 * Gibt den Modulverantwortlichen Professor einer Veranstaltung zurück
	 * @return der verantwortliche Professor
	 */
	public Person getProfessor();

	/**
	 * Setzt den Modulverantwortlichen Professor
	 * @param der verantwortliche Professor
	 */
	public void setProfessor(Person professor);

	/**
	 *gibt den Assistenten des Professors zurück
	 * @return der Assistent
	 */
	public Person getAssistent();

	/**
	 * Setzt den Assistenten des Professors
	 * @param der Assistent des Professors
	 */
	public void setAssistent(Person assistent);

	/**
	 * Gibt die Gruppen dieser Veranstaltung zurück
	 * @return die Gruppen, die zu dieser Veranstaltung gehören
	 */
	public List<Gruppe> getGruppen();

	/**
	 * Setzt Gruppen für diese Veranstaltung
	 * @param die zu setzenden Gruppen
	 */
	public void setGruppen(List<Gruppe> gruppen);

	/**
	 * Gibt die aktuelle Anzahl der Teilnehmer dieser Veranstaltung zurück
	 * @return die aktuelle Anzahl der Teilnehmer
	 */
	public int getAnzTeilnehmer();

	/**
	 * Setzt die aktuelle Anzahl der Teilnehmer dieser Verantaltung
	 * @param aktuelle Anzahl der Teilnehmer
	 */
	public void setAnzTeilnehmer(int anzTeilnehmer);

	/**
	 * Gibt die aktuelle Anzahl der Gruppen dieser Veranstaltung zurück
	 * @return die aktuelle Anzahl der Gruppen
	 */
	public int getAnzGruppen();

	/**
	 * Gibt die aktuell maximal mögliche Anzahl von Teilnehmer zurück
	 * @return max. teilnehmer
	 */
	int getMaxTeilnehmer();

	/**
	 * Setzt die aktuelle Anzahl der Gruppen dieser Veranstaltung
	 * @param die aktuelle Anzahl der Gruppen
	 */
	public void setAnzGruppen(int anzGruppen);

	/**
	 * Gibt die maximal mögliche Anzahl der Gruppen dieser Veranstaltung zurück
	 * @return die max. Anzahl der Gruppen
	 */
	public int getMaxGruppen();

	/**
	 * Setzt die maximal mögliche Anzahl der Gruppen zu dieser Veranstaltung
	 * @param die max. Anzahl der Gruppen
	 */
	public void setMaxGruppen(int maxGruppen);

}
