/**
 * Service
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBGruppService = function($http, DBVeranstService) {

    // Locals
    // ########################################################################################################
    var fach; // aktuelles Fach
    var raeume = ["0660", "1080", "0760", "1002"];
    var dozenten = ["Padberg", "Zukunft", "Kleine", "Gerken", "Huebner"];
    var assistenten = ["Blank", "Oelker", "Schulz"];
    var semester = [1,2,3,4,5,6];
    var grNummern = [1,2,3,4,5,6]; // Muss ermittelt werden durch DB
    var va; // Die zugehörige Veranstaltung -> Wird als Paramter übergeben (initGruppen())r
    var currGrpNr;

    var url = "http://localhost:8080/SE2-Praktikumssoftware/"; // URL um Backend anzusprechen
    var gruppen = []; // Hier werden die ermittelten Daten temporär gespeichert um schnelles Anzeigen zu gewährleisten
                              // Ersetzt HC-Gruppendaten
    var error = false; // Flag zur Fehlererkennung

    // #######################################################################################################


    // Benutzerdefinierte Klassen
    // ########################################################################################################

    // Kalenderwoche ermitteln -> Quelle: http://weeknumber.net/how-to/javascript
    Date.prototype.getWeek = function() {
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    Date.prototype.getString = function() {
        var day = this.getDate();
        var month = this.getMonth() + 1;
        var year = this.getFullYear().toString();
        var dateString = "";

        if (day < 10) {
          dateString += "0";
        }
        day = day.toString();
        dateString += day;
        dateString += ".";

        if (month < 10) {
          dateString += "0"
        }
        month = month.toString();
        dateString += month;
        dateString += ".";
        dateString += year;
        return dateString;
      }




    // ###########################################################################################################


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ###########################################################################################################
 
    
    function Uhrzeit(stunden, minuten){
    	this.stunden = stunden,
    	this.minuten = minuten
    	this.string = this.stunden+":"+this.minuten;
    }
    
    function Termin(raum, datum, start, ende){
    	var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    	this.datum = datum;
    	this.start = start;
    	this.ende = ende;
    	this.kw = datum.getWeek();
    	this.raum = raum;
    	this.formattedDateString = days[this.datum.getDay()] + ", " + this.datum.getString();
    }
    
    function Gruppe(fachkuerzel, grNr, termine, prof, assist, 
	        		 minTeams, maxTeams,
	        		 resTeams, anzTeams){

    	this.fachkuerzel = fachkuerzel;
    	this.grpNr = grNr;
    	this.termine = termine;
    	this.teams = null;
    	this.dozent = prof;
    	this.assistent = assist;
    	this.minTeams = minTeams;
    	this.maxTeams = maxTeams;
    	this.reservTeams = resTeams;
    	this.anzTeams = anzTeams;
    }
    

    
    var start1 = new Uhrzeit(8, 15);
    var end1 = new Uhrzeit(11, 30);
    var start2 = new Uhrzeit(12, 30);
    var end2 = new Uhrzeit(15, 45);
    var start3 = new Uhrzeit(16, 30);
    var end3 = new Uhrzeit(19, 30);
    
    var timesStart = [start1, start2, start3];
    var timesEnd = [end1, end2, end3];
    
    var date1 = new Date();
    var date2 = new Date();
    date2.setDate(date1.getDate() + 7);

    var date3 = new Date();
    date3.setDate(date2.getDate() + 7);

    var date4 = new Date();
    date4.setDate(date3.getDate() + 7);
    

    
    var raum1 = "0660";
    var raum2 = "1080";
    var raum3 = "0760";
    var raum4 = "1002";
    
    var termin1 = new Termin(raum1, date1, start1, end1);
    var termin2 = new Termin(raum2, date2, start2, end2);
    var termin3 = new Termin(raum3, date3, start3, end3);
    var termin4 = new Termin(raum4, date4, start1, end1);
    
    var prof1 = DBVeranstService.getAngestellter("professor", "Julia Padberg");
    var assist1 = DBVeranstService.getAngestellter("assistent", "Gerhard Oelker");
    
    var prof2 = DBVeranstService.getAngestellter("professor","Olaf Zukunft");
    var assist2 = DBVeranstService.getAngestellter("assistent","Ilona Blank");
    
    var prof3 = DBVeranstService.getAngestellter("professor","Martin Kleine");
    var assist3 = DBVeranstService.getAngestellter("assistent","Ilona Blank");
    
    var termine = [termin1, termin2, termin3, termin4];

    
    var gr1 = new Gruppe("", 1, termine, 
    					 prof1, assist1, 
    				     10, 20, 
    				     10, 0);
    
    var gr2 = new Gruppe("", 2, termine, 
    					 prof2, assist2, 
		     			 10, 20, 
		     			 10, 0);
    
    var gr3 = new Gruppe("", 3, termine, 
		     			 prof3, assist3, 
		     			 10, 20, 
		     			 10, 0);
    
    var gr4 = new Gruppe("", 4, termine, 
		     			 prof1, assist1, 
		     			 10, 20, 
		     			 10, 0);
    
    gr1.kw = toStr(gr1.termine);
    gr2.kw = toStr(gr2.termine);
    gr3.kw = toStr(gr3.termine);
    gr4.kw = toStr(gr4.termine);
    
    // Vorhandene Hardcoded Daten (in Tabelle gelistet)
    var hcGruppenDaten = [gr1, gr2, gr3, gr4];
    
// ###########################################################################################################



    // Helper
    // ###########################################################################################################


    function getVeranstaltung(){
      return va;
    }

    function getFach(){
      return fach;
    }

    function setFach(f){
      fach = f;
    }

    var sucheGruppe = function(grpNr){

      for(i = 0; i < hcGruppenDaten.length; i++){
        if(hcGruppenDaten[i].fachkuerzel == fach.fachKuerzel && hcGruppenDaten[i].grpNr == grpNr){
          return i;
        }
      }
      return -1;
    }

        // Setzt die Termine nach Erstellung der neuen Gruppe wieder auf die Standardwerte zurück
    function resetAppValues() {

      var term = [];
      var dateTm1 = new Date();
      var dateTm2 = new Date();
      dateTm2.setDate(dateTm1.getDate() + 7);

      var dateTm3 = new Date();
      dateTm3.setDate(dateTm2.getDate() + 7);

      var dateTm4 = new Date();
      dateTm4.setDate(dateTm3.getDate() + 7);

      var tm1 = new Termin(raum1, dateTm1, start1, end1);
      var tm2 = new Termin(raum2, dateTm2, start2, end2);
      var tm3 = new Termin(raum3, dateTm3, start3, end3);
      var tm4 = new Termin(raum4, dateTm4, start1, end1);

      term.push(tm1);
      term.push(tm2);
      term.push(tm3);
      term.push(tm4);

      return term;
    }

    // Erzeugt neue Abgabetermine anhand des Models
    function getAppointments(termine) {
      var appointments = [];
      for (i = 0; i < termine.length; i++) {
        appointments.push(new Termin(termine[i].raum, termine[i].datum, termine[i].start, termine[i].ende));
      }
      return appointments;
    }

    //Abgabetermine zur Stringdarstellung konvertieren
    function toStr(termine) {

      var term = "";
      var i;
      for (i = 0; i < termine.length; i++) {
        term += termine[i].kw;

        if (i < termine.length - 1) {
          term += ", ";
        }
      }
      return term;
    }

    // Generiert einen zufälligen Index für ein Array
    function genRdIndex(arr) {
      var index;
      index = Math.floor(Math.random() * arr.length);
      return index;
    }

    function getDate(date){
      return new Date(date);
    }

    function getAppointment(newAppDate, start, end){
      return new Termin(newAppDate, start, end);
    }

    function initFaecherTabelle(va){
      for(i = 0; i < hcGruppenDaten.length; i++){
        hcGruppenDaten[i].fachkuerzel = va.fach.fachKuerzel;
      }
    }

// ###########################################################################################################

// SCHNITTSTELLE
// ###########################################################################################################

// TODO: Diese Methoden müssen implementiert werden
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Gruppe zur Datenbank hinzufügen
    // Ruft die Schnittstelle im Backend auf und übergibt die Informationen
    // der Gruppe + Veranstaltung als Json-Array
    var addGruppeDB = function(gruppe){

      // JSOM Data
      console.log(angular.toJson(gruppe));
      $http.post(url+"gruppErstellen", angular.toJson(gruppe)).
        // Funktion, falls gültige Daten zurückkommen
      then(function(response) {
          // Daten aus dem Response-Object in das Veranstaltungen-Array pushen
          for (i = 0; i < response.data.length; i++) {
          }
        },
        // Funktion bei Fehler
        function(response) {
          error = true; // Setze error-flag, dass von der view abgefragt wird
        });

      // url = gruppErstellen
      return true;
    }

    // Gruppe in der Datenbank bearbeiten
    // Ruft die Schnittstelle im Backend auf und übergibt die Informationen
    // der Gruppe + Veranstaltung als Json-Array
    // Geänderte gruppe wird automatisch in der View aktualisiert
    var editGruppeDB = function(gruppe){

      var veranstaltung = getVeranstaltung(); // Muss dem Backend mit übergeben werden

      return true;
    }

    // gruppe aus der Datenbank löschen
    // Ruft die Schnittstelle im Backend auf und übergibt die Informationen
    // der Gruppe als Json-Array
    // Gruppe wird automatisch aus der View gelöscht
    var loescheGruppeDB = function(gruppe){


      // url = gruppLoeschen
      return true;
    }

    // Alle Gruppen zu einer Veranstaltung aus der DB ermitteln
    // Ruft die Schnittstelle im Backend auf und holt Die Gruppen
    // zu einer übergebenen Veranstaltung
    // Gruppen müssen in Array "gruppen" gespeichert werden (Json-Format)
    // Werden dann automatisch in der View ausgegeben
    // =========================================================================
    // ACHTUNG: Feld fach für jedes Gruppenobjekt ist kein Feld der Java-Klasse
    // "Gruppe" (Dient hier nur zur Darstellung)
    // =========================================================================
    var initGruppen = function(veranstaltung){
      var va = veranstaltung;
      fach = va.fach;
      currGrpNr = hcGruppenDaten[hcGruppenDaten.length-1].grpNr;
      currGrpNr++;
      console.log(currGrpNr);
      initFaecherTabelle(va);
      
      console.log(fach);

      // url = gruppUebersicht
      // Gruppendaten aus der Datenbank holen
      
      // Teams den Gruppen in der For-Schleife zuorden
      // -> gruppe.teams = response.data

      return true;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



    // Gruppe einer Veranstaltung hinufügen
    var addGruppe = function(gruppenInfo){
    	
      console.log(gruppenInfo.dozent.vollerName);
      var fachkuerzel = fach.fachKuerzel;
      var grpNr = currGrpNr;
      var termine = getAppointments(gruppenInfo.termine);
      var dozent = DBVeranstService.getAngestellter("professor", gruppenInfo.dozent);
      var assistent = DBVeranstService.getAngestellter("assistent", gruppenInfo.assistent);
      var minTeams = gruppenInfo.minTeams;
      var maxTeams = gruppenInfo.maxTeams;
      var resTeams = gruppenInfo.resTeams;
      var anzTeams = gruppenInfo.anzTeams;
      
      var gruppe = new Gruppe(fachkuerzel, grpNr,
    		  				  termine, dozent,
    		  				  assistent, minTeams, 
    		  				  maxTeams, resTeams, 
    		  				  anzTeams);
      
      //  Erst Eintrag in die Datenbank einfügen
      // -> Wenn nicht erfolgreich -> false
      
      if (!addGruppeDB(gruppe)) {
        return false;
      }else{ // Dann Tabelle aktualisieren
    	gruppe.kw = toStr(gruppe.termine);
    	console.log(gruppe.kw);
        hcGruppenDaten.push(gruppe); // Erst Tabelle aktualisieren
        currGrpNr++;
        return true;
      }
    }

    // gruppe einer Veranstaltung editieren
    var editGruppe = function(index, gruppenInfo){
    	
    	console.log(fach);
    	console.log(gruppenInfo);
        var fachkuerzel = fach.fachKuerzel;
        var grpNr = gruppenInfo.grpNr;
        var termine = getAppointments(gruppenInfo.termine);
        var dozent = gruppenInfo.dozent;
        var assistent = gruppenInfo.assistent;
        var minTeams = gruppenInfo.minTeams;
        var maxTeams = gruppenInfo.maxTeams;
        var resTeams = gruppenInfo.resTeams;
        var anzTeams = gruppenInfo.anzTeams;
        
        var gruppe = new Gruppe(fachkuerzel, grpNr,
      		  				  	termine, dozent,
      		  				  	assistent, minTeams, 
      		  				  	maxTeams, resTeams, 
      		  				  	anzTeams);
      if(!editGruppeDB(gruppe)){
        return false;
      }else{
    	gruppe.kw = toStr(gruppe.termine);
        hcGruppenDaten[index] = gruppe;
        return true;
      }
    }

    // Gruppe einer Veranstaltung löschen
    var gruppeLoeschen = function(index){

      var gr = hcGruppenDaten[index];
      if(!loescheGruppeDB(gr)){
        return false;
      }else{
        hcGruppenDaten.splice(index, 1);
      }
    }
    // ###########################################################################################################


    // Gebe dieses Object zurück und mache die Methoden zugänglich
    // ###########################################################################################################
    return {
      resetAppValues: resetAppValues,
      getAppointments: getAppointments,
      toStr:  toStr,
      genRdIndex: genRdIndex,
      timesStart: timesStart,
      timesEnd: timesEnd,
      addGruppe: addGruppe,
      editGruppe: editGruppe,
      raeume: raeume,
      dozenten: dozenten,
      grNummern: grNummern,
      assistenten: assistenten,
      hcGruppenDaten: hcGruppenDaten,
      termine: termine,
      gruppeLoeschen: gruppeLoeschen,
      getDate: getDate,
      getAppointment: getAppointment,
      getFach: getFach,
      setFach: setFach,
      getVeranstaltung: getVeranstaltung,
      initGruppen: initGruppen,
      sucheGruppe: sucheGruppe,
      semester: semester,
      currGrpNr: currGrpNr
    };
    // ###########################################################################################################
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBGruppService", DBGruppService);

  // Code sofort ausführen
}());
