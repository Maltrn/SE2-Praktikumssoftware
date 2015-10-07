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
  var TMUebersichtController = function($scope, autoscroller, DBGruppTmService /*, $http*/ ) {

    // Scope-Felder
    // ------------------
    $scope.tm = {};
    $scope.tm.fach = DBGruppTmService.getFach();
    $scope.tm.grpNr = DBGruppTmService.getGruppe();
    $scope.tm.matrNr;
    $scope.tm.vorn;
    $scope.tm.nachn;
    $scope.tm.tmNr;
    $scope.tm.tmPartner;
    $scope.tm.pvl;
    $scope.tm.note;
    $scope.entfIndex;
    $scope.teilnehmer = DBGruppTmService.hcTeilnehmer;
    // ------------------


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
    $scope.initTmDetails = function(matrNr) {

      var index = DBGruppTmService.sucheStudent(matrNr);
      $scope.tm.matrNr = DBGruppTmService.hcTeilnehmer[index].matrNr;
      $scope.tm.vorn = DBGruppTmService.hcTeilnehmer[index].vorn;
      $scope.tm.nachn = DBGruppTmService.hcTeilnehmer[index].nachn;
      $scope.tm.tmNr = DBGruppTmService.hcTeilnehmer[index].tmNr;
      $scope.tm.tmPartner = DBGruppTmService.hcTeilnehmer[index].tmPartner;
      $scope.tm.pvl = DBGruppTmService.hcTeilnehmer[index].pvl;

      if (DBGruppTmService.hcTeilnehmer[index].note == -1) {
        $scope.tm.note = "offen";
      } else {
        $scope.tm.note = DBGruppTmService.hcTeilnehmer[index].note;
      }
    }

    // Initlalisiert den Index des zu entfernden Eintrags
    $scope.initTmLoeschen = function(matrNr) {
      $scope.entfIndex = DBGruppTmService.sucheStudent(matrNr);
    }

    // Entfernt den Eintrag auf dem der Index zeigt
    $scope.entferneTeilnehmer = function() {
      DBGruppTmService.loescheTm($scope.entfIndex);
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
