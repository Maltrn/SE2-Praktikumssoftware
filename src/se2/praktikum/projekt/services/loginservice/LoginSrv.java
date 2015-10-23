package se2.praktikum.projekt.services.loginservice;

import org.springframework.web.servlet.ModelAndView;

import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.person.Assistent;
import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.person.Student;
import se2.praktikum.projekt.models.person.fachwerte.MAID;
import se2.praktikum.projekt.services.leistungenservice.LeistungenAnzSrv;
import se2.praktikum.projekt.services.leistungenservice.LeistungenCtrlAdmin;
import se2.praktikum.projekt.services.veranstaltungsservice.AnzeigerSrv;
import se2.praktikum.projekt.services.veranstaltungsservice.GruppVerwSrv;
import se2.praktikum.projekt.services.veranstaltungsservice.TeamVerwSrv;
import se2.praktikum.projekt.services.veranstaltungsservice.VeranstaltungsCtrlAdmin;
import se2.praktikum.projekt.services.veranstaltungsservice.VeranstaltungsVerwalterSrv;

public class LoginSrv {
	
	
	private Person user = null;
	

	/**Einen Benutzer anhand des Usernames und Passwortes aus der DB
	 * identifizieren und 
	 * @param username
	 * @param password
	 * @return
	 */
	public Person login(String username, String password) {

		// Authentifizieren
		
		// Falls Fehlschlag -> user = null;
		Person user = new Assistent(MAID.getMAID(1), "Jan", "Dieckhoff");
		this.user = user;  // Bei erfolg zuweisen
		
		return this.user; // und zurückgeben
		
	}
	
	
	/**
	 * Den aktuellen Benutzer abmelden
	 * @return 
	 * @return
	 */
	public ModelAndView logout(){
		
		setUser(null);
		ModelAndView mv = new ModelAndView("login");
		return mv;
	}

	public Person getUser() {
		return user;
	}

	public void setUser(Person user) {
		this.user = user;
	}
	
	/**
	 * Erzeugt alle nötigen Services bei erfolgreichem Login
	 */
	public void erzeugeServices(){
		
		
		// Erzeugen
		AnzeigerSrv veranAnzSrv = new AnzeigerSrv();
		//AnzeigerSrv veranAnzSrv = new AnzeigerSrv(this.user);
		GruppVerwSrv grVwSrv = new GruppVerwSrv(this.user);
		TeamVerwSrv tmVwSrv = new TeamVerwSrv(this.user);
		VeranstaltungsVerwalterSrv vVwSrv = new VeranstaltungsVerwalterSrv(this.user);
		LeistungenAnzSrv leistAnzSrv= new LeistungenAnzSrv(veranAnzSrv, this.user);
		
		// Initialisieren
		//VeranstaltungsCtrlAdmin.setAnzeigeSrv(veranAnzSrv);
		VeranstaltungsCtrlAdmin.setGruppVerwSrv(grVwSrv);
		VeranstaltungsCtrlAdmin.setTeamVerwSrv(tmVwSrv);
		VeranstaltungsCtrlAdmin.setVeranstVwSrv(vVwSrv);
		LeistungenCtrlAdmin.setLeistungenAnzSrv(leistAnzSrv);
	}



	
	/**
	 * Lädt das Mainpanel (Angestellter)
	 * HINWEIS: Erstmal wird für beide Benutzer die gleiche View geladen,
	 * da Studentpanel noch nicht erstellt
	 * @return View
	 */
	public ModelAndView ladeAngestPanel() {
		
		erzeugeServices();
		ModelAndView mv = new ModelAndView("apanel");
			// informiere... (zb "fail"-View laden -> muss erst noch erstellt werden)
		return mv;
	}
	
	
	/**
	 * Lädt das Mainpanel (Angestellter)
	 * HINWEIS: Erstmal wird für beide Benutzer die gleiche View geladen,
	 * da Studentpanel noch nicht erstellt
	 * @return View
	 */
	public ModelAndView ladeStudPanel() {
		
		erzeugeServices();
		ModelAndView mv = new ModelAndView("spanel");
			// informiere... (zb "fail"-View laden -> muss erst noch erstellt werden)
		return mv;
	}

}
