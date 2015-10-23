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
    $scope.gruppe = DBGruppTmService.getGruppe();
    console.log("Gruppe:");
    console.log($scope.gruppe);
    $scope.tm.matrNr;
    $scope.tm.vorn;
    $scope.tm.nachn;
    $scope.tm.tmNr;
    $scope.tm.tmPartner;
    $scope.tm.pvl;
    $scope.tm.note;
    $scope.entfIndex;
    $scope.teilnehmer = DBGruppTmService.hcTeilnehmer;
    // -------------------------------------------------


    // Iinitlaisiert das Teilnehmer-Detail-Popup
    $scope.initTmDetails = function(matrNr) {

      var index = DBGruppTmService.sucheStudent(matrNr);
      $scope.tm.matrNr = $scope.teilnehmer[index].student.matrNr;
      $scope.tm.vorn = $scope.teilnehmer[index].student.vorname;
      $scope.tm.nachn = $scope.teilnehmer[index].student.nachname;
      $scope.tm.tmNr = $scope.teilnehmer[index].teamID;
      
      $scope.tm.tmPartner = DBGruppTmService.sucheTeamPartner($scope.tm.tmNr, matrNr);  
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
