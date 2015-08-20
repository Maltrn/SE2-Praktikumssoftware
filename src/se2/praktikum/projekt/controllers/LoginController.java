package se2.praktikum.projekt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Wird in Zukunft den Login-Vorgang abwickeln.
 * Loginpage ist immer die Startseite.
 * @author jan
 *
 */
@Controller
public class LoginController 
{
	
	
	// Konstanten
	private final String WELCOME = "Dies wird die Login-Page...";
	
	/**
	 * Beschreibung und Parameter folgen...
	 * @param	username: Der Benutzername
	 * 			password: Das Passwort
	 * @return	ModelAndView-Objekt, welches die eingegebenen Daten hält.
	 */
	@RequestMapping(value="/", method = RequestMethod.GET)
	protected ModelAndView doLogin()
	{
		ModelAndView mv = new ModelAndView("login");
		mv.addObject("welcomeMessage", WELCOME);
		return mv;
	}
}