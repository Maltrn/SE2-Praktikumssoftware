/**
 * Managed die Popups
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope: Model Object
  var ModalController = function($scope) {

    // Getter für die einzelnen Popups
    // -------------------------------------------------------------
    $scope.getVeranstaltungEdit = function() {
      return "resources/popups/modal_veranstaltung_aendern.html";
    }

    $scope.getVeranstaltungLoesch = function() {
      return "resources/popups/modal_veranstaltung_loeschen.html";
    }

    $scope.getGruppeEdit = function() {
      return "resources/popups/modal_gruppe_aendern.html";
    }

    $scope.getGruppeDetails = function() {
      return "resources/popups/modal_gruppe_details.html";
    }

    $scope.getModalNew = function() {
      return "resources/popups/modal_veranstaltung_erstellen.html";
    }

    $scope.getModalPVL = function() {
        return "resources/popups/modal_pvl.html";
      }
      // -------------------------------------------------------------

    $scope.getModalNote = function() {
      return "resources/popups/modal_note.html";
    }

    $scope.getModalTmDetailsPrakt = function() {
      return "resources/popups/modal_teilnehmer_details_prakt.html";
    }

    $scope.getModalTMLeistungen = function() {
      return "resources/popups/modal_teilnehmer_details_leist.html";
    }

    $scope.getModalTmEntfernen = function() {
      return "resources/popups/modal_tm_entfernen.html";
    }

    $scope.getGruppeLoeschen = function() {
      return "resources/popups/modal_gruppe_loeschen.html";
    }
  };

  // Controller bei der App "anmelden"
  app.controller("ModalController", ModalController);

  // Code sofort ausführen
}());
