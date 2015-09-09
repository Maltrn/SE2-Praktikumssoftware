/**
 * Managed die Veranstaltungen
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Daten via SpringMVC Backend -> folgt später
  var VeranstaltungsController = function($scope, autoscroller /*, $http*/ ) {

    // Locals
    // -----------
    var index;
    //------------

    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // ====================================================================================

    $scope.semester = [1, 2, 3, 4, 5, 6];
    $scope.fachbereiche = ["AI", "TI", "WI"];
    $scope.maxTeilnehmer = [50, 60, 70, 80, 90];
    $scope.currTeilnehmer = $scope.minTeilnehmer = [10, 20, 30, 40, 50];

    // Array aus Veranstaltungsobjekten
    $scope.hcVeranstaltungsDaten = [{
      fach: "GKAP",
      dozent: "Padberg",
      assistent: "Oelker",
      min: 10,
      curr: 60,
      max: 80
    }, {
      fach: "ADP",
      dozent: "Kleine",
      assistent: "Blank",
      min: 10,
      curr: 50,
      max: 60
    }, {
      fach: "BSP",
      dozent: "Huebner",
      assistent: "",
      min: 10,
      curr: 70,
      max: 80
    }, {
      fach: "SEP",
      dozent: "",
      assistent: "",
      min: 10,
      curr: 0,
      max: 80
    }, {
      fach: "BWP",
      dozent: "Gerken",
      assistent: "",
      min: 10,
      curr: 50,
      max: 80
    }];
    // ====================================================================================



    // Felder initialisiern
    // -------------------------------------------------------------------------
    $scope.va = {}; // Veranstaltungsobject anlegen
    $scope.va.fach = ""; // Attribut Fach anlegen und initialsieren
    $scope.va.dozent = ""; // ...
    $scope.va.assistent = "";
    $scope.va.min = 0;
    $scope.va.min = $scope.minTeilnehmer[0];
    $scope.va.curr = $scope.currTeilnehmer[0];
    $scope.va.max = $scope.maxTeilnehmer[0];
    $scope.va.fachbereich = $scope.fachbereiche[0];
    $scope.va.sem = $scope.semester[0];
    // -------------------------------------------------------------------------


    //Preconditions -> TODO: Wird noch um weitere erweitert
    // ------------------------------------------------------------

    $scope.isValidNumber = function(x) {
      return x % 1 === 0 && x > 0;
    }

    $scope.isValidMin = function(min) { // Mehr Bedingungen, damit UI nicht von Fehlern geflutet
      if ($scope.isValidNumber(min) && $scope.isValidNumber($scope.va.max)) {

        return min <= $scope.va.max;
      }

      return true;

    }

    $scope.isValidMax = function(max) { // Mehr Bedingungen, damit UI nicht von Fehlern geflutet
      if ($scope.isValidNumber(max) && $scope.isValidNumber($scope.va.min)) {

        return max >= $scope.va.min;
      }

      return true;

    }

    // Bedingung um den Speichern-Button zu aktivieren/deaktivieren
    // TODO: Muss noch um restliche Felder ergänzt werden
    $scope.filledComplete = function() {

      return $scope.isValidMin($scope.va.min) && $scope.isValidMax($scope.va.max);
    }

    // ------------------------------------------------------------


    // Button-klick Funktionen
    // ---------------------------------------------------------------------------

    // Initialisiert das Veranstaltung-Bearbeiten-Popup mit den vorhandenen Werten
    $scope.initVeranPopup = function(ngIndex) {
      $scope.va.dozent = $scope.hcVeranstaltungsDaten[ngIndex].dozent;
      $scope.va.assistent = $scope.hcVeranstaltungsDaten[ngIndex].assistent;
      $scope.va.min = $scope.hcVeranstaltungsDaten[ngIndex].min;
      $scope.va.max = $scope.hcVeranstaltungsDaten[ngIndex].max;
      index = ngIndex;
    }

    // Fügt eine neue Veranstaltung in die Tabelle ein -> TODO: Preconditions
    $scope.addVeranstaltung = function() {
      $scope.hcVeranstaltungsDaten.push({
        fach: $scope.va.fach,
        dozent: $scope.va.dozent,
        assistent: $scope.va.assistent,
        min: $scope.va.min,
        curr: 0,
        max: $scope.va.max
      });
      autoscroller.erstellen = null;
    }

    // Ändert den Tabelleneintrag der Veranstaltung anhand der Benutzereingaben -> // TODO: Preconditions
    $scope.editVeranstaltung = function() {
        $scope.hcVeranstaltungsDaten[index].dozent = $scope.va.dozent;
        $scope.hcVeranstaltungsDaten[index].assistent = $scope.va.assistent;
        $scope.hcVeranstaltungsDaten[index].min = $scope.va.min;
        $scope.hcVeranstaltungsDaten[index].max = $scope.va.max;
      }
      // ----------------------------------------------------------------------------
  };

  // Controller bei der App "anmelden"
  app.controller("VeranstaltungsController", VeranstaltungsController);

  // Code sofort ausführen
}());
