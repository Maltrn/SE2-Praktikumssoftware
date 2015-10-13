package se2.praktikum.projekt.tools;

import java.io.IOException;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import se2.praktikum.projekt.models.gruppe.Gruppe;
import se2.praktikum.projekt.models.team.Team;

public class Mapper {
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	public static Gruppe mapGruppe(String obj){
		
		config();
		Gruppe gr = null;
		
		try {
			gr = mapper.readValue(obj, Gruppe.class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return gr;
	}

	public static Team mapTeam(String team) {
		
		config();
		
		Team t = null;
		
		try {
			t = mapper.readValue(team, Team.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return t;
	}
	
	private static void config(){
		
		mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}

}
