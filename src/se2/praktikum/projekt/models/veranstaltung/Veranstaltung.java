package se2.praktikum.projekt.models.veranstaltung;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import se2.praktikum.projekt.models.person.Angestellter;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes(value = {
    @JsonSubTypes.Type(name = "praktikum", value = Praktikum.class),
    @JsonSubTypes.Type(name = "wp", value = WP.class),
    @JsonSubTypes.Type(name = "projekt", value = Projekt.class)
}) 
public interface Veranstaltung {
 
	public Fach getFach();

	public void setFach(Fach fach);

	public Angestellter getProfessor();

	public int getAnzTm();

	public void setAnzTm(int anzTm);

	public int getMinTm();

	public void setMinTm(int minTm);

	public int getMaxTm();

	public void setMaxTm(int maxTm);

	public int getAnzGr();

	public void setAnzGr(int anzGr);

	public int getMaxGr();

	public void setMaxGr(int maxGr);

	public void setProfessor(Angestellter professor);

	int getTeamKap();

	void setTeamKap(int teamKap);
	
	

}
