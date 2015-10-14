package se2.praktikum.projekt.services.loginservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import se2.praktikum.projekt.models.person.Angestellter;
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
		
		ModelAndView mv = new ModelAndView("login");
		return mv;

	}
	
	/**
	 * Beschreibung und Parameter folgen
	 * @param	username: Der Benutzername
	 * 			password: Das Passwort
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/main", method = RequestMethod.POST)
	public ModelAndView einloggen(){
		
		String username = "user";
		String password = "password";
		ModelAndView mv = null;
		Person user = srv.login(username, password);
		
		if(user != null){
			// Panels je nach usertyp laden
			if(user instanceof Student){
				mv = new ModelAndView("main"); // Später anderer Parameter
			}else if(user instanceof Angestellter){
				mv = new ModelAndView("main"); // Später anderer Parameter
			}
		}else{
			mv = new ModelAndView("main"); // False passwort/user falsch -> null
		}								
		
		if(mv != null){
			srv.erzeugeServices();
		}else{
			// informiere... (zB andere View laden -> muss erst noch erstellt werden)
		}

		return mv;
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