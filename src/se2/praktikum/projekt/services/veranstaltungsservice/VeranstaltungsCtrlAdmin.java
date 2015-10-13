package se2.praktikum.projekt.services.veranstaltungsservice;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.person.Professor;
import se2.praktikum.projekt.models.veranstaltung.AbstrVeranstaltung;
import se2.praktikum.projekt.models.veranstaltung.Veranstaltung;
import se2.praktikum.projekt.tools.Mapper;

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
	public @ResponseBody List<Veranstaltung> praktikaAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzService;
		// try-catch-Block
		// bei SQLException -> false zurückgeben
		return null;
	}
	
	/**
	 * holt alle Professoren für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/profs", method=RequestMethod.POST)
	public @ResponseBody List<Angestellter> getProfessoren(@RequestBody List<String> args){
		
	
		return null;
		
	}
	
	
	/**
	 * holt alle Assistenten für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/assistenten", method=RequestMethod.POST)
	public @ResponseBody List<Angestellter> getAssistenten(@RequestBody List<String> args){
		
	
		return null;
		
	}
	
	/**
	 * holt alle Gruppennummern für eine gegebene Veranstaltung
	 * @param va: Die Veranstaltung
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/grNummern", method=RequestMethod.POST)
	public @ResponseBody List<Integer> getAssistenten(@RequestBody Veranstaltung va){
		
	
		return null;
		
	}
	
	/**
	 * holt alle WP für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/wp", method=RequestMethod.POST)
	public @ResponseBody List<Veranstaltung> wpAnzeigen(@RequestBody List<String> args){
		
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
	public @ResponseBody List<Veranstaltung> poAnzeigen(@RequestBody List<String> args){
		
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
	public boolean veranstaltungBearbeiten(@RequestBody Veranstaltung veranstaltung){
		
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
	public @ResponseBody boolean veranstaltungErstellen(@RequestBody Veranstaltung va){
		
		VeranstaltungsVerwalterSrv srv = veranVerwSrv;
		// try-catch...
		
		return true;
	}
	
	/**
	 * Löscht eine Veranstaltung aus der Datenbank
	 * @param veranstaltung
	 * @return
	 */
	@RequestMapping(value="/vLoeschen", method=RequestMethod.POST)
	public boolean veranstaltungLoeschen(@RequestBody Veranstaltung veranstaltung){
		
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
	public @ResponseBody List<Gruppe> gruppenUebersichtAnzeigen(@RequestBody Veranstaltung veranstaltung){
		
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
	public @ResponseBody boolean gruppeErstellen(@RequestBody String gruppe){
		
		Gruppe gr = Mapper.mapGruppe(gruppe);
		GruppVerwSrv srv = gruppVerwServ;
		
		System.out.println(gr.getTermine().get(0).getRaum());
		System.out.println(gr.getTermine().get(1).getRaum());
		System.out.println(gr.getTermine().get(2).getRaum());
		System.out.println(gr.getTermine().get(3).getRaum());
		
		
		return true;
		// try-catch..
		

	}
	
	/**
	 * Bearbeitet eine Gruppe in der Datenbank
	 * @param gruppe : Die bearbeitete Gruppe
	 * @return boolean
	 */
	@RequestMapping(value="/gruppBearbeiten", method=RequestMethod.POST)
	public boolean gruppeBearbeiten(@RequestBody String gruppe){
		Gruppe gr = Mapper.mapGruppe(gruppe);
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
	public boolean gruppeLoeschen(@RequestBody String gruppe){
		Gruppe gr = Mapper.mapGruppe(gruppe);
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
	public @ResponseBody List<Person> teilnehmerUebersichtAnzeigen(@RequestBody String gruppe){
		Gruppe gr = Mapper.mapGruppe(gruppe);
		TeamVerwSrv srv = teamVerwSrv;
		// try-catch..
		
		return null;
	}
	
	/**
	 * Entfernt einen Teilnehmer aus einer Gruppe 
	 * 
	 * @param args : args[0] = gruppe, args[1] = matrikelNr
	 * @return boolean
	 */
	@RequestMapping(value="/tmEntfernen", method=RequestMethod.POST)
	public boolean tmEntfernen(@RequestBody List<String> args){
		
		TeamVerwSrv srv = teamVerwSrv;
		// try-catch..
		
		return true;
	}
	
	

}
