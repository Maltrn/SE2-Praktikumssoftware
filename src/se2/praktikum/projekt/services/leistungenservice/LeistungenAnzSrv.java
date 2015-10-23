package se2.praktikum.projekt.services.leistungenservice;

import java.util.List;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.leistungen.Leistung;
import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.veranstaltung.Veranstaltung;
import se2.praktikum.projekt.services.veranstaltungsservice.AnzeigerSrv;


public class LeistungenAnzSrv {

	private AnzeigerSrv veranAnzSrv;	// Anzeigeservice zur Ermittlung einiger Infos
	
	/**
	 * Initialisiert einen neuen LeistungenAnzSrv
	 * @param veranAnzSrv : Der AnzeigerService
	 * @param user : Der angemeldete User
	 */
	public LeistungenAnzSrv(AnzeigerSrv veranAnzSrv, Person user) {
		
		this.setVeranAnzSrv(veranAnzSrv);
	}

	/**
	 * Holt alle Leistungen für die übergebenen Parameter aus der DB
	 * @param fachkuerzel : Das Fachkuerzel (primary key)
	 * @param grpNr : Die Gruppenummer
	 * @return Liste Leistungen
	 */
	public List<Leistung> getLeistungen(String fachkuerzel, int grpNr) {
		
		Gruppe gruppe = getGruppe(fachkuerzel, grpNr);
		
		// List<Team> teams = veranAnzSrv.getAllTeilnehmer(gruppe);
		
		List<Leistung> leistungen = null;
		
		// Anhand der Studenten in den Teamobjekten, die Leistungen aus der DB ermitteln
		
		return leistungen;
	}

	/**
	 * Hole eine Gruppe aus der DB anhand der Parameter
	 * @param fachkuerzel
	 * @param grpNr
	 * @return
	 */
	private Gruppe getGruppe(String fachkuerzel, int grpNr) {
		
		// Gruppe aus der Datenbank holen
		return null;
	}

	
	/**
	 * Ermittelt alle Fachkuerzel für die übergebenen Parameter
	 * @param fachbereich
	 * @param typ
	 * @param semester
	 * @return
	 */
	public List<String> getFachkuerzel(String fachbereich, String typ, int semester) {
		
		List<Veranstaltung> veranstaltungen = null;
		List<String> fachkuerzel = null;
		
		if(typ.equals("praktikum")){
			
			veranstaltungen = veranAnzSrv.getAllPraktika(semester, fachbereich);
			
		}else if(typ.equals("po")){
			
			//veranstaltungen = veranAnzSrv.getAllPO(semester, fachbereich);
			
		}else{
			
			//veranstaltungen = veranAnzSrv.getAllWP(semester, fachbereich);
			
		}
		
		// Fachkuerzel aus der Liste ermitteln
		return fachkuerzel;
	}

	/**
	 * Ermittelt eine Veranstaltung aus der DB für die übergebenen Parameter
	 * @param typ
	 * @param fachkuerzel
	 * @return
	 */
	private Veranstaltung getVeranstaltung(String typ, String fachkuerzel) {
		
		Veranstaltung va = null;
		if(typ.equals("praktikum")){
			
			// Praktikum aus der Datenbank holen und Objekt erzeugen
			// Beispiel -> select * from Praktikum
			
		}else if(typ.equals("po")){
			// Praktikum aus der Datenbank holen und Objekt erzeugen
			// Beispiel -> select * from PO
		}else{
			// Praktikum aus der Datenbank holen und Objekt erzeugen
		}
		return va;
	}

	/**
	 * Ermittelt alle Gruppennummern zu den übergebenen Parametern
	 * @param typ
	 * @param semester
	 * @param fachkuerzel
	 * @return
	 */
	public List<Integer> getGruppenNummern(String typ, String fachkuerzel) {

		
		Veranstaltung va = getVeranstaltung(typ, fachkuerzel);
		List<Gruppe> gruppen = veranAnzSrv.getAllGruppen(va);
		
		// Gruppenummer aus der Liste filtern und zurückgeben
		return null;
	}

	
	/**
	 * Verändert die Atribute einer übergebenen Leistung und speichert diese in der Datenbank
	 * -> Siehe Klasse "Leistung"
	 * @param leistung
	 * @return
	 */
	public boolean trageLeistungEin(Leistung leistung) {
		
		return false;
	}
	
	
	
	public AnzeigerSrv getVeranAnzSrv() {
		return veranAnzSrv;
	}
	

	public void setVeranAnzSrv(AnzeigerSrv veranAnzSrv) {
		this.veranAnzSrv = veranAnzSrv;
	}
	
	

	
	


}
