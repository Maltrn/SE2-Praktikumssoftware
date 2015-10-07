/**
 * Schnittstelle und Service für Datenbankinteraktion mit Spring MVC
 * Vorerst Hardcoded Daten -> später dynamische Ermittlung durch SpringMVC
 **/
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBGruppTmService = function($http) {


    // Locals
    //########################################################################
    var fach;
    var gruppe;
    var teilnehmer = []; // Ersetzt später hcTeilnehmer
    var url = "http://localhost:8080/SE2-Praktikumssoftware/";
    // #######################################################################

    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // =================================================================================================================================================

    var hcTeilnehmer = [{
      matrNr: 243441,
      vorn: "Max",
      nachn: "Mustermann1",
      tmNr: 1,
      tmPartner: "Max Mustermann3",
      pvl: "erfolgreich",
      note: 15
    }, {
      matrNr: 243442,
      vorn: "Max",
      nachn: "Mustermann2",
      tmNr: 4,
      tmPartner: "Max Mustermann4",
      pvl: "nicht erfolgreich",
      note: -1
    }, {
      matrNr: 243443,
      vorn: "Max",
      nachn: "Mustermann3",
      tmNr: 1,
      tmPartner: "Max Mustermann1",
      pvl: "erfolgreich",
      note: 3
    }, {
      matrNr: 243444,
      vorn: "Max",
      nachn: "Mustermann4",
      tmNr: 4,
      tmPartner: "Max Mustermann2",
      pvl: "nicht erfolgreich",
      note: -1
    }, {
      matrNr: 243445,
      vorn: "Max",
      nachn: "Mustermann5",
      tmNr: 5,
      tmPartner: "Max Mustermann6",
      pvl: "offen",
      note: -1
    }, {
      matrNr: 243446,
      vorn: "Max",
      nachn: "Mustermann6",
      tmNr: 5,
      tmPartner: "Max Mustermann5",
      pvl: "offen",
      note: -1
    }]

    // ==================================================================================================================================================

    //Helper
    // ##########################################################################
    var setFach = function(fa){
      fach = fa;
    }

    var getFach = function(){
      return fach;
    }

    var setGruppe = function(gr){
      gruppe = gr;
    }

    var getGruppe = function(){
      return gruppe;
    }

    var sucheStudent = function(matrNr){

      for(i = 0; i < hcTeilnehmer.length; i++){
        if(hcTeilnehmer[i].matrNr == matrNr){
          return i;
        }
      }
      return -1;
    }
    // ##########################################################################



    // SCHNITTSTELLE
    // ################################################################################################################

    // TODO: Diese Methoden müssen implementiert werden.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Einen Studenten aus der Gruppe (Datenbank) löschen
    // Ruft die Schnittstelle im Backend auf und übergibt die Informationen
    // für den zu löschenden Studenten
    var loescheTmDB = function(gruppe, student){
      return true;
    }

    // Alle Teilnehmer zu einer Gruppe aus der DB ermitteln
    // Ruft die Schnittstelle im Backend auf und holt Teilnehner
    // zu einer übergebenen Gruppe (Json)
    // Teilnehmer müssen im Array "teilnehmer" gespeichert werden
    // Diese werden dann automatisch in der View ausgegeben.
    var initTmUebersicht = function(gruppe){

      // url = tmUebersicht
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Einen Studenten aus der Gruppe löschen
    var loescheTm = function(index){
      var tm = hcTeilnehmer[index];
      if(!loescheTmDB(tm)){
        return false;
      }else{
        hcTeilnehmer.splice(index, 1);
      }
    }



    // #########################################################################################################################

    // Gebe dieses Object zurück und mache die Schnittstelle zugänglich für Client
    // -----------------------------------------------------------------------------------
    return {
      hcTeilnehmer: hcTeilnehmer,
      initTmUebersicht: initTmUebersicht,
      setFach: setFach,
      getFach: getFach,
      getGruppe: getGruppe,
      setGruppe: setGruppe,
      sucheStudent: sucheStudent,
      loescheTm: loescheTm
    };
    // -----------------------------------------------------------------------------------
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBGruppTmService", DBGruppTmService);

  // Code sofort ausführen
}());
