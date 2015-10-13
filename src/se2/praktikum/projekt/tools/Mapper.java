package se2.praktikum.projekt.tools;

import java.io.IOException;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import se2.praktikum.projekt.models.gruppe.Gruppe;

public class Mapper {
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	public static Gruppe mapGruppe(String obj){
		
		mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Gruppe gr = null;
		
		try {
			gr = mapper.readValue(obj, Gruppe.class);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return gr;
	}

}
