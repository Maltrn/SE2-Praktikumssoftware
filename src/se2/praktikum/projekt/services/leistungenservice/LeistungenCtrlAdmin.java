package se2.praktikum.projekt.services.leistungenservice;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import se2.praktikum.projekt.models.leistungen.Leistung;

@Controller
public class LeistungenCtrlAdmin {

	
	private static LeistungenAnzSrv leistungenAnzSrv;
	
	
	/**
	 * Holt alle Leistungen für die Übergebenen Parameter
	 * @param args : args[0] = fachkuerzel, args[1] = gruppenummer, 
	 * @return Liste von Leistungen
	 */
	@RequestMapping(value="/leistungen", method=RequestMethod.POST)
	public @ResponseBody List<Leistung> leistungenAnzeigen(@RequestBody List<String> args){
		
		LeistungenAnzSrv srv = leistungenAnzSrv;
		String fachkuerzel = args.get(0);
		int grpNr = Integer.parseInt(args.get(1));
		
		List<Leistung> leistungen = srv.getLeistungen(fachkuerzel, grpNr);
		// try-catch..
		
		return null;
	}
	
	
	/**
	 * Bearbeitet die übergebene Leistung in der Datenbank
	 * @param leistung : Die geänderte Leistung
	 * @return 
	 */
	@RequestMapping(value="/leistungEintragen", method=RequestMethod.POST)
	public @ResponseBody boolean leistungenAnzeigen(@RequestBody Leistung leistung){
		
		
		LeistungenAnzSrv srv = leistungenAnzSrv;
		boolean erfolgreich = srv.trageLeistungEin(leistung);
		
		return erfolgreich;
	}
	
	
	/**
	 * holt alle Gruppennummern für eine gegebene Veranstaltung und listet diese im Dropdownmenu -> Frontend
	 * @param fachkuerzel : Das Fachkuerzel
	 * @return	Liste Veranstaltungen für die übergebenen Parameter
	 */
	@RequestMapping(value="/grNummern", method=RequestMethod.POST)
	public @ResponseBody List<Integer> holeGruppenNummern(@RequestBody List<String> args){
		
		List<Integer> grNummern = leistungenAnzSrv.getGruppenNummern(args.get(0), args.get(1));
		
		return grNummern;
		
	}
	

	/**
	 * holt alle Fachkuerzel für die übergebenen Parameter und listet diese im Dropdownmenu -> Frontend
	 * @param args : args[0] = fachbereich, args[1] = typ, args[2] = semester
	 * @return	Liste Fachkuerzel für die übergebenen Parameter
	 */
	@RequestMapping(value="/fachkuerzel", method=RequestMethod.POST)
	public @ResponseBody List<String> holeFachkuerzel(@RequestBody List<String> args){
		
		int semester = Integer.parseInt(args.get(1));
		List<String> fachkuerzel = leistungenAnzSrv.getFachkuerzel(args.get(0), args.get(1), semester);
		
		return fachkuerzel;
		
	}
	
	// Getter und Setter
	
	public static LeistungenAnzSrv getLeistungenAnzSrv() {
		return leistungenAnzSrv;
	}

	public static void setLeistungenAnzSrv(LeistungenAnzSrv leistungenAnzSrv) {
		LeistungenCtrlAdmin.leistungenAnzSrv = leistungenAnzSrv;
	}
	
	
	
	

}
