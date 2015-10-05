/**
 * Managed die Veranstaltungen
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Daten via SpringMVC Backend -> folgt später
  var VeranstaltungsController = function($scope, autoscroller, vgservice, DBVeranstService /*, $http*/ ) {

    // Locals
    // ###########################################################################################################
    var indexLoesch;
    var indexEdit;
    // ###########################################################################################################


    // Felder initialisiern
    // ###########################################################################################################
    $scope.va = {}; // Veranstaltungsobject anlegen
    $scope.va.fach = ""; // Attribut Fach anlegen und initialsieren
    $scope.va.dozent = ""; // ...
    $scope.va.assistent = "";
    $scope.va.min = 0;
    $scope.va.min = 10;
    $scope.va.curr = 0;
    $scope.va.max = 60;
    $scope.va.fachbereich = DBVeranstService.fachbereiche[0];
    $scope.va.sem = DBVeranstService.semester[0];
    $scope.veranstaltungen = DBVeranstService.hcVeranstaltungsDaten;
    $scope.fachbereiche = DBVeranstService.fachbereiche;
    $scope.semester = DBVeranstService.semester;
    // ###########################################################################################################


    //Preconditions -> TODO: Wird noch um weitere erweitert
    // ###########################################################################################################

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
    // ###########################################################################################################-



    // Button-klick Funktionen
    // ###########################################################################################################

    // Initialisiert das Veranstaltung-Bearbeiten-Popup mit den vorhandenen Werten
    $scope.initVeranBearbeitenPopup = function(ngIndex) {
      $scope.va.dozent = DBVeranstService.hcVeranstaltungsDaten[ngIndex].dozent;
      $scope.va.assistent = DBVeranstService.hcVeranstaltungsDaten[ngIndex].assistent;
      $scope.va.min = DBVeranstService.hcVeranstaltungsDaten[ngIndex].min;
      $scope.va.max = DBVeranstService.hcVeranstaltungsDaten[ngIndex].max;
      indexEdit = ngIndex;
    }

    // Fügt eine neue Veranstaltung in die Tabelle ein -> TODO: Preconditions
    $scope.addVeranstaltung = function() {

      var va = {};
      va.fach = $scope.va.fach;
      va.dozent = $scope.va.dozent;
      va.min = $scope.va.min;
      va.curr = 0; // Später dynamische Ermittlung
      va.max = $scope.va.max;

      // TODO: implementiere Berechnung
      va.maxGr = 10;
      va.currGr = 0;

      if (!DBVeranstService.addVeranstaltung(va)) {

        // Fehlermeldung -> TODO: implement

      }

      autoscroller.erstellen = null;
    }

    // Verorgt den vgservice mit den benötigten Daten für die Gruppenübersicht
    $scope.initGruppenUebersicht = function(ngIndex) {

      vgservice.setFach(DBVeranstService.hcVeranstaltungsDaten[ngIndex].fach);
      // TODO: Weitere Informatioen -> Erst wenn reale Datenbank
    }

    // Ändert den Tabelleneintrag der Veranstaltung anhand der Benutzereingaben
    $scope.editVeranstaltung = function() {

      var edit = {};
      edit.dozent = $scope.va.dozent;
      edit.min = $scope.va.min;
      edit.max = $scope.va.max;

      if (!DBVeranstService.editVeranstaltung(indexEdit, edit)) {
        // Fehlermeldung
      }
    }

    // Initialisiert den Index der zu löschenden Veranstaltung
    $scope.initVeranstaltungLoeschen = function(ngIndex) {
      indexLoesch = ngIndex;
    }

    $scope.loescheVeranstaltung = function() {

        if (!DBVeranstService.loescheVeranstaltung(indexLoesch)) {
          // Fehlermeldung
        }

        // Modal schließen forcieren, bug über normalen Weg (data-dismiss-tag) TODO: FIX
        $('#gruppeLoeschen').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      }
      // ###########################################################################################################
  };

  // Controller bei der App "anmelden"
  app.controller("VeranstaltungsController", VeranstaltungsController);

  // Code sofort ausführen
}());
