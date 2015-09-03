/**
 * Managed die Veranstaltungen
 */
(function () {

	// Controllerdefinition
  var app = angular.module("SE2-Software");

	// $scope = model object, $http: holt JSON Object vom SpringMVC Backend -> folgt später
	var GruppenController = function($scope, autoscroller /*, $http*/){

    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    $scope.semesters = [1, 2, 3 ,4 ,5, 6];
    $scope.faecher = ["GKA", "SEP", "ADP", "BW2", "BS"];
    $scope.grNummern = [1, 2, 3, 4, 5, 6];
    $scope.anzTmTeam = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.abgTermine = ["KW12", "KW13", "KW14", "KW15", "KW16"];
    $scope.startZeiten = ["08:15", "12:30", "16:15", "19:00"];
    $scope.endZeiten = ["11:45", "15:45", "16:15", "19:00", "20:30"];
    $scope.raeume = ["0660", "1180", "1070", "0770"];
    $scope.dozenten = ["Padberg", "Zukunft", "Kleine", "Gerken", "Huebner"];
    $scope.assistenten = ["Blank", "Oelker", "Schulz"];
    $scope.fachbereiche =["AI", "WI", "TI"];
    $scope.tage = ["Montag", "Dienstag", "Donnerstag", "Freitag", "Samstag"];

    // Vorhandene Hardcoded Daten (in Tabelle gelistet)
    $scope.hcGruppenDaten =
                [{fach: "GKAP", grpNr: 1, kw: [12, 14, 16, 18],
                  startUhrzeit: "08:15", endUhrzeit: "11:45",
                  dozent: "Padberg", raum: "0660", minGr: 6, maxGr: 10},
                 {fach: "SEP", grpNr: 1, kw: [13, 15, 17, 19],
                  startUhrzeit: "08:15", endUhrzeit: "11:45",
                  dozent: "Zukunft", raum: "0660", minGr: 3, maxGr: 10},
                 {fach: "ADP", grpNr: 2, kw: [12, 14, 16, 18],
                 startUhrzeit: "08:15", endUhrzeit: "11:45",
                 dozent: "Kleine", raum: "0660", minGr: 3, maxGr: 10}];
    // ====================================================================================


    // Felder initialisiern
    // ------------------------------------------------------
    $scope.gr = {};
    $scope.gr.sem = $scope.semesters[0];
    $scope.gr.fach = $scope.faecher[0];
    $scope.gr.grpNr = $scope.grNummern[0];
    $scope.gr.termine = {tm1: $scope.abgTermine[0],
                         tm2: $scope.abgTermine[0],
                         tm3: $scope.abgTermine[0],
                         tm4: $scope.abgTermine[0]};

    $scope.gr.startUhrzeit = $scope.startZeiten[0];
    $scope.gr.endUhrzeit = $scope.endZeiten[0];
    $scope.gr.dozent = $scope.dozenten[0];
    $scope.gr.raum = $scope.raeume[0];
    $scope.gr.minGr = 0;
    $scope.gr.maxGr = 10;
    $scope.gr.anzTm = $scope.anzTmTeam[0];

    // ------------------------------------------------------

    //Preconditions
    // --------------------------------------------------------------------------------------

    // Prüft die Eingaben auf Korrektheit -> Wird noch um einige Bedingungen erweitert TODO
    function isValidInput(){

      return true;
    }
    // --------------------------------------------------------------------------------------


    // Helper
    // --------------------------------------------------------------

    // Das "KW" aus der Auswahl entfernen, für bessere Darstellung
    function fetchDigits(termine){

      termine.tm1 = parseInt(termine.tm1.replace(/KW/, ''));
      termine.tm2 = parseInt(termine.tm2.replace(/KW/, ''));
      termine.tm3 = parseInt(termine.tm3.replace(/KW/, ''));
      termine.tm4 = parseInt(termine.tm4.replace(/KW/, ''));
    }

    //Abgabetermine zur Stringdarstellung konvertieren
    function toStr(termine){
      var tm = "[";
      tm += termine.tm1;
      tm += ", " + termine.tm2;
      tm += ", " + termine.tm3;
      tm += ", " + termine.tm4;
      tm += "]";
      return tm;
    }

    // Generiert einen zufälligen Index für ein Array
    function genRdIndex(arr){
      var index;
      index = Math.floor(Math.random() * arr.length);
      return index;
    }

    // ---------------------------------------------------------------


    // Button-klick Funktionen
    // ---------------------------------------------------------------------------
    $scope.addGruppe = function(){
      if(isValidInput()){

        $scope.gr.dozent = $scope.dozenten[genRdIndex($scope.dozenten)];
        $scope.gr.assistent = $scope.assistenten[genRdIndex($scope.assistenten)];
        fetchDigits($scope.gr.termine);
        $scope.hcGruppenDaten.push({fach: $scope.gr.fach,
                                    grpNr: $scope.gr.grpNr,
                                    kw: toStr($scope.gr.termine),
                                    startUhrzeit: $scope.gr.startUhrzeit,
                                    endUhrzeit: $scope.gr.endUhrzeit,
                                    dozent: $scope.gr.dozent,
                                    raum: $scope.gr.raum,
                                    minGr: $scope.gr.minGr,
                                    maxGr: $scope.gr.maxGr});

      autoscroller.erstellen = null;
      
      }else{
        alert("Keine gültige Eingabe für min und/oder max und/oder Gruppenummer");
      }
      // Felder wieder zurücksetzen
      $scope.gr = {};
    }

    // ---------------------------------------------------------------------------
	};

  // Controller bei der App "anmelden"
	app.controller("GruppenController", GruppenController);

// Code sofort ausführen
}());
