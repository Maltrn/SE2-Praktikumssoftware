/**
 * Schnittstelle und Service für Datenbankinteraktion mit Spring MVC
 * Vorerst Hardcoded Daten -> später dynamische Ermittlung durch SpringMVC
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBVeranstService = function($http) {


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    var semester = [1, 2, 3, 4, 5, 6];
    var fachbereiche = ["AI", "TI", "WI"];

    // Array aus Veranstaltungsobjekten
    var hcVeranstaltungsDaten = [{
      fach: "GKAP",
      dozent: "Prof. Dr. Julia Padberg",
      currGr: 6,
      maxGr: 10,
      min: 10,
      curr: 60,
      max: 80
    }, {
      fach: "ADP",
      dozent: "Prof. Dr. Martin Kleine",
      currGr: 6,
      maxGr: 10,
      min: 10,
      curr: 50,
      max: 60
    }, {
      fach: "BSP",
      dozent: "Prof Dr. Martin Huebner",
      currGr: 6,
      maxGr: 10,
      min: 10,
      curr: 70,
      max: 80
    }, {
      fach: "SEP",
      dozent: "Prof. Dr. Olaf Zukunft",
      currGr: 6,
      maxGr: 10,
      min: 10,
      curr: 0,
      max: 80
    }, {
      fach: "BWP",
      dozent: "Prof. Dr. Wolfgang Gerken",
      currGr: 6,
      maxGr: 10,
      min: 10,
      curr: 50,
      max: 80
    }];
    // ====================================================================================

    // Locals
    // =========================================================================================================================
    var url = "http://localhost:8080/SE2-Praktikumssoftware/veranstaltungen"; // URL um Backend anzusprechen
    var veranstaltungen = []; // Hier werden die ermittelten Daten temporär gespeichert um schnelles Anzeigen zu gewährleisten
    var error = false; // Flag zur Fehlererkennung
    // =========================================================================================================================

    // Angeforderte Schnittstelle
    // #########################################################################################################################

    // Ermittelt alle Semester aus der Datenbank
    // TODO: implement
    function getAlleSemester() {

    }

    // Ermittelt alle Fachbereiche aus der Datenbank
    // TODO: implement
    function getAlleFachbereiche() {

    }

    // Speichert eine Veranstaltung in der Datenbank
    // TODO: implement
    function addVeranstaltungDB(Veranstaltung) {

      return true; // Gibt true zurück, wenn Speicherung erfolgreich
    }

    // Editiert eine Veranstaltung in der Datenbank
    // TODO: implement
    function editVeranstaltungDB(index, edit){
      return true;
    }

    // Loescht eine Veranstaltung aus der Datenbank
    // TODO: implement
    function loescheVeranstaltungDB(index) {
      return true;
    }

    // #########################################################################################################################



    // Angebotene SCHNITTSTELLE
    // #########################################################################################################################

    // Beispiel für eine implementierte Operation der Schnittstelle -> Alle Veranstaltungen aus der Datenbank ermitteln
    // TODO: Funktioniert erst wenn Datenbank vorhanden
    var getAlleVeranstaltungen = function() {

      $http.get(url).
        // Funktion, falls gültige Daten zurückkommen
      then(function(response) {
          // Daten aus dem Response-Object in das Veranstaltungen-Array pushen
          for (i = 0; i < response.data.length; i++) {
            var data = response.data;
            veranstaltungen.push({ /* Veranstaltungsobjekt aus dem Daten-Array */ });
          }
        },
        // Funktion bei Fehler
        function(response) {
          error = true; // Setze error-flag, dass von der view abgefragt wird
        });
    }


    // Speichert eine neue Veranstaltung
    var addVeranstaltung = function(veranstaltung) {
      //  Erst Eintrag in die Datenbank einfügen
      // -> Wenn nicht erfolgreich -> false
      if (!addVeranstaltungDB(veranstaltung)) {
        return false;
      }else{ // Dann Tabelle aktualisieren
        hcVeranstaltungsDaten.push(veranstaltung); // Erst Tabelle aktualisieren
        return true;
      }
    }

    // Editiiert eine vorhndene Veranstaltung
    var editVeranstaltung = function(index, edit){

      if(!editVeranstaltungDB(index, edit)){
        return false;
      }else{
        hcVeranstaltungsDaten[index].dozent = edit.dozent;
        hcVeranstaltungsDaten[index].min = edit.min;
        hcVeranstaltungsDaten[index].max = edit.max;
        return true;
      }
    }

    // Loescht eine vorhandene Veranstaltung
    var loescheVeranstaltung = function(index){
      if(!loescheVeranstaltungDB(index)){
        return false;
      }else{
        hcVeranstaltungsDaten.splice(index, 1);
      }
    }

    // Ermittelt alle Veranstaltungen fuer ein Semester
    // TODO: implement
    var getAlleVeranstaltungenFuerSem = function(semester) {

    }


    // Ermittelt alle Veranstaltungen fuer einen Fachbereich
    // TODO: implement
    var getAlleVeranstaltungenFuerFachbereich = function(fachbereich) {


    }

    // #########################################################################################################################

    // Gebe dieses Object zurück und mache die Schnittstelle zugänglich für Client
    // -----------------------------------------------------------------------------------
    return {
      semester: semester,
      fachbereiche: fachbereiche,
      getAlleVeranstaltungen: getAlleVeranstaltungen,
      addVeranstaltung: addVeranstaltung,
      editVeranstaltung: editVeranstaltung,
      hcVeranstaltungsDaten: hcVeranstaltungsDaten,
      loescheVeranstaltung: loescheVeranstaltung,
      getAlleVeranstaltungenFuerSem: getAlleVeranstaltungenFuerSem,
      getAlleVeranstaltungenFuerFachbereich: getAlleVeranstaltungenFuerFachbereich,
    };
    // -----------------------------------------------------------------------------------
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBVeranstService", DBVeranstService);

  // Code sofort ausführen
}());
