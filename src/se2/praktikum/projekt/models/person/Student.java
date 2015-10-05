package se2.praktikum.projekt.models.person;



public class Student extends Person{
	
	private int matrNr;
	private String vorName;
	private String nachName;
	
	
	public int getMatrNr() {
		return matrNr;
	}
	public void setMatrNr(int matrNr) {
		this.matrNr = matrNr;
	}
	public String getVorName() {
		return vorName;
	}
	public void setVorName(String vorName) {
		this.vorName = vorName;
	}
	public String getNachName() {
		return nachName;
	}
	public void setNachName(String nachName) {
		this.nachName = nachName;
	}
	

	
	
	

	

}