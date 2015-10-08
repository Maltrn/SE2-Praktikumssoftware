package se2.praktikum.projekt.services.veranstaltungsservice;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.AbstractPerson;
import se2.praktikum.projekt.models.veranstaltung.AbstractVeranstaltung;

@Controller
public class VeranstaltungsCtrlAdmin {
	
	
	private AnzeigerSrv anzService = new AnzeigerSrv();
	private TeamVerwSrv teamVerwSrv = new TeamVerwSrv();
	private GruppVerwSrv gruppVerwServ = new GruppVerwSrv();
	private VeranstaltungsVerwalterSrv veranVerwSrv = new VeranstaltungsVerwalterSrv();
	
	
	/**
	 * holt alle Pflichtpraktika für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/pflichtpraktika", method=RequestMethod.POST)
	public @ResponseBody List<AbstractVeranstaltung> praktikaAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzService;
		System.out.println(args.toString());
		// try-catch-Block
		// bei SQLException -> false zurückgeben
		return null;
		
	}
	
	/**
	 * holt alle WP für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/wp", method=RequestMethod.POST)
	public @ResponseBody List<AbstractVeranstaltung> wpAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzService;
		// try-catch..
		
		return null;
	}
	
	
	/**
	 * holt alle PO für ein gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/po", method=RequestMethod.POST)
	public @ResponseBody List<AbstractVeranstaltung> poAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzService;
		
		// try-catch..
		
		return null;
	}
	
	/**
	 * Bearbeitet eine Veranstaltung aus der Datenbank
	 * @param veranstaltung : Die editierte Veranstaltung
	 * @return	boolean
	 */
	@RequestMapping(value="/vbearbeiten", method=RequestMethod.POST)
	public boolean veranstaltungBearbeiten(AbstractVeranstaltung veranstaltung){
		
		VeranstaltungsVerwalterSrv srv = veranVerwSrv;
		
		// try-catch..
		
		return true;
	}
	
	/**
	 * Erstellt eine Veranstaltung in der Datenbank
	 * @param veranstaltung : Die neue Veranstaltung
	 * @return boolean
	 */
	@RequestMapping(value="/vErstellen", method=RequestMethod.POST)
	public boolean veranstaltungErstellen(AbstractVeranstaltung veranstaltung){
		
		VeranstaltungsVerwalterSrv srv = veranVerwSrv;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Löscht eine Veranstaltung aus der Datenbank
	 * @param veranstaltung
	 * @return
	 */
	@RequestMapping(value="/vLoeschen", method=RequestMethod.POST)
	public boolean veranstaltungLoeschen(AbstractVeranstaltung veranstaltung){
		
		VeranstaltungsVerwalterSrv srv = veranVerwSrv;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Holt alle Gruppen einer Veranstaltung aus der Datenbank
	 * @param veranstaltung
	 * @return Liste der Veranstaltungen
	 */
	@RequestMapping(value="/gruppUebersicht", method=RequestMethod.POST)
	public @ResponseBody List<Gruppe> gruppenUebersichtAnzeigen(AbstractVeranstaltung veranstaltung){
		
		GruppVerwSrv srv = gruppVerwServ;
		// try-catch..
		
		return null;
	}
	
	/**
	 * Erstellt eine Gruppe in der Datenbank
	 * @param gruppe : Die erstellte gruppe
	 * @return boolean
	 */
	@RequestMapping(value="/gruppErstellen", method=RequestMethod.POST)
	public boolean gruppeErstellen(Gruppe gruppe){
		
		GruppVerwSrv srv = gruppVerwServ;
		
		// try-catch..
		
		return true;
	}
	
	/**
	 * Bearbeitet eine Gruppe in der Datenbank
	 * @param gruppe : Die bearbeitete Gruppe
	 * @return boolean
	 */
	@RequestMapping(value="/gruppBearbeiten", method=RequestMethod.POST)
	public boolean gruppeBearbeiten(Gruppe gruppe){
		
		GruppVerwSrv srv = gruppVerwServ;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Löscht eine Gruppe aus der Datenbank
	 * @param gruppe : die zu löschende Gruppe
	 * @return boolean 
	 */
	@RequestMapping(value="/gruppLoeschen", method=RequestMethod.POST)
	public boolean gruppeLoeschen(Gruppe gruppe){
		
		GruppVerwSrv srv = gruppVerwServ;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Ermittelt alle Teilnehmer einer Gruppe aus der Datenbank
	 * @param gruppe : Die gruppe der Teilnehmer
	 * @return Liste teilnehmende Studenten der Gruppe
	 */
	@RequestMapping(value="/tmUebersicht", method=RequestMethod.POST)
	public @ResponseBody List<AbstractPerson> teilnehmerUebersichtAnzeigen(Gruppe gruppe){
		
		
		TeamVerwSrv srv = teamVerwSrv;
		// try-catch..
		
		return null;
	}
	
	/**
	 * Entfernt einen Teilnehmer aus einer Gruppe 
	 * @param gruppe, student
	 * @return boolean
	 */
	@RequestMapping(value="/tmEntfernen", method=RequestMethod.POST)
	public boolean tmEntfernen(Gruppe gruppe, AbstractPerson student){
		
		
		TeamVerwSrv srv = teamVerwSrv;
		// try-catch..
		
		return true;
	}
	
	

}
