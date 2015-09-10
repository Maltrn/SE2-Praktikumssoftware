/**
 * Managed die Veranstaltungen
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Daten via SpringMVC Backend -> folgt später
  var VeranstaltungsController = function($scope, autoscroller, vgservice /*, $http*/ ) {

    // Locals
    // -----------
    var indexLoesch;
    var indexEdit;
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
    $scope.initVeranBearbeitenPopup = function(ngIndex) {
      $scope.va.dozent = $scope.hcVeranstaltungsDaten[ngIndex].dozent;
      $scope.va.assistent = $scope.hcVeranstaltungsDaten[ngIndex].assistent;
      $scope.va.min = $scope.hcVeranstaltungsDaten[ngIndex].min;
      $scope.va.max = $scope.hcVeranstaltungsDaten[ngIndex].max;
      indexEdit = ngIndex;
    }

    // Fügt eine neue Veranstaltung in die Tabelle ein -> TODO: Preconditions
    $scope.addVeranstaltung = function() {
      $scope.hcVeranstaltungsDaten.push({
        fach: $scope.va.fach,
        dozent: $scope.va.dozent,
        min: $scope.va.min,
        curr: 0,
        max: $scope.va.max
      });



      autoscroller.erstellen = null;
    }

    // Verorgt den vgservice mit den benötigten Daten für die Gruppenübersicht
    $scope.initGruppenUebersicht = function(ngIndex) {

      vgservice.setFach($scope.hcVeranstaltungsDaten[ngIndex].fach);
      // TODO: Weitere Informatioen -> Erst wenn reale Datenbank
    }

    // Ändert den Tabelleneintrag der Veranstaltung anhand der Benutzereingaben
    $scope.editVeranstaltung = function() {
      $scope.hcVeranstaltungsDaten[indexEdit].dozent = $scope.va.dozent;
      $scope.hcVeranstaltungsDaten[indexEdit].min = $scope.va.min;
      $scope.hcVeranstaltungsDaten[indexEdit].max = $scope.va.max;
    }

    // Initialisiert den Index der zu löschenden Veranstaltung
    $scope.initVeranstaltungLoeschen = function(ngIndex) {
      console.log(ngIndex);
      indexLoesch = ngIndex;
    }

    $scope.loescheVeranstaltung = function() {
        $scope.hcVeranstaltungsDaten.splice(indexLoesch, 1);

        // Modal schließen forcieren, bug über normalen Weg (data-dismiss-tag) TODO: FIX
        $('#gruppeLoeschen').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      }
      // ----------------------------------------------------------------------------
  };

  // Controller bei der App "anmelden"
  app.controller("VeranstaltungsController", VeranstaltungsController);

  // Code sofort ausführen
}());
