/**
 * Schnittstelle und Service für Datenbankinteraktion mit Spring MVC
 * Vorerst Hardcoded Daten -> später dynamische Ermittlung durch SpringMVC
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBVeranstService = function($http) {


    // Helper
    // ====================================================================================

      var sucheVA = function(fach){

        for(i = 0; i < hcVeranstaltungsDaten.length; i++){
          if(hcVeranstaltungsDaten[i].fach == fach){
            return i;
          }
        }
        return -1;
      }

      var getFachbereich = function(){
        return fachbereich;
      }

      var getSemester = function(){
        return sem;
      }


    // Locls
    // ####################################################################################
    var semester = [1, 2, 3, 4, 5, 6];
    var fachbereiche = ["AI", "TI", "WI"];

    var fachbereich = fachbereiche[0];
    var sem = semester[0];

    var url = "http://localhost:8080/"; // URL um Backend anzusprechen
    var veranstaltungen = []; // Hier werden die ermittelten Daten temporär gespeichert um schnelles Anzeigen zu gewährleisten
                              // Ersetzt HC-Gruppendaten
    var error = false; // Flag zur Fehlererkennung
    // ####################################################################################


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

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


    // SCHNITTSTELLE
    // #########################################################################################################################

    // TODO: Diese Methoden müssen implementiert/ergänzt werden
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Beispiel für eine implementierte Operation der Schnittstelle -> Alle Pflichtpraktika aus der Datenbank ermitteln

    // Alle Pflichtpraktika zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte Pfichtpraktika, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar
    var initPraktika = function(sem, fachbereich) {


      // JSOM Data
      var args = [sem, fachbereich];

      $http.post(url+"pflichtpraktika", angular.toJson(args)).
        // Funktion, falls gültige Daten zurückkommen
      then(function(response) {
          // Daten aus dem Response-Object in das Veranstaltungen-Array pushen
          for (i = 0; i < response.data.length; i++) {
            var data = response.data;
            veranstaltungen.push({ /* Veranstaltungsobjekt aus dem Daten-Array */ }); // ergänzen
          }
        },
        // Funktion bei Fehler
        function(response) {
          error = true; // Setze error-flag, dass von der view abgefragt wird
        });
    }


    // Alle WP zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte WP, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar TODO: View implementieren
    var initWP = function(sem, fachbereich){

      // TODO: Precondition: mindestens Semster 4

      // url = wp;
      // siehe initPraktika

    }

    // Alle PO zu den übergebenen Parametern ermitteln
    // Ruft Backend-Schnittstelle auf und übergibt die Parameter
    // Ermittelte WP, werden in Array gespeichert
    // Diese werden dann automatisch in der View sichtbar TODO: View implementieren
    var initPO = function(sem, fachbereich){
      // TODO: Precondition: mindestens Semster 5

      // url = po
      // siehe initPraktika

    }

    // Editiert eine Veranstaltung in der Datenbank
    // Editierte Veranstaltung wird dem Backend übergeben (Json-Format)
    // View wird automatisch aktualisiert
    function editVeranstaltungDB(veranstaltung){

      // url = vBeabeiten
      return true;
    }

    // Loescht eine Veranstaltung aus der Datenbank
    // zu löschende Veranstaltung wird dem Backend übergeben (Json-Format)
    // view wird automatisch aktualisiert
    function loescheVeranstaltungDB(veranstaltung) {

      // url = vLoeschen
      return true;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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
    var editVeranstaltung = function(index, va){
      if(!editVeranstaltungDB(va)){
        return false;
      }else{
        hcVeranstaltungsDaten[index].dozent = va.dozent;
        hcVeranstaltungsDaten[index].min = va.min;
        hcVeranstaltungsDaten[index].max = va.max;
        return true;
      }
    }

    // Loescht eine vorhandene Veranstaltung
    var loescheVeranstaltung = function(fach){

      var va = {};                  // Veranstaltung initialisieren
      var index = sucheVA(fach);    // Suche Index der VA
      console.log(fach);
      console.log(index);

      if(index > 0){
        va = hcVeranstaltungsDaten[index];  // Weise VA zu
      }else{
        return false;
      }

      if(!loescheVeranstaltungDB(va)){
        return false;
      }else{
        hcVeranstaltungsDaten.splice(index, 1);
      }
    }

    // Speichert eine Veranstaltung in der Datenbank
    // TODO: implement
    function addVeranstaltungDB(Veranstaltung) {

      return true; // Vorerst nur true zurückgeben, darunterliegender Code nicht betrachtet

      /*
      // erzeuge data object
      $http.post(url+"vErstellen", veranstaltung)
      .then(function(){
        // Prüfe ob Daten eingefügt
        return true;  // Gibt true zurück, wenn Speicherung erfolgreich
      },
      function(){
        return false;
      });
      */

    }

    // #########################################################################################################################

    // Gebe dieses Object zurück und mache die Schnittstelle zugänglich für Client
    // -----------------------------------------------------------------------------------
    return {
      semester: semester,
      fachbereiche: fachbereiche,
      addVeranstaltung: addVeranstaltung,
      editVeranstaltung: editVeranstaltung,
      hcVeranstaltungsDaten: hcVeranstaltungsDaten,
      loescheVeranstaltung: loescheVeranstaltung,
      sucheVA: sucheVA,
      getFachbereich: getFachbereich,
      getSemester: getSemester,
      initPraktika: initPraktika,
      initWP: initWP,
      initPO: initPO
    };
    // -----------------------------------------------------------------------------------
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBVeranstService", DBVeranstService);

  // Code sofort ausführen
}());
