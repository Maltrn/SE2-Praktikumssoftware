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
import se2.praktikum.projekt.models.person.fachwerte.MatrikelNr;
import se2.praktikum.projekt.models.team.Team;
import se2.praktikum.projekt.models.veranstaltung.AbstrVeranstaltung;
import se2.praktikum.projekt.models.veranstaltung.Veranstaltung;
import se2.praktikum.projekt.tools.Mapper;

@Controller
public class VeranstaltungsCtrlAdmin {
	
	private static AnzeigerSrv anzeigeSrv;
	
	private static GruppVerwSrv gruppVerwSrv;
	private static TeamVerwSrv teamVerwSrv;
	private static VeranstaltungsVerwalterSrv veranVerwSrv;

	/**
	 * holt alle Pflichtpraktika für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/pflichtpraktika", method=RequestMethod.POST)
	public @ResponseBody List<Veranstaltung> praktikaAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzeigeSrv;
		//int semester = Integer.parseInt(args.get(0));
		//List<Veranstaltung> veranstaltungen = srv.getAllPraktika(semester, args.get(1));
		
		return null;
	}
	
	/**
	 * holt alle Professoren für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/profs", method=RequestMethod.POST)
	public @ResponseBody List<Angestellter> getProfessoren(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzeigeSrv;
		int semester = Integer.parseInt(args.get(0));
		//List<Angestellter> profs = srv.getAlleProfessoren(semester, args.get(0));
		
		return null;
		
	}
	
	
	/**
	 * holt alle Assistenten für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/assistenten", method=RequestMethod.POST)
	public @ResponseBody List<Angestellter> getAssistenten(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzeigeSrv;
		int semester = Integer.parseInt(args.get(0));
		// List<Angestellter> profs = srv.getAlleAssistenten(semester, args.get(0));
		
		return null;
		
	}
	
	
	/**
	 * holt alle WP für eine gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/wp", method=RequestMethod.POST)
	public @ResponseBody List<Veranstaltung> wpAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzeigeSrv;
		int semester = Integer.parseInt(args.get(0));
		// List<Veranstaltung> veranstaltungen = srv.getAllWP(semester, args.get(1));
		
		return null;
	}
	
	
	/**
	 * holt alle PO für ein gegebenes Semester und Fachbereich
	 * @param args : args[0] = semester, args[1] = fachbereich
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/po", method=RequestMethod.POST)
	public @ResponseBody List<Veranstaltung> poAnzeigen(@RequestBody List<String> args){
		
		AnzeigerSrv srv = anzeigeSrv;
		int semester = Integer.parseInt(args.get(0));
		// List<Veranstaltung> veranstaltungen = srv.getAllPO(semester, args.get(1));
		
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
	public static @ResponseBody boolean veranstaltungErstellen(@RequestBody Veranstaltung va){
		
		VeranstaltungsVerwalterSrv srv = veranVerwSrv;
		System.out.println(va.getProfessor().getVollerName());
		System.out.println(va.getProfessor().getMaID());
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
		
		System.out.println(veranstaltung.getFach().getFachKuerzel());
		GruppVerwSrv srv = gruppVerwSrv;
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
		GruppVerwSrv srv = gruppVerwSrv;
	
		
		
		return true;
		// try-catch..
		

	}
	
	/**
	 * Bearbeitet eine Gruppe in der Datenbank
	 * @param gruppe : Die bearbeitete Gruppe
	 * @return boolean
	 */
	@RequestMapping(value="/gruppBearbeiten", method=RequestMethod.POST)
	public @ResponseBody boolean gruppeBearbeiten(@RequestBody String gruppe){
		Gruppe gr = Mapper.mapGruppe(gruppe);
		GruppVerwSrv srv = gruppVerwSrv;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Löscht eine Gruppe aus der Datenbank
	 * @param gruppe : die zu löschende Gruppe
	 * @return boolean 
	 */
	@RequestMapping(value="/gruppLoeschen", method=RequestMethod.POST)
	public @ResponseBody boolean gruppeLoeschen(@RequestBody String gruppe){
		Gruppe gr = Mapper.mapGruppe(gruppe);
		GruppVerwSrv srv = gruppVerwSrv;
		// try-catch..
		
		return true;
	}
	
	/**
	 * Ermittelt alle Teams einer Gruppe aus der Datenbank
	 * @param gruppe : Die gruppe der Teilnehmer
	 * @return Liste Teams der Gruppe
	 */
	@RequestMapping(value="/tmUebersicht", method=RequestMethod.POST)
	public @ResponseBody List<Team> teilnehmerUebersichtAnzeigen(@RequestBody String gruppe){
		
		AnzeigerSrv srv = anzeigeSrv;
		Gruppe gr = Mapper.mapGruppe(gruppe);
		
		// List<Team> teams = srv.getAllTeilnehmer(gr);
		
		
		return null;
	}
	
	/**
	 * Entfernt einen Teilnehmer aus einer Gruppe und Team
	 * 
	 * @param args : args[0] = TeamID, args[1] = MatrikelNummer
	 * @return boolean
	 */
	@RequestMapping(value="/tmEntfernen", method=RequestMethod.POST)
	public @ResponseBody boolean tmEntfernen(@RequestBody List<String> args){
		
		Team team = Mapper.mapTeam(args.get(0));
		
		MatrikelNr matrNr = MatrikelNr.getMatrikelNr(Integer.parseInt(args.get(1)));
		
		TeamVerwSrv srv = teamVerwSrv;
		// try-catch..
		
		return true;
	}
	
	

	public static void setCurrUser() {
		System.out.println("setted");
		
	}

	public static void setAnzeigeSrv(AnzeigerSrv anzSrv) {
		anzeigeSrv = anzSrv;
		
	}

	public static void setGruppVerwSrv(GruppVerwSrv grVwSrv) {
		gruppVerwSrv = grVwSrv;
		
	}

	public static void setTeamVerwSrv(TeamVerwSrv tmVwSrv) {
		teamVerwSrv = tmVwSrv;
		
	}

	public static void setVeranstVwSrv(VeranstaltungsVerwalterSrv vVwSrv) {
		veranVerwSrv = vVwSrv;
		
	}
	
	

}
