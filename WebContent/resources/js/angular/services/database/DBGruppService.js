/**
 * Service
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBGruppService = function($http, vgservice) {


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

    // Uhrzeiten
    function Time(h, m) {

      this.hours = h;
      this.min = m;

      this.getHour = function() {
        return this.hours;
      }
      this.getMinute = function() {
        return this.min;
      }

      this.setHours = function(hour) {
        this.hours = hour;
      }
      this.setMinutes = function(minutes) {
        this.min = minutes;
      }

      this.getString = function() {

        var time = "";
        if (this.hours < 10) {
          time += "0";
        }
        return time += this.hours + ":" + this.min;
      }
    }

    // Termine
    function Appointment(date, start, end, room) {

      var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

      this.date = date;
      this.dateString = this.date.getString();

      this.timeStart = start;
      this.timeEnd = end;

      this.timeStartString = this.timeStart.getString();

      this.timeEndString = this.timeEnd.getString();

      this.kw = "" + this.date.getWeek();

      this.setDate = function(date) {
        this.date = date;
      }

      this.setTimeStart = function(timeStart) {
        this.timeStart = timeStart;
      }

      this.setTimeEnd = function(timeEnd) {
        this.timeEnd = timeEnd;
      }

      this.formattedDateString = days[this.date.getDay()] + ", " + this.dateString;
    }

    // ###########################################################################################################


    // Helper
    // ###########################################################################################################

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

      var tm1 = new Appointment(dateTm1, timeStart1, timeEnd1);
      var tm2 = new Appointment(dateTm2, timeStart2, timeEnd2);
      var tm3 = new Appointment(dateTm3, timeStart3, timeEnd3);
      var tm4 = new Appointment(dateTm4, timeStart1, timeEnd1);

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
        appointments.push(new Appointment(termine[i].date, termine[i].timeStart, termine[i].timeEnd));
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
      return new Appointment(newAppDate, start, end);
    }

    // ###########################################################################################################


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ###########################################################################################################

    // Example-Times
    // -------------------------------------------------------------------------
    var timeStart1 = new Time(8, 15);
    var timeEnd1 = new Time(11, 45);

    var timeStart2 = new Time(12, 30);
    var timeEnd2 = new Time(15, 45);

    var timeStart3 = new Time(16, 15);
    var timeEnd3 = new Time(19, 30);

    var timesStart = [timeStart1, timeStart2, timeStart3];
    var timesEnd = [timeEnd1, timeEnd2, timeEnd3];
    // -------------------------------------------------------------------------


    // Example-Dates
    // -------------------------------------------------------------------------
    var dateTm1 = new Date();

    var dateTm2 = new Date();
    dateTm2.setDate(dateTm1.getDate() + 7);

    var dateTm3 = new Date();
    dateTm3.setDate(dateTm2.getDate() + 7);

    var dateTm4 = new Date();
    dateTm4.setDate(dateTm3.getDate() + 7);

    var kws = [
      dateTm1.getWeek(),
      dateTm2.getWeek(),
      dateTm3.getWeek(),
      dateTm4.getWeek()
    ];

    term = [];
    var tm1 = new Appointment(dateTm1, timeStart1, timeEnd1);
    var tm2 = new Appointment(dateTm2, timeStart2, timeEnd2);
    var tm3 = new Appointment(dateTm3, timeStart3, timeEnd3);
    var tm4 = new Appointment(dateTm4, timeStart1, timeEnd1);

    term.push(tm1);
    term.push(tm2);
    term.push(tm3);
    term.push(tm4);
    // -------------------------------------------------------------------------

    var grNummern = [1, 2, 3, 4, 5, 6];
    var anzTmTeam = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Vorhandene Hardcoded Daten (in Tabelle gelistet)
    var hcGruppenDaten = [{
      fach: vgservice.getFach(),
      grpNr: 1,
      termine: term,
      kw: toStr(term),
      dozent: "Padberg",
      assistent: "Oelker",
      raum: "0660",
      minGr: 6,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 2,
      termine: term,
      kw: toStr(term),
      dozent: "Zukunft",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 3,
      termine: term,
      kw: toStr(term),
      dozent: "Kleine",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }, {
      fach: vgservice.getFach(),
      grpNr: 4,
      termine: term,
      kw: toStr(term),
      dozent: "Kleine",
      assistent: "Blank",
      raum: "0660",
      minGr: 3,
      maxGr: 10
    }];


    var raeume = ["0660", "1180", "1070", "0770"];
    var dozenten = ["Padberg", "Zukunft", "Kleine", "Gerken", "Huebner"];
    var assistenten = ["Blank", "Oelker", "Schulz"];
// ###########################################################################################################


// Angeforderte Schnittstelle TODO: Weitere Operationen
// ###########################################################################################################

    var addGruppeDB = function(gruppe){
      return true;
    }

    var editGruppeDB = function(gruppe){

      return true;
    }

    var loescheGruppeDB = function(index){
      return true;
    }
// ###########################################################################################################


// Angebotene Schnittstelle
// ###########################################################################################################
    var addGruppe = function(gruppe){

      //  Erst Eintrag in die Datenbank einfügen
      // -> Wenn nicht erfolgreich -> false
      if (!addGruppeDB(gruppe)) {
        return false;
      }else{ // Dann Tabelle aktualisieren
        hcGruppenDaten.push(gruppe); // Erst Tabelle aktualisieren
        return true;
      }
    }

    var editGruppe = function(index, gruppe){

      if(!editGruppeDB(gruppe)){
        return false;
      }else{
        var termine = getAppointments(gruppe.termine);
        hcGruppenDaten[index].anzTm = gruppe.anzTm;
        hcGruppenDaten[index].termine = termine;
        hcGruppenDaten[index].kw = toStr(termine);
        hcGruppenDaten[index].raum = gruppe.raum;
        return true;
      }
    }

    var gruppeLoeschen = function(index){

      if(!loescheGruppeDB(index)){
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
      grNummern: grNummern,
      raeume: raeume,
      dozenten: dozenten,
      assistenten: assistenten,
      anzTmTeam: anzTmTeam,
      hcGruppenDaten: hcGruppenDaten,
      term: term,
      gruppeLoeschen: gruppeLoeschen,
      getDate: getDate,
      getAppointment: getAppointment
    };
    // ###########################################################################################################
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBGruppService", DBGruppService);

  // Code sofort ausführen
}());
