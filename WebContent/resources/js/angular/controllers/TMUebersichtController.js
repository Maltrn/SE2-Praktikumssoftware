/**
 * Comtroller um die Teilnehmer einer Gruppe zu managen
 *
 * TODO: Wird erst vollständig implementiert, wenn wir eine reale Datenbank haben
         Vorerst nur Hardcoded Daten und keine Kommunikation mit GruppenController
 *
 * Beispiel Nutzung: Bei "Weiter zur Teilnehmerübersicht" werden mit
 * diesem Controller alle Teilnehmer eine Gruppe aus der Datenbank geholt.
 * Dafür wird es einen Service geben, der zwischen GruppenController und
 * TMUebersichtController vermittelt.
 */

(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object, $http: holt JSON Daten via SpringMVC Backend -> folgt später
  var TMUebersichtController = function($scope, autoscroller, tmGruppenService /*, $http*/ ) {

    // Scope-Felder
    // ------------------
    $scope.tm = {};
    $scope.tm.fach = tmGruppenService.getFach();
    $scope.tm.grpNr = tmGruppenService.getGruppe();
    $scope.tm.matrNr;
    $scope.tm.vorn;
    $scope.tm.nachn;
    $scope.tm.tmNr;
    $scope.tm.tmPartner;
    $scope.tm.pvl;
    $scope.tm.note;
    $scope.entfIndex;
    // ------------------



    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // =================================================================================================================================================

    $scope.teilnehmer = [{
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

    // Funktionen um Ergebnisse darzustellen
    // --------------------------------------------------
    // Gibt den PVL-Status eines Teilnehmers in der Liste zurück
    $scope.getPVL = function(ngIndex) {

      return $scope.teilnehmer[ngIndex].pvl;
    }

    // Gibt das Success-Icon zurück
    $scope.getSuccess = function() {
      return "resources/icons/success.html";
    }

    // Gibt das Fail-Icon zurück
    $scope.getFail = function() {
      return "resources/icons/fail.html";
    }

    // Gibt das Open-Icon zurück
    $scope.getOpen = function() {
      return "resources/icons/open.html";
    }

    // Prüft ob Teilnehmer benotet wurde
    $scope.isOpen = function(ngIndex) {
      return $scope.teilnehmer[ngIndex].note === -1;
    }

    // Prüft ob Teilnehmer Klausur bestanden hat
    $scope.isSuccess = function(ngIndex) {
      return $scope.teilnehmer[ngIndex].note > 4;
    }

    // Iinitlaisiert das Teilnehmer-Detail-Popup
    $scope.initTmDetails = function(ngIndex) {
      $scope.tm.matrNr = $scope.teilnehmer[ngIndex].matrNr;
      $scope.tm.vorn = $scope.teilnehmer[ngIndex].vorn;
      $scope.tm.nachn = $scope.teilnehmer[ngIndex].nachn;
      $scope.tm.tmNr = $scope.teilnehmer[ngIndex].tmNr;
      $scope.tm.tmPartner = $scope.teilnehmer[ngIndex].tmPartner;
      $scope.tm.pvl = $scope.teilnehmer[ngIndex].pvl;

      if ($scope.teilnehmer[ngIndex].note == -1) {
        $scope.tm.note = "offen";
      } else {
        $scope.tm.note = $scope.teilnehmer[ngIndex].note;
      }
    }

    // Initlalisiert den Index des zu entfernden Eintrags
    $scope.initEntfIndex = function(ngIndex) {
      $scope.entfIndex = ngIndex;
    }

    // Entfernt den Eintrag auf dem der Index zeigt
    $scope.entferneTeilnehmer = function(ngIndex) {
      $scope.teilnehmer.splice($scope.entfIndex, 1);
      $scope.entfIndex = 0;

      // Modal schließen forcieren, bug über normalen Weg (data-dismiss-tag) TODO: FIX
      $('#modalTmEntfernen').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }
  };

  // Controller bei der App "anmelden"
  app.controller("TMUebersichtController", TMUebersichtController);

  // Code sofort ausführen
}());
