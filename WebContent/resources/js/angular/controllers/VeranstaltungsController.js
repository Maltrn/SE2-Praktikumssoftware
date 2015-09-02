/**
 * Managed die Veranstaltungen
 */
(function () {

	// Controllerdefinition
  var app = angular.module("SE2-Software");

	// $scope = model object, $http: holt JSON Daten via SpringMVC Backend -> folgt später
	var VeranstaltungsController = function($scope /*, $http*/){




    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    $scope.semester = [1, 2, 3, 4, 5, 6];
    $scope.fachbereiche = ["AI", "TI", "WI"];
    $scope.maxTeilnehmer = [50, 60, 70, 80, 90];
    $scope.minTeilnehmer = [10, 20, 30, 40, 50];

    $scope.hcVeranstaltungsDaten =
                [{fach: "GKAP", dozent: "Padberg", assistent: "Oelker", min: 60, max: 80},
                 {fach: "ADP", dozent: "Kleine", assistent: "Blank", min: 50, max: 60},
                 {fach: "BSP", dozent: "Huebner", assistent: "", min: 50, max: 80},
                 {fach: "SEP", dozent: "", assistent: "", min: 0, max: 80},
                 {fach: "BWP", dozent: "Gerken", assistent: "", min: 50, max: 80}];
    // ====================================================================================


    // Felder initialisiern
    // ---------------------
    $scope.va = {};
    $scope.va.fach = "";
    $scope.va.dozent = "";
    $scope.va.assistent = "";
    $scope.va.min = $scope.minTeilnehmer[0];
    $scope.va.max = $scope.maxTeilnehmer[0];

    // ---------------------

    //Preconditions
    // ------------------------------------------------------------

    // Prüft die Eingaben auf Korrektheit -> Wird noch um einige Bedingungen erweitert TODO: erweitern
    function isValidNumber(x){
      return x % 1 === 0 && $scope.va.min > 0 && $scope.va.max > 0;
    }

    // ------------------------------------------------------------


    // Button-klick Funktionen
    // ---------------------------------------------------------------------------
    $scope.addVeranstaltung = function(){

      if(isValidNumber($scope.va.min) && isValidNumber($scope.va.max)){

        $scope.hcVeranstaltungsDaten.push({fach: $scope.va.fach,
                                           dozent: $scope.va.dozent,
                                           assistent: $scope.va.assistent,
                                           min: 0,
                                           max: $scope.va.max});
      }else{
        alert("Keine gültige Eingabe für min und/oder max");
      }


      // Felder wieder zurücksetzen
      $scope.va = {};
    }

    // ----------------------------------------------------------------------------
	};

  // Controller bei der App "anmelden"
	app.controller("VeranstaltungsController", VeranstaltungsController);

// Code sofort ausführen
}());
