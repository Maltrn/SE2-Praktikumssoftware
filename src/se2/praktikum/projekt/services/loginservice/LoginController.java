package se2.praktikum.projekt.services.loginservice;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import se2.praktikum.projekt.models.person.Angestellter;
import se2.praktikum.projekt.models.person.Assistent;
import se2.praktikum.projekt.models.person.Person;
import se2.praktikum.projekt.models.person.Student;
import se2.praktikum.projekt.services.veranstaltungsservice.AnzeigerSrv;
import se2.praktikum.projekt.services.veranstaltungsservice.VeranstaltungsCtrlAdmin;

/**
 * Wird in Zukunft den Login-Vorgang abwickeln.
 * Loginpage ist immer die Startseite.
 * @author jan
 *
 */
@Controller
public class LoginController {	
	
	private LoginSrv srv = new LoginSrv();
	
	/**
	 * Beschreibung und Parameter folgen
	 * @param	username: Der Benutzername
	 * 			password: Das Passwort
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/", method = RequestMethod.GET)
	protected ModelAndView loadLoginView(){
		
		ModelAndView mv = new ModelAndView("choosepanel");
		return mv;

	}
	
	/**
	 * Lädt das Angestelltenpanel
	 * HINWEIS: Erstmal wird für beide Benutzer die gleiche View geladen,
	 * da Studentpanel noch nicht erstellt
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/angestellter", method = RequestMethod.GET)
	public ModelAndView ladeAngestelltenPanel(){
		
		ModelAndView mv = srv.ladeAngestPanel();
		System.out.println("Called");
		return mv;
	}
	
	
	/**
	 * Lädt das Angestelltenpanel
	 * HINWEIS: Erstmal wird für beide Benutzer die gleiche View geladen,
	 * da Studentpanel noch nicht erstellt
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/student", method = RequestMethod.GET)
	public ModelAndView ladeStudentenPanel(){
		
		ModelAndView mv = srv.ladeStudPanel();
		System.out.println("Called");
		return mv;
	}
	
	
	/**
	 * Loggt einen User ein 
	 * HINWEIS: Erstmal wird für beide Benutzer die gleiche View geladen,
	 * da Studentpanel noch nicht erstellt
	 * @param	args : args[0] = username, args[1] = passwort
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/login", method = RequestMethod.POST, produces="text/plain")
	public @ResponseBody Object einloggen(@RequestBody List<String> args){
		
		String panel = ""; // Das zu ladene Panel
		String username = args.get(0);	// Username
		String password = args.get(1);  // Passwort
		
		Person user = srv.login(username, password); // Benutzer einloggen
		
		// Speichere Panel informationen anhand des eingeloggten Benutzertyp -> Wird im Frontend ausgewertet
		if(user != null && user instanceof Student){
			panel = "student";
		}else if(user != null && user instanceof Angestellter){
			
			panel = "angestellter";
		}
		return panel;
	}


	/**
	 * Beschreibung und Parameter folgen
	 * @param	username: Der Benutzername
	 * 			password: Das Passwort
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	protected ModelAndView ausloggen()
	{
		ModelAndView mv = srv.logout();
		return mv;
	}
	
}